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
  projects: [],
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
  ],
  technologies: [
    // Frontend
    { name: 'React', category: 'Frontend', symbol: '⚛', description: 'Biblioteca para interfaces de usuario.' },
    { name: 'Next.js', category: 'Frontend', symbol: '▲', description: 'Framework React para aplicaciones web.' },
    { name: 'Angular', category: 'Frontend', symbol: 'A', description: 'Framework para aplicaciones web.' },
    { name: 'Vue.js', category: 'Frontend', symbol: 'V', description: 'Framework progresivo para interfaces.' },
    { name: 'TypeScript', category: 'Frontend', symbol: 'TS', description: 'JavaScript con tipado estático.' },
    { name: 'JavaScript', category: 'Frontend', symbol: 'JS', description: 'Lenguaje para experiencias web dinámicas.' },
    { name: 'Vite', category: 'Frontend', symbol: '⚡', description: 'Herramienta de desarrollo web rápida.' },
    { name: 'Tailwind CSS', category: 'Frontend', symbol: 'TW', description: 'Utilidades CSS para interfaces.' },
    { name: 'HTML5', category: 'Frontend', symbol: '5', description: 'Estructura semántica para la web.' },
    { name: 'CSS3', category: 'Frontend', symbol: 'CSS', description: 'Estilos y diseño adaptable.' },

    // Backend & Cloud
    { name: 'Node.js', category: 'Backend & Cloud', symbol: 'N', description: 'Entorno de ejecución para JavaScript.' },
    { name: 'Supabase', category: 'Backend & Cloud', symbol: 'S', description: 'Plataforma backend basada en Postgres.' },
    { name: 'Edge Functions', category: 'Backend & Cloud', symbol: 'ƒ', description: 'Funciones serverless de baja latencia.' },
    { name: 'REST APIs', category: 'Backend & Cloud', symbol: '↔', description: 'Interfaces para conectar servicios.' },
    { name: 'Webhooks', category: 'Backend & Cloud', symbol: '⌁', description: 'Eventos para integraciones entre servicios.' },

    // Bases de datos
    { name: 'PostgreSQL', category: 'Bases de datos', symbol: 'PG', description: 'Base de datos relacional.' },
    { name: 'SQL', category: 'Bases de datos', symbol: 'SQL', description: 'Lenguaje de consulta de datos.' },
    { name: 'Supabase Database', category: 'Bases de datos', symbol: 'S', description: 'Base de datos Postgres gestionada.' },
    { name: 'Row Level Security (RLS)', category: 'Bases de datos', symbol: 'RLS', description: 'Control de acceso a nivel de fila.' },

    // Herramientas
    { name: 'Git', category: 'Herramientas', symbol: 'G', description: 'Control de versiones distribuido.' },
    { name: 'GitHub', category: 'Herramientas', symbol: 'GH', description: 'Colaboración y alojamiento de código.' },
    { name: 'npm', category: 'Herramientas', symbol: 'npm', description: 'Gestor de paquetes de JavaScript.' },
    { name: 'Postman', category: 'Herramientas', symbol: 'P', description: 'Diseño y prueba de APIs.' },
    { name: 'Figma', category: 'Herramientas', symbol: 'F', description: 'Diseño colaborativo de interfaces.' },
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
