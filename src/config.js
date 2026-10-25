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
  contact: { email: '', whatsapp: '', linkedin: '', github: '', endpoint: '' },
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
      image: 'public/images/brand/nexcode-logo-web.png',
      imageAlt: 'Logo Nexcode para páginas web',
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
      image: 'public/images/brand/nexcode-logo-mobile.png',
      imageAlt: 'Logo Nexcode para aplicaciones móviles',
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
      image: 'public/images/brand/nexcode-logo-solutions.png',
      imageAlt: 'Logo Nexcode para soluciones digitales',
    },
  ],
  projects: [
    {
      id: 'ushas-peru',
      name: 'Ushas Perú',
      category: 'web',
      categoryLabel: 'E-commerce',
      status: 'MVP navegable',
      summary:
        'MVP de comercio electrónico para Ushas Perú, diseñado como una tienda digital preparada para evolucionar hacia una plataforma completa.',
      objective:
        'Crear una experiencia de tienda pública navegable y una base técnica que permita incorporar gestión administrativa, APIs y flujos de compra en nuevas etapas.',
      problem:
        'El proyecto necesitaba una presencia de e-commerce clara, adaptable y lista para crecer sin comprometer la estructura inicial.',
      solution:
        'Se desarrolló un storefront público con datos de demostración y una organización modular que separa la interfaz, los contratos de dominio y los adaptadores de datos.',
      features: [
        'Storefront público navegable',
        'Datos de demostración reemplazables por una API',
        'Base preparada para panel administrativo y servicios backend',
      ],
      architecture:
        'Monorepo con aplicación storefront en Vue 3, paquetes compartidos para tipos y datos de demostración. Las aplicaciones de administración y API permanecen reservadas para la siguiente evolución del producto.',
      decisions: [
        'Separar contratos y datos de demostración para facilitar la integración futura',
        'Mantener el storefront independiente de la implementación final del backend',
        'Organizar el proyecto como monorepo para permitir crecimiento por módulos',
      ],
      technologies: ['Vue.js', 'Vite', 'pnpm', 'Turborepo'],
      participants: ['Italo Bruno Ramos Sotomayor'],
      links: {
        demo: 'https://ushas-peru.vercel.app/',
        repository: 'https://github.com/BrunoRasot/Ushas',
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
      github: 'https://github.com/BrunoRasot',
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
      github: 'https://github.com/reinh5678-cloud',
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
    { name: 'TypeScript', category: 'Frontend', symbol: 'TS', icon: 'public/images/tech/typescript.svg', description: 'JavaScript con tipado estático.' },
    { name: 'JavaScript', category: 'Frontend', symbol: 'JS', icon: 'public/images/tech/javascript.svg', description: 'Lenguaje para experiencias web dinámicas.' },
    { name: 'Vite', category: 'Frontend', symbol: '⚡', icon: 'public/images/tech/vite.svg', description: 'Herramienta de desarrollo web rápida.' },
    { name: 'Tailwind CSS', category: 'Frontend', symbol: 'TW', icon: 'public/images/tech/tailwindcss.svg', description: 'Utilidades CSS para interfaces.' },
    { name: 'HTML5', category: 'Frontend', symbol: '5', icon: 'public/images/tech/html5.svg', description: 'Estructura semántica para la web.' },
    { name: 'CSS3', category: 'Frontend', symbol: 'CSS', icon: 'public/images/tech/css3.svg', description: 'Estilos y diseño adaptable.' },

    // Backend & Cloud
    { name: 'Node.js', category: 'Backend & Cloud', symbol: 'N', icon: 'public/images/tech/nodedotjs.svg', description: 'Entorno de ejecución para JavaScript.' },
    { name: 'Supabase', category: 'Backend & Cloud', symbol: 'S', icon: 'public/images/tech/supabase.svg', description: 'Plataforma backend basada en Postgres.' },
    { name: 'Edge Functions', category: 'Backend & Cloud', symbol: 'ƒ', description: 'Funciones serverless de baja latencia.' },
    { name: 'REST APIs', category: 'Backend & Cloud', symbol: '↔', description: 'Interfaces para conectar servicios.' },
    { name: 'Webhooks', category: 'Backend & Cloud', symbol: '⌁', description: 'Eventos para integraciones entre servicios.' },
    { name: 'C#', category: 'Backend & Cloud', symbol: 'C#', icon: 'public/images/tech/dotnet.svg', description: 'Lenguaje para aplicaciones .NET.' },
    { name: 'ASP.NET Core', category: 'Backend & Cloud', symbol: '.NET', icon: 'public/images/tech/dotnet.svg', description: 'Framework web para APIs y servicios.' },
    { name: 'Python', category: 'Backend & Cloud', symbol: 'Py', icon: 'public/images/tech/python.svg', description: 'Lenguaje versátil para backend y datos.' },
    { name: 'FastAPI', category: 'Backend & Cloud', symbol: 'API', icon: 'public/images/tech/fastapi.svg', description: 'Framework moderno para construir APIs.' },

    // Móvil
    { name: 'Flutter', category: 'Móvil', symbol: 'F', icon: 'public/images/tech/flutter.svg', description: 'Framework para apps multiplataforma.' },

    // Bases de datos
    { name: 'PostgreSQL', category: 'Bases de datos', symbol: 'PG', icon: 'public/images/tech/postgresql.svg', description: 'Base de datos relacional.' },
    { name: 'SQL', category: 'Bases de datos', symbol: 'SQL', description: 'Lenguaje de consulta de datos.' },
    { name: 'Supabase Database', category: 'Bases de datos', symbol: 'S', icon: 'public/images/tech/supabase.svg', description: 'Base de datos Postgres gestionada.' },
    { name: 'Row Level Security (RLS)', category: 'Bases de datos', symbol: 'RLS', description: 'Control de acceso a nivel de fila.' },
    { name: 'MySQL', category: 'Bases de datos', symbol: 'MY', icon: 'public/images/tech/mysql.svg', description: 'Sistema de gestión de bases de datos.' },
    { name: 'SQLite', category: 'Bases de datos', symbol: 'SQ', icon: 'public/images/tech/sqlite.svg', description: 'Base de datos ligera y embebida.' },
    { name: 'Entity Framework Core', category: 'Bases de datos', symbol: 'EF', icon: 'public/images/tech/dotnet.svg', description: 'ORM para .NET.' },
    { name: 'Alembic', category: 'Bases de datos', symbol: 'AL', description: 'Migraciones para SQLAlchemy.' },

    // Herramientas
    { name: 'Git', category: 'Herramientas', symbol: 'G', icon: 'public/images/tech/git.svg', description: 'Control de versiones distribuido.' },
    { name: 'GitHub', category: 'Herramientas', symbol: 'GH', icon: 'public/images/tech/github.svg', description: 'Colaboración y alojamiento de código.' },
    { name: 'npm', category: 'Herramientas', symbol: 'npm', icon: 'public/images/tech/npm.svg', description: 'Gestor de paquetes de JavaScript.' },
    { name: 'Postman', category: 'Herramientas', symbol: 'P', icon: 'public/images/tech/postman.svg', description: 'Diseño y prueba de APIs.' },
    { name: 'Figma', category: 'Herramientas', symbol: 'F', icon: 'public/images/tech/figma.svg', description: 'Diseño colaborativo de interfaces.' },
    { name: 'Docker', category: 'Herramientas', symbol: 'D', icon: 'public/images/tech/docker.svg', description: 'Contenedores para despliegues.' },
    { name: 'Docker Compose', category: 'Herramientas', symbol: 'DC', icon: 'public/images/tech/docker.svg', description: 'Orquestación de contenedores.' },
    { name: 'GitHub Actions', category: 'Herramientas', symbol: 'GA', icon: 'public/images/tech/githubactions.svg', description: 'CI/CD automatizado.' },
    { name: 'Linux', category: 'Herramientas', symbol: 'LX', icon: 'public/images/tech/linux.svg', description: 'Sistema operativo y servidores.' },
  ],
  faqs: [
    [
      '¿Qué tipo de páginas web desarrollan?',
      'La oferta puede incluir landing pages, páginas informativas, sitios corporativos y catálogos digitales. El alcance se define al conocer tu necesidad.',
    ],
    [
      '¿Trabajan con pequeños negocios?',
      'Sí. Nexcode busca acompañar a emprendedores y negocios en crecimiento con soluciones acordes al alcance de cada proyecto.',
    ],
    [
      '¿Cómo solicito una cotización?',
      'Cuéntanos qué necesitas mediante los canales oficiales de contacto, que estarán disponibles cuando el equipo los confirme.',
    ],
    [
      '¿Cómo se determina el precio?',
      'Depende de las funcionalidades, el alcance y los requisitos. Se conversa y define antes de comenzar; no hay una tarifa publicada aún.',
    ],
    [
      '¿Cuánto tarda el desarrollo?',
      'El plazo depende del alcance y se acuerda durante la planificación. No publicamos un plazo fijo sin conocer el proyecto.',
    ],
    [
      '¿Puedo pedir funcionalidades personalizadas?',
      'Sí, las funcionalidades se revisan y priorizan en función del problema, la viabilidad y el presupuesto.',
    ],
    [
      '¿Las páginas se adaptan a móviles?',
      'La experiencia adaptable forma parte de la propuesta de desarrollo web.',
    ],
    [
      '¿Puedo solicitar cambios después de la entrega?',
      'Las mejoras posteriores se pueden conversar y acordar como parte de un alcance adicional.',
    ],
    [
      '¿Ofrecen mantenimiento?',
      'La disponibilidad comercial del mantenimiento está pendiente de confirmación. Consúltanos cuando se habiliten los canales de contacto.',
    ],
    [
      '¿Qué información necesitan para comenzar?',
      'Una descripción del negocio, el problema que quieres resolver y las funciones que imaginas son un buen punto de partida.',
    ],
  ],
};
