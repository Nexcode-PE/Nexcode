# Sitio corporativo Nexcode

Web corporativa adaptable con frontend HTML/CSS/JavaScript y una función serverless para recibir consultas en Gmail. El envío se hace desde el servidor para mantener las credenciales fuera del navegador.

## Ejecutar localmente

Para una vista estática con Python 3, desde esta carpeta ejecuta:

```powershell
python -m http.server 4173
```

Abre `http://localhost:4173`. Este servidor solo muestra el frontend; para probar el endpoint de correo localmente instala Vercel CLI y ejecuta `vercel dev` con sus variables de entorno configuradas.

## Personalización

Edita `src/config.js` para actualizar marca, servicios, preguntas, datos de contacto, proyectos, integrantes y tecnologías. Los arreglos de equipo, proyectos y tecnologías están vacíos para evitar publicar datos ficticios.

Los servicios usan `id`, `name`, `category`, `description`, `problem`, `benefits`, `deliverables`, `image` e `imageAlt`. Mantén las rutas de imágenes locales.

Para publicar proyectos, añade objetos a `projects` con un `id` único, `name`, `category` (`web`, `mobile`, `systems`, `backend`, `prototype` u `other`), `summary`, `status`, `image` y, según corresponda, `objective`, `problem`, `solution`, `features`, `architecture`, `decisions`, `technologies`, `participants`, `screenshots` y `links: { demo, repository }`. Los enlaces de demostración y repositorios solo aparecen cuando se configuran. Cada ficha se abre en `project.html?id=<id>`.

Los perfiles de `team` admiten `name`, `role`, `specialty`, `bio`, `photo`, `technologies`, `github`, `linkedin` y `website`. Los registros de `technologies` admiten `name`, `category`, `description`, `symbol` y `projects`. Los filtros se generan a partir de esas categorías.

Actualiza `contact` en `src/config.js` con los canales confirmados y `socials` con redes oficiales. La sección del pie solo presenta los enlaces configurados. El formulario usa `api/contact.mjs`, valida los datos, filtra un campo honeypot y confirma el envío solo cuando Gmail acepta el mensaje. La función envía el contenido como texto plano y establece el correo del visitante como dirección de respuesta.

## Configurar el envío por Gmail en Vercel

1. En la cuenta `nexcodepe@gmail.com`, activa la verificación en dos pasos y crea una contraseña de aplicación para correo. No uses la contraseña normal de la cuenta.
2. En Vercel, abre el proyecto y ve a **Settings → Environment Variables**. Añade `GMAIL_USER` con `nexcodepe@gmail.com`, `GMAIL_APP_PASSWORD` con la contraseña de aplicación y `CONTACT_TO` con el buzón que recibirá las consultas (puede ser el mismo Gmail).
3. Añade las variables al entorno **Production** (y a **Preview** si quieres probar en despliegues de vista previa) y vuelve a desplegar.
4. Verifica el endpoint `/api/contact` con el formulario desplegado. La función no persiste consultas en una base de datos; los mensajes entregados quedan en el buzón de correo.

No compartas ni subas `GMAIL_APP_PASSWORD` al repositorio, a `src/config.js` ni a capturas. Para desarrollo local, copia `.env.example` como `.env.local`, completa allí la contraseña de aplicación (el archivo está ignorado por Git) y ejecuta `vercel dev` para que la función serverless esté disponible.

El borrador `privacy.html` debe ser revisado y completado con la jurisdicción, el responsable del tratamiento, los plazos de conservación y los canales para ejercer derechos antes de recibir datos personales.

## Identidad visual

Los PNG de `public/images/brand/` son recortes individuales tomados del moodboard proporcionado, con límites ajustados para quitar rótulos de sección y líneas divisorias. Conservan el fondo de cada variante; no son transparentes, SVG ni archivos maestros. Se pueden sustituir por originales SVG/PNG transparentes actualizando `NEXCODE.brand.assets` y las rutas usadas en `index.html`.

## Incluido

- Inicio, servicios, proyectos con filtros y fichas de detalle (estado vacío honesto), nosotros, equipo (pendiente de datos), tecnologías filtrables (pendientes de verificación), metodología, preguntas frecuentes y contacto.
- Menú móvil accesible, selector claro/oscuro con preferencia local y logo monocromo en la cabecera clara.
- Validación de campos y envío de consultas a Gmail mediante función serverless, sin exponer credenciales en el cliente.
- Metadatos básicos, favicon, HTML semántico, foco visible y respeto por `prefers-reduced-motion`.
- Política de privacidad en forma de borrador y `robots.txt`. Sitemap y metadatos de dominio se deben añadir tras confirmar el dominio.

## Pendiente antes de publicar

- Confirmar y añadir perfiles reales del equipo, proyectos públicos y tecnologías utilizadas.
- Confirmar y añadir los demás perfiles sociales oficiales si Nexcode habilita nuevas cuentas.
- Confirmar responsable legal, procedimiento de privacidad y plazo de eliminación de consultas en Gmail antes de activar públicamente el formulario.
- Revisar el texto legal de privacidad con responsable y jurisdicción reales.
- Añadir el dominio final y sus metadatos de producción.
- Sustituir los recortes del moodboard por recursos maestros transparentes si Nexcode los obtiene.
- Configurar cabeceras de seguridad y CSP en el hosting definitivo.

## Verificación realizada

Se validó la sintaxis de los tres scripts JavaScript, las referencias locales y anclas en las tres páginas, y una respuesta HTTP `200` para las páginas, estilos, scripts y logos principales. La página de inicio y el estado vacío del detalle de proyecto se abrieron en navegador de escritorio. No se ejecutó una matriz en varios tamaños de pantalla ni se verificó un endpoint de envío porque aún no existe uno configurado.
