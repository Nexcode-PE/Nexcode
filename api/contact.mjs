import nodemailer from 'nodemailer';

const response = (payload, status = 200) =>
  Response.json(payload, {
    status,
    headers: { 'Cache-Control': 'no-store' },
  });

const allowedProjectTypes = new Set([
  'Landing page',
  'Página informativa',
  'Sitio corporativo',
  'Aplicación móvil',
  'Sistema web',
  'Solución personalizada',
  'Mantenimiento',
  'Otro',
]);
const allowedContactMethods = new Set(['', 'Correo electrónico', 'WhatsApp', 'LinkedIn']);
const allowedTimelines = new Set(['', 'Aún no lo sé', 'Lo antes posible', 'En 1–2 meses', 'En 3–6 meses', 'Más adelante']);

export default {
  async fetch(request) {
    if (request.method !== 'POST') {
      return response({ error: 'Método no permitido.' }, 405);
    }

    const origin = request.headers.get('origin');
    const host = request.headers.get('host');
    if (origin && host) {
      try {
        if (new URL(origin).host !== host) return response({ error: 'Origen no permitido.' }, 403);
      } catch {
        return response({ error: 'Origen no permitido.' }, 403);
      }
    }
    if (!request.headers.get('content-type')?.toLowerCase().startsWith('application/json')) {
      return response({ error: 'Tipo de contenido no permitido.' }, 415);
    }

    const contentLength = Number(request.headers.get('content-length') || 0);
    if (contentLength > 12000) return response({ error: 'La consulta es demasiado extensa.' }, 413);

    let data;
    try {
      const body = await request.text();
      if (body.length > 12000) return response({ error: 'La consulta es demasiado extensa.' }, 413);
      data = JSON.parse(body);
    } catch {
      return response({ error: 'No se pudo leer la consulta.' }, 400);
    }
    if (!data || typeof data !== 'object' || Array.isArray(data)) {
      return response({ error: 'Formato de consulta no válido.' }, 400);
    }

    // A honeypot filters basic bots while leaving the visible form unchanged.
    if (typeof data.website === 'string' && data.website.trim()) {
      return response({ ok: true });
    }

    const fields = {
      name: String(data.name || '').trim(),
      company: String(data.company || '').trim(),
      email: String(data.email || '').trim(),
      projectType: String(data.projectType || '').trim(),
      preferredContact: String(data.preferredContact || '').trim(),
      budget: String(data.budget || '').trim(),
      timeline: String(data.timeline || '').trim(),
      message: String(data.message || '').trim(),
    };
    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email);
    if (
      fields.name.length < 2 ||
      fields.name.length > 100 ||
      fields.company.length > 150 ||
      fields.email.length > 254 ||
      !emailIsValid ||
      !allowedProjectTypes.has(fields.projectType) ||
      !allowedContactMethods.has(fields.preferredContact) ||
      fields.budget.length > 100 ||
      !allowedTimelines.has(fields.timeline) ||
      !fields.message ||
      fields.message.length > 3000 ||
      !['on', true, 'true'].includes(data.consent)
    ) {
      return response({ error: 'Revisa los campos obligatorios e inténtalo de nuevo.' }, 400);
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
    const recipient = process.env.CONTACT_TO || gmailUser;
    if (!gmailUser || !gmailAppPassword || !recipient) {
      return response({ error: 'El canal de correo todavía no está configurado.' }, 503);
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: { user: gmailUser, pass: gmailAppPassword.replace(/\s/g, '') },
    });
    const safeName = fields.name.replace(/[\r\n]+/g, ' ').slice(0, 100);
    const text = [
      'Nueva consulta recibida desde el sitio de Nexcode',
      '',
      `Nombre: ${fields.name}`,
      `Negocio: ${fields.company || 'No indicado'}`,
      `Correo: ${fields.email}`,
      `Proyecto: ${fields.projectType}`,
      `Contacto preferido: ${fields.preferredContact || 'Sin preferencia'}`,
      `Presupuesto: ${fields.budget || 'No indicado'}`,
      `Plazo: ${fields.timeline || 'No indicado'}`,
      '',
      'Descripción:',
      fields.message,
      '',
      'La persona aceptó el consentimiento de la política de privacidad.',
    ].join('\n');

    try {
      await transporter.sendMail({
        from: { name: 'Nexcode | Formulario web', address: gmailUser },
        to: recipient,
        replyTo: fields.email,
        subject: `Nueva consulta web: ${safeName}`,
        text,
      });
      return response({ ok: true });
    } catch (error) {
      console.error('[contact] No se pudo enviar el correo:', error?.code || 'SMTP_ERROR');
      return response({ error: 'No se pudo enviar la consulta. Inténtalo más tarde.' }, 502);
    }
  },
};
