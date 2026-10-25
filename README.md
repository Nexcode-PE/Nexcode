# Sitio corporativo Nexcode

Web corporativa estática y adaptable, sin dependencias de instalación ni servicios externos. El frontend se compone de HTML, CSS y JavaScript nativos; no se ha añadido un backend porque los proyectos, canales de contacto y cuentas receptoras aún no están confirmados.

## Ejecutar localmente

Con Python 3 disponible, desde esta carpeta ejecuta:

```powershell
python -m http.server 4173
```

Abre `http://localhost:4173`. También puedes servir esta carpeta desde cualquier hosting estático que admita archivos HTML.

## Personalización

Edita `src/config.js` para actualizar marca, servicios, preguntas, datos de contacto, proyectos, integrantes y tecnologías. Los arreglos de equipo, proyectos y tecnologías están vacíos para evitar publicar datos ficticios.

Los servicios usan `id`, `name`, `category`, `description`, `problem`, `benefits`, `deliverables`, `image` e `imageAlt`. Mantén las rutas de imágenes locales.

Para publicar proyectos, añade objetos a `projects` con un `id` único, `name`, `category` (`web`, `mobile`, `systems`, `backend`, `prototype` u `other`), `summary`, `status`, `image` y, según corresponda, `objective`, `problem`, `solution`, `features`, `architecture`, `decisions`, `technologies`, `participants`, `screenshots` y `links: { demo, repository }`. Los enlaces de demostración y repositorios solo aparecen cuando se configuran. Cada ficha se abre en `project.html?id=<id>`.

Los perfiles de `team` admiten `name`, `role`, `specialty`, `bio`, `photo`, `technologies`, `github`, `linkedin` y `website`. Los registros de `technologies` admiten `name`, `category`, `description`, `symbol` y `projects`. Los filtros se generan a partir de esas categorías.

Completa `contact` con correo, WhatsApp (número internacional), LinkedIn, GitHub y `endpoint` cuando los canales estén confirmados. Para activar el formulario, configura un endpoint HTTPS que valide la petición en el servidor, aplique protección contra spam y devuelva éxito solo tras recibirla. No pongas secretos en `config.js`. El formulario envía JSON con nombre, negocio, correo, tipo de proyecto, medio preferido, presupuesto, plazo, descripción y consentimiento. Hasta configurar el endpoint, valida los campos pero avisa que no transmite la consulta.

El borrador `privacy.html` debe ser revisado y completado con la jurisdicción, el responsable del tratamiento, los plazos de conservación y los canales para ejercer derechos antes de recibir datos personales.

## Identidad visual

Los PNG de `public/images/brand/` son recortes individuales tomados del moodboard proporcionado, con límites ajustados para quitar rótulos de sección y líneas divisorias. Conservan el fondo de cada variante; no son transparentes, SVG ni archivos maestros. Se pueden sustituir por originales SVG/PNG transparentes actualizando `NEXCODE.brand.assets` y las rutas usadas en `index.html`.

## Incluido

- Inicio, servicios, proyectos con filtros y fichas de detalle (estado vacío honesto), nosotros, equipo (pendiente de datos), tecnologías filtrables (pendientes de verificación), metodología, preguntas frecuentes y contacto.
- Menú móvil accesible, selector claro/oscuro con preferencia local y logo monocromo en la cabecera clara.
- Validación de campos y estado explícito del envío, sin éxito simulado.
- Metadatos básicos, favicon, HTML semántico, foco visible y respeto por `prefers-reduced-motion`.
- Política de privacidad en forma de borrador y `robots.txt`. Sitemap y metadatos de dominio se deben añadir tras confirmar el dominio.

## Pendiente antes de publicar

- Confirmar y añadir perfiles reales del equipo, proyectos públicos y tecnologías utilizadas.
- Completar correo, WhatsApp, redes sociales y endpoint seguro del formulario.
- Revisar el texto legal de privacidad con responsable y jurisdicción reales.
- Añadir el dominio final y sus metadatos de producción.
- Sustituir los recortes del moodboard por recursos maestros transparentes si Nexcode los obtiene.
- Configurar cabeceras de seguridad y CSP en el hosting definitivo.

## Verificación realizada

Se validó la sintaxis de los tres scripts JavaScript, las referencias locales y anclas en las tres páginas, y una respuesta HTTP `200` para las páginas, estilos, scripts y logos principales. La página de inicio y el estado vacío del detalle de proyecto se abrieron en navegador de escritorio. No se ejecutó una matriz en varios tamaños de pantalla ni se verificó un endpoint de envío porque aún no existe uno configurado.
