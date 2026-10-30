/* Central source of content and official brand assets. Fill confirmed contact, project, people and technology details before publication. */
window.NEXCODE = {
  brand: {
    name: 'Nexcode',
    tagline: 'Tu idea, nuestra tecnología',
    colors: ['#0B1120', '#00A8FF', '#00D2D0', '#20E3A2', '#FFFFFF'],
    assets: {
      general: 'public/images/brand/nexcode-logo-general.png',
      web: 'public/images/brand/nexcode-logo-web.png',
      mobile: 'public/images/brand/nexcode-logo-mobile.png',
      solutions: 'public/images/brand/nexcode-logo-solutions.png',
      icon: 'public/images/brand/nexcode-app-icon.png',
      monochrome: 'public/images/brand/nexcode-logo-monochrome.png',
    },
  },
  contact: {
    email: 'nexcodepe@gmail.com',
    whatsapp: '',
    github: '',
    endpoint: '/api/contact',
  },
  socials: [
    { name: 'Correo', url: 'mailto:nexcodepe@gmail.com', icon: 'mail' },
    { name: 'Instagram', url: 'https://www.instagram.com/nexcodepe/', icon: 'instagram' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@nexcode3', icon: 'tiktok' },
  ],
  services: [
    {
      id: 'web',
      name: 'Desarrollo web',
      category: 'Presencia digital',
      description:
        'Páginas web claras y adaptables para que tus clientes conozcan lo que ofreces y encuentren cómo contactarte.',
      problem:
        'Tu negocio necesita una presencia propia en internet y una forma sencilla de presentar sus servicios.',
      benefits: [
        'Información disponible para tus clientes',
        'Experiencia adaptable a móviles',
        'Una base preparada para crecer',
      ],
      deliverables: ['Landing pages', 'Sitios informativos y corporativos', 'Catálogos digitales'],
      image: 'public/images/services/web-development-original.png',
      imageAlt: 'Composición visual de una experiencia web personalizada',
      brandAsset: 'public/images/brand/nexcode-logo-web.png',
    },
    {
      id: 'mobile',
      name: 'Aplicaciones móviles',
      category: 'Experiencias móviles',
      description:
        'Aplicaciones diseñadas alrededor de una necesidad concreta y conectadas con los servicios que el proyecto requiera.',
      problem:
        'Tus usuarios necesitan acceder a una experiencia o funcionalidad desde sus dispositivos.',
      benefits: [
        'Flujos pensados para pantallas móviles',
        'Integración con APIs según alcance',
        'Funcionalidades definidas por prioridad',
      ],
      deliverables: [
        'Diseño de interfaces',
        'Aplicaciones móviles según viabilidad',
        'Integración con servicios',
      ],
      image: 'public/images/services/mobile-apps-original.png',
      imageAlt: 'Composición visual de una aplicación móvil personalizada',
      brandAsset: 'public/images/brand/nexcode-logo-mobile.png',
    },
    {
      id: 'solutions',
      name: 'Soluciones digitales',
      category: 'Sistemas a medida',
      description:
        'Sistemas y herramientas digitales cuya funcionalidad se define según tus procesos, requisitos y presupuesto.',
      problem: 'Tu operación necesita organizar información o simplificar tareas repetitivas.',
      benefits: [
        'Flujos adaptados al negocio',
        'Alcance acordado antes de desarrollar',
        'Posibilidad de evolución por etapas',
      ],
      deliverables: [
        'Sistemas web',
        'Paneles de información',
        'Automatización e integraciones según alcance',
      ],
      image: 'public/images/services/digital-solutions-original.png',
      imageAlt: 'Composición visual de un sistema digital conectado',
      brandAsset: 'public/images/brand/nexcode-logo-solutions.png',
    },
  ],
  projects: [
    {
      id: 'ushas-peru',
      name: 'Ushas Perú',
      category: 'web',
      categoryLabel: 'E-commerce',
      status: 'En producción',
      image: 'public/images/projects/ushas-hero.webp',
      imageAlt: 'Campaña de maquillaje de Ushas Perú',
      summary:
        'Plataforma de comercio electrónico de Ushas Perú, disponible en producción con una experiencia de compra clara y adaptable.',
      objective:
        'Ofrecer una experiencia de tienda pública confiable y una base técnica preparada para acompañar el crecimiento comercial de la marca.',
      problem:
        'El proyecto necesitaba una presencia de e-commerce clara, adaptable y lista para crecer sin comprometer la estructura inicial.',
      solution:
        'Se implementó un storefront público en producción con una organización modular que separa la interfaz, los contratos de dominio y los adaptadores de datos.',
      features: [
        'Tienda pública disponible en producción',
        'Catálogo y experiencia de compra adaptables',
        'Arquitectura preparada para servicios e integraciones',
      ],
      architecture:
        'Monorepo con una aplicación storefront en Vue 3 y paquetes compartidos para tipos, dominio y adaptadores de datos. La arquitectura permite incorporar nuevos módulos y servicios conforme evolucione el producto.',
      decisions: [
        'Separar contratos y adaptadores de datos para facilitar nuevas integraciones',
        'Mantener el storefront desacoplado de los servicios de backend',
        'Organizar el proyecto como monorepo para permitir crecimiento por módulos',
      ],
      technologies: [
        'Vue.js',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Vite',
        'pnpm',
        'Turborepo',
        'Vercel',
      ],
      participants: [
        'Italo Bruno Ramos Sotomayor',
        'Dante Jose Saravia Ramirez',
        'Hebert Rodrigo Quiroz Aguilar',
        'José Luis Carbajal Magallanes',
        'Piero Alexandro Laos Saravia',
      ],
      links: {
        website: 'https://ushas-peru.vercel.app/',
      },
    },
    {
      id: 'pierostock',
      name: 'PieroStock',
      category: 'systems',
      categoryLabel: 'Sistema de ventas e inventario',
      status: 'Demo interactiva',
      image: 'public/images/projects/pierostock-dashboard.png',
      imageAlt:
        'Panel principal de PieroStock con resumen de ventas, mejor vendedor e inventario',
      summary:
        'Sistema web para administrar ventas, productos, inventario por lotes y actividad del equipo desde un panel central. La demo presenta datos ficticios.',
      objective:
        'Reunir el control de ventas e inventario en una interfaz clara para que el equipo pueda consultar el movimiento del negocio y registrar operaciones con facilidad.',
      problem:
        'El negocio necesitaba organizar productos, entradas de stock y ventas, además de identificar quién realiza cada acción dentro del sistema.',
      solution:
        'Se desarrolló una aplicación web con módulos para dashboard, productos, ventas, reportes, usuarios y actividad, junto con una demo navegable que no modifica datos reales.',
      features: [
        'Registro y consulta de ventas con detalle de productos',
        'Control de inventario con entradas por lote y método FIFO',
        'Seguimiento de acciones por usuario y actualización en tiempo real',
        'Panel con productos y vendedores destacados y sugerencias estacionales de reposición',
      ],
      architecture:
        'Frontend en Vue 3 y Vite, backend en Node.js y Express, persistencia en MySQL y eventos en tiempo real mediante WebSockets.',
      technologies: ['Vue.js', 'Node.js', 'Express', 'MySQL', 'WebSockets', 'Vite'],
      links: {
        demo: 'https://pierostock-demo.vercel.app/',
      },
    },
  ],
  team: [
    {
      name: 'Italo Bruno Ramos Sotomayor',
      role: 'Desarrollador de Software',
      specialty: 'Desarrollo de Software & Soluciones Digitales',
      bio: [
        'Soy desarrollador de software enfocado en la creación de aplicaciones web, sistemas empresariales y soluciones digitales a medida. Trabajo con diferentes tecnologías y frameworks modernos, adaptando la arquitectura y las herramientas a las necesidades de cada proyecto.',
        'Me especializo en desarrollo frontend, integración con servicios backend, diseño de bases de datos, APIs, autenticación, sistemas de roles y permisos, seguridad y desarrollo de interfaces responsive.',
      ],
      photo: 'public/images/team/italo-ramos.png',
      areas: [
        'Aplicaciones Web',
        'Sistemas Empresariales',
        'APIs',
        'Bases de Datos',
        'Automatización',
        'Integraciones',
        'Autenticación',
        'Roles y Permisos',
        'Seguridad Web',
        'Responsive Design',
        'Mobile First',
      ],
      linkedin: '',
      website: '',
    },
    {
      name: 'Piero Alexandro Laos Saravia',
      role: 'Desarrollador de Software',
      specialty: 'Desarrollo Full Stack & Soluciones Digitales',
      bio: [
        'Soy desarrollador de software en formación, enfocado en la creación de aplicaciones web, sistemas empresariales y soluciones digitales a medida. Trabajo con tecnologías modernas como Vue.js, Nuxt, TypeScript, Node.js y Express, adaptando las herramientas a las necesidades de cada proyecto.',
        'Me enfoco en el desarrollo frontend y backend, la integración de APIs REST, el diseño de bases de datos relacionales, la creación de aplicaciones móviles con Flutter y la integración de servicios en la nube mediante Microsoft Azure y Firebase. También aplico buenas prácticas de seguridad, pruebas de software y control de calidad para desarrollar soluciones funcionales, mantenibles y responsive.',
      ],
      photo: 'public/images/team/piero-laos.png',
      areas: [
        'Aplicaciones Web',
        'Desarrollo Full Stack',
        'Sistemas Empresariales',
        'Vue.js y Nuxt',
        'TypeScript y JavaScript',
        'Node.js y Express',
        'APIs REST',
        'Bases de Datos MySQL',
        'Aplicaciones Móviles con Flutter',
        'Microsoft Azure y Firebase',
        'Seguridad Web',
        'Pruebas de Software',
        'Integraciones',
        'Responsive Design',
        'Calidad del Software',
      ],
      linkedin: '',
      website: '',
    },
    {
      name: 'Dante Jose Saravia Ramirez',
      role: 'Equipo Nexcode',
      specialty: 'Perfil profesional por completar',
      bio: [],
      areas: [],
      linkedin: '',
      website: '',
    },
    {
      name: 'Hebert Rodrigo Quiroz Aguilar',
      role: 'Equipo Nexcode',
      specialty: 'Perfil profesional por completar',
      bio: [],
      areas: [],
      linkedin: '',
      website: '',
    },
    {
      name: 'José Luis Carbajal Magallanes',
      role: 'Desarrollador Full Stack | Backend | Bases de datos',
      specialty: 'APIs REST · Bases de datos · Despliegues',
      bio: [
        'Desarrollador con experiencia en aplicaciones empresariales, APIs REST, bases de datos y despliegues.',
        'Me enfoco en comprender los procesos del negocio, construir funcionalidades mantenibles y resolver incidencias de integración y producción de forma verificable.',
      ],
      photo: 'https://avatars.githubusercontent.com/u/249818648?v=4',
      areas: [
        'Aplicaciones Empresariales',
        'APIs REST',
        'Bases de Datos',
        'Integración Frontend/Backend',
        'Diagnóstico de Incidencias',
      ],
      linkedin: '',
      website: '',
    },
  ],
  technologies: [
    // Frontend
    { name: 'React', category: 'Frontend', symbol: '⚛', icon: 'public/images/tech/react.svg', description: 'Biblioteca para interfaces de usuario.' },
    { name: 'Next.js', category: 'Frontend', symbol: '▲', icon: 'public/images/tech/nextdotjs.svg', description: 'Framework React para aplicaciones web.' },
    { name: 'Angular', category: 'Frontend', symbol: 'A', icon: 'public/images/tech/angular.svg', description: 'Framework para aplicaciones web.' },
    { name: 'Vue.js', category: 'Frontend', symbol: 'V', icon: 'public/images/tech/vuedotjs.svg', description: 'Framework progresivo para interfaces.' },
    { name: 'FullCalendar', category: 'Frontend', symbol: '▦', icon: 'public/images/tech/fullcalendar.svg', description: 'Calendario interactivo para visualizar y gestionar citas.' },
    { name: 'TypeScript', category: 'Frontend', symbol: 'TS', icon: 'public/images/tech/typescript.svg', description: 'JavaScript con tipado estático.' },
    { name: 'JavaScript', category: 'Frontend', symbol: 'JS', icon: 'public/images/tech/javascript.svg', description: 'Lenguaje para experiencias web dinámicas.' },
    { name: 'Vite', category: 'Frontend', symbol: '⚡', icon: 'public/images/tech/vite.svg', description: 'Herramienta de desarrollo web rápida.' },
    { name: 'Tailwind CSS', category: 'Frontend', symbol: 'TW', icon: 'public/images/tech/tailwindcss.svg', description: 'Utilidades CSS para interfaces.' },
    { name: 'HTML5', category: 'Frontend', symbol: '5', icon: 'public/images/tech/html5.svg', description: 'Estructura semántica para la web.' },
    { name: 'CSS3', category: 'Frontend', symbol: 'CSS', icon: 'public/images/tech/css3.svg', description: 'Estilos y diseño adaptable.' },

    // Backend & Cloud
    { name: 'Node.js', category: 'Backend & Cloud', symbol: 'N', icon: 'public/images/tech/nodedotjs.svg', description: 'Entorno de ejecución para JavaScript.' },
    { name: 'Express.js', category: 'Backend & Cloud', symbol: 'Ex', icon: 'public/images/tech/express.svg', description: 'Framework para crear aplicaciones y APIs con Node.js.' },
    { name: 'Microsoft Azure', category: 'Backend & Cloud', symbol: 'Az', icon: 'public/images/tech/azure.svg', description: 'Plataforma cloud para desplegar y operar servicios digitales.' },
    { name: 'Firebase', category: 'Backend & Cloud', symbol: 'Fi', icon: 'public/images/tech/firebase.svg', description: 'Plataforma de servicios cloud para aplicaciones.' },
    { name: 'Firebase Authentication', category: 'Backend & Cloud', symbol: 'Auth', icon: 'public/images/tech/firebase.svg', description: 'Autenticación de usuarios para aplicaciones.' },
    { name: 'Firebase Cloud Messaging', category: 'Backend & Cloud', symbol: 'FCM', icon: 'public/images/tech/firebase.svg', description: 'Envío de notificaciones a aplicaciones y dispositivos.' },
    { name: 'Firebase Storage', category: 'Backend & Cloud', symbol: 'FS', icon: 'public/images/tech/firebase.svg', description: 'Almacenamiento de archivos para aplicaciones.' },
    { name: 'Socket.IO', category: 'Backend & Cloud', symbol: '↔', icon: 'public/images/tech/socketio.svg', description: 'Comunicación en tiempo real entre clientes y servidores.' },
    { name: 'Supabase', category: 'Backend & Cloud', symbol: 'S', icon: 'public/images/tech/supabase.svg', description: 'Plataforma backend basada en Postgres.' },
    { name: 'Edge Functions', category: 'Backend & Cloud', symbol: 'ƒ', description: 'Funciones serverless de baja latencia.' },
    { name: 'REST APIs', category: 'Backend & Cloud', symbol: '↔', description: 'Interfaces para conectar servicios.' },
    { name: 'Webhooks', category: 'Backend & Cloud', symbol: '⌁', description: 'Eventos para integraciones entre servicios.' },
    { name: 'C#', category: 'Backend & Cloud', symbol: 'C#', icon: 'public/images/tech/dotnet.svg', description: 'Lenguaje para aplicaciones .NET.' },
    { name: 'ASP.NET Core', category: 'Backend & Cloud', symbol: '.NET', icon: 'public/images/tech/dotnet.svg', description: 'Framework web para APIs y servicios.' },
    { name: 'Python', category: 'Backend & Cloud', symbol: 'Py', icon: 'public/images/tech/python.svg', description: 'Lenguaje versátil para backend y datos.' },
    { name: 'FastAPI', category: 'Backend & Cloud', symbol: 'API', icon: 'public/images/tech/fastapi.svg', description: 'Framework moderno para construir APIs.' },
    { name: 'NestJS', category: 'Backend & Cloud', symbol: 'Nest', description: 'Framework para aplicaciones y APIs escalables con Node.js.' },
    { name: 'GraphQL', category: 'Backend & Cloud', symbol: 'GQL', description: 'Lenguaje de consulta para APIs flexibles.' },
    { name: 'Redis', category: 'Backend & Cloud', symbol: 'R', description: 'Almacenamiento en memoria para caché y procesos en tiempo real.' },

    // Móvil
    { name: 'Flutter', category: 'Móvil', symbol: 'F', icon: 'public/images/tech/flutter.svg', description: 'Framework para apps multiplataforma.' },
    { name: 'Dart', category: 'Móvil', symbol: 'Da', icon: 'public/images/tech/dart.svg', description: 'Lenguaje utilizado para desarrollar aplicaciones con Flutter.' },
    { name: 'Lectura de códigos QR', category: 'Móvil', symbol: 'QR', icon: 'public/images/tech/qrcode.svg', description: 'Lectura de códigos QR desde dispositivos móviles.' },

    // Bases de datos
    { name: 'PostgreSQL', category: 'Bases de datos', symbol: 'PG', icon: 'public/images/tech/postgresql.svg', description: 'Base de datos relacional.' },
    { name: 'SQL', category: 'Bases de datos', symbol: 'SQL', description: 'Lenguaje de consulta de datos.' },
    { name: 'Supabase Database', category: 'Bases de datos', symbol: 'S', icon: 'public/images/tech/supabase.svg', description: 'Base de datos Postgres gestionada.' },
    { name: 'Row Level Security (RLS)', category: 'Bases de datos', symbol: 'RLS', description: 'Control de acceso a nivel de fila.' },
    { name: 'MySQL', category: 'Bases de datos', symbol: 'MY', icon: 'public/images/tech/mysql.svg', description: 'Sistema de gestión de bases de datos.' },
    { name: 'Cloud Firestore', category: 'Bases de datos', symbol: 'Fs', icon: 'public/images/tech/firebase.svg', description: 'Base de datos cloud NoSQL para aplicaciones.' },
    { name: 'SQLite', category: 'Bases de datos', symbol: 'SQ', icon: 'public/images/tech/sqlite.svg', description: 'Base de datos ligera y embebida.' },
    { name: 'Entity Framework Core', category: 'Bases de datos', symbol: 'EF', icon: 'public/images/tech/dotnet.svg', description: 'ORM para .NET.' },
    { name: 'Alembic', category: 'Bases de datos', symbol: 'AL', description: 'Migraciones para SQLAlchemy.' },
    { name: 'Prisma ORM', category: 'Bases de datos', symbol: 'P', description: 'ORM con tipado para aplicaciones Node.js y TypeScript.' },

    // Herramientas
    { name: 'Git', category: 'Herramientas', symbol: 'G', icon: 'public/images/tech/git.svg', description: 'Control de versiones distribuido.' },
    { name: 'GitHub', category: 'Herramientas', symbol: 'GH', icon: 'public/images/tech/github.svg', description: 'Colaboración y alojamiento de código.' },
    { name: 'npm', category: 'Herramientas', symbol: 'npm', icon: 'public/images/tech/npm.svg', description: 'Gestor de paquetes de JavaScript.' },
    { name: 'Postman', category: 'Herramientas', symbol: 'P', icon: 'public/images/tech/postman.svg', description: 'Diseño y prueba de APIs.' },
    { name: 'Figma', category: 'Herramientas', symbol: 'F', icon: 'public/images/tech/figma.svg', description: 'Diseño colaborativo de interfaces.' },
    { name: 'SonarQube', category: 'Herramientas', symbol: 'SQ', icon: 'public/images/tech/sonarqube.svg', description: 'Análisis estático de código y calidad del software.' },
    { name: 'Docker', category: 'Herramientas', symbol: 'D', icon: 'public/images/tech/docker.svg', description: 'Contenedores para despliegues.' },
    { name: 'Docker Compose', category: 'Herramientas', symbol: 'DC', icon: 'public/images/tech/docker.svg', description: 'Orquestación de contenedores.' },
    { name: 'GitHub Actions', category: 'Herramientas', symbol: 'GA', icon: 'public/images/tech/githubactions.svg', description: 'CI/CD automatizado.' },
    { name: 'Linux', category: 'Herramientas', symbol: 'LX', icon: 'public/images/tech/linux.svg', description: 'Sistema operativo y servidores.' },
    { name: 'Java', category: 'Lenguajes', symbol: 'J', icon: 'public/images/tech/java.svg', description: 'Lenguaje de programación de propósito general.' },
    { name: 'Vercel', category: 'Herramientas', symbol: '▲', description: 'Plataforma para despliegues web y automatización de entregas.' },
    { name: 'Jest', category: 'Calidad', symbol: 'J', description: 'Framework de pruebas para JavaScript y TypeScript.' },
    { name: 'Playwright', category: 'Calidad', symbol: 'PW', description: 'Automatización de pruebas de extremo a extremo.' },
    { name: 'Cypress', category: 'Calidad', symbol: 'Cy', description: 'Pruebas end-to-end para aplicaciones web.' },
  ],
  faqs: [
    [
      '¿Qué tipo de proyectos y soluciones digitales desarrollan?',
      'Desarrollamos desde landing pages de alta conversión y sitios web corporativos hasta aplicaciones web completas, aplicaciones móviles y sistemas de gestión a medida. Cada solución se concibe enfocada en el rendimiento, la experiencia de usuario (UX/UI) y la escalabilidad del negocio.',
    ],
    [
      '¿Trabajan con pequeñas empresas, startups y emprendedores?',
      'Sí. Adaptamos el alcance y la metodología a la etapa de cada cliente. Ya sea que busques validar un MVP (Producto Mínimo Viable), digitalizar procesos internos o renovar la presencia digital de una empresa consolidada, estructuramos soluciones viables y con retorno claro de inversión.',
    ],
    [
      '¿Cómo solicito una cotización?',
      'Escríbenos a nexcodepe@gmail.com o síguenos en Instagram y TikTok para conocer nuestras novedades.',
    ],
    [
      '¿Cómo se determina el costo o presupuesto de un proyecto?',
      'El presupuesto se calcula según la complejidad técnica, nivel de personalización de interfaz, integraciones necesarias (pasarelas de pago, APIs externas, autenticación, bases de datos) y plazos requeridos. Trabajamos con cotizaciones claras por fases o entregables, sin tarifas ocultas ni sorpresas.',
    ],
    [
      '¿Cuánto tiempo toma desarrollar una solución digital?',
      'Los plazos dependen de la magnitud del proyecto: una landing page o sitio informativo toma de 1 a 2 semanas; plataformas web con catálogo o integraciones, de 3 a 5 semanas; y sistemas empresariales complejos, de 6 a 10 semanas. Desde el inicio acordamos un cronograma con fechas e hitos de entrega formales.',
    ],
    [
      '¿Puedo solicitar funcionalidades personalizadas para mi negocio?',
      'Totalmente. No usamos plantillas rígidas ni limitaciones prefabricadas. Diseñamos la arquitectura adecuada para tus procesos específicos: paneles de administración, módulos con roles y permisos de usuario, cotizadores automatizados, flujos de reportes e integraciones con tus herramientas actuales.',
    ],
    [
      '¿Las soluciones están optimizadas para dispositivos móviles?',
      'Sí. Todo desarrollo sigue el estándar Mobile-First y diseño adaptativo integral. Garantizamos que la interfaz, botones, tipografía y navegación respondan con rapidez y fluidez en smartphones, tablets, laptops y pantallas de alta resolución.',
    ],
    [
      '¿Los desarrollos incluyen optimización SEO y seguridad web?',
      'Sí. Cada proyecto incluye buenas prácticas de SEO técnico (estructura semántica, metadatos Open Graph, sitemap y robots.txt) y velocidad de carga optimizada (Core Web Vitals). Además, aplicamos cifrado SSL/HTTPS, validación contra vulnerabilidades web y resguardo riguroso de datos.',
    ],
    [
      '¿Ofrecen mantenimiento?',
      'La disponibilidad del servicio depende del proyecto. Escríbenos para conversar sobre tus necesidades de soporte y mantenimiento.',
    ],
    [
      '¿Ofrecen servicios de soporte y mantenimiento técnico?',
      'Sí. Contamos con esquemas de soporte continuo que abarcan monitoreo de disponibilidad, copias de seguridad periódicas, parches de seguridad, optimización de base de datos y acompañamiento técnico permanente para que tu plataforma nunca se detenga.',
    ],
  ]
};
