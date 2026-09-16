export interface Project {
  slug: string;

  title: string;
  type: string;
  period: string;
  summary: string;
  
  problem: string;
  architecture: string;
  
  decisions: string[];
  metrics: string[];
  stack: string[];
  
  cover: string;

  gallery: {
    image: string;
    title: string;
    description: string;
  }[];

  demo?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    slug: 'sistema-ordenes-transporte',
    title: 'Sistema de Gestión y Control de Órdenes de Servicio para Transporte Pesado',
    type: 'BACKEND / REST API / DATABASE / DEPLOYMENT',
    period: 'Proyecto de titulación',
    summary: 'Backend de un sistema de gestión de órdenes de servicio para transporte pesado, centralizando clientes, vehículos, conductores y facturación. Desarrollé la API REST con Java y Spring Boot bajo arquitectura en capas (Controller-Service-Repository) sobre PostgreSQL, con autenticación segura de usuarios. Contenericé y desplegué el backend con Docker en una instancia AWS EC2, exponiendo endpoints públicos con indicadores financieros y de kilometraje en tiempo real.',
    problem: 'La gestión de clientes, vehículos, conductores y órdenes de servicio se realizaba de forma manual y dispersa, lo que generaba errores frecuentes, pérdida de capital y reportes financieros poco confiables. La falta de control centralizado sobre facturación, pagos, descuentos, impuestos y flujo económico limitaba la capacidad de la empresa para tomar decisiones estratégicas y adaptarse con agilidad a los cambios del mercado.',
    architecture: 'Backend en Java con Spring Boot, estructurado en capas (modelos, repositorios, servicios y controladores) bajo el patrón MVC, con JPA/Hibernate como capa de persistencia sobre PostgreSQL. El sistema expone una API REST consumida por el frontend, y se despliega de forma contenerizada con Docker sobre una instancia AWS EC2, separando backend y base de datos en contenedores independientes para lograr entornos reproducibles y un despliegue controlado.',
    decisions: [
      'Spring Boot + arquitectura en capas (Controller → Service → Repository) para una API REST modular y mantenible, asumiendo más código repetitivo al inicio (por la separación en capas) a cambio de escalabilidad y testabilidad a futuro.',
      'PostgreSQL por la naturaleza relacional del dominio (clientes, vehículos, conductores, órdenes y facturación), priorizando integridad referencial entre entidades sobre la flexibilidad de un motor NoSQL.',
      'Separación de responsabilidades entre controllers, services y repositories, aislando la lógica de negocio del acceso a datos y facilitando el mantenimiento del sistema.',
      'Docker para aislar backend y base de datos en contenedores independientes, priorizando entornos reproducibles sobre instalar las dependencias directamente en el servidor.',
      'Recuperación de contraseña vía código temporal enviado por correo (SMTP/JavaMailSender) y contraseñas encriptadas con BCrypt, priorizando una solución simple y segura para el alcance del proyecto frente a esquemas más complejos como JWT.'
    ],
    metrics: [
      'Proyecto de titulación completo, con arquitectura backend en producción.',
      '5 entidades principales del dominio (clientes, vehículos, conductores, usuarios y órdenes de servicio) con operaciones CRUD completas.',
      '30 endpoints REST documentados y validados con sus respectivos casos de prueba.',
      '2 contenedores Docker en producción: backend (Spring Boot) y base de datos (PostgreSQL)',
      'Indicadores financieros (facturación y kilometraje recorrido) expuestos en tiempo real vía API',
      'Diseño de acceso vía web, contemplado también para dispositivos móviles'
    ],
    stack: ['Java', 'Spring Boot', 'REST API', 'PostgreSQL', 'Gradle', 'Git', 'AWS EC2'],
    cover: "/images/projects/Transporte/SgosCover.png",
    gallery: [
      {
        image: "/images/projects/Transporte/Login.png",
        title: "Inicio de Sesión",
        description: "Pantalla de inicio de sesión"
      },
      {
        image: "/images/projects/Transporte/Orders.png",
        title: "Visualización, Edición y Registro de Órdenes de Servicio",
        description: "Pantalla para el CRUD de ordenes de servicio"
      },
      {
        image: "/images/projects/Transporte/Clients.png",
        title: "Visualización, Edición y Registro de Clientes",
        description: "Pantalla para el CRUD de clientes"
      },
      {
        image: "/images/projects/Transporte/Cars.png",
        title: "Visualización, Edición y Registro de Vehículos",
        description: "Pantalla para el CRUD de vehículos"
      },
      {
        image: "/images/projects/Transporte/Drivers.png",
        title: "Visualización, Edición y Registro de Conductores",
        description: "Pantalla para el CRUD de conductores"
      }
    ],
    github: "https://gitlab.com/grupo-17545442/proyecto-tesis-front"
  },
  {
    slug: "dashboard-mintel",
    title: 'Dashboards interactivos para análisis de información pública',
    type: 'Data / APIs / Visualizacion',
    period: 'Ministerio de Telecomunicaciones y de la Sociedad de la Información · May–Aug 2024',
    summary: 'Desarrollo de dos dashboards interactivos en Looker Studio para el Ministerio de Telecomunicaciones y de la Sociedad de la Información (MINTEL), como parte de mis prácticas preprofesionales (240 horas). Un dashboard público expone instituciones y trámites registrados en el portal GOB.EC, y uno privado hace seguimiento a los Planes de Simplificación de Trámites y la carga de trabajo de los asesores asignados. Los datos se extraen mediante APIs, reemplazando el análisis manual en Excel y facilitando la toma de decisiones directivas.',
    problem: 'La información sobre instituciones, trámites y Planes de Simplificación de Trámites (PST) del Ministerio se encontraba dispersa entre hojas de Excel y el portal GOB.EC, lo que dificultaba su consulta, cruce y análisis. La dirección necesitaba visualizar de forma rápida el avance de los planes, la carga de trabajo de los asesores y las estadísticas de trámites para la toma de decisiones.',
    architecture: 'Se diseñó un flujo de extracción de datos mediante APIs (portal GOB.EC y fuentes internas del Ministerio), con preparación y transformación de la información para alimentar dashboards interactivos construidos en Looker Studio. Se desarrollaron dos productos: un dashboard público con datos abiertos de instituciones y trámites, y un dashboard privado de administración con seguimiento de asesores, instituciones y avance de los planes de simplificación.',
    decisions: [
      'Uso de APIs como fuente de datos en lugar de actualización manual en Excel, para reducir el trabajo repetitivo y mantener la información sincronizada con el portal GOB.EC.',
      'Separación en dos dashboards (público y privado/administración) según la audiencia: uno para consulta ciudadana, otro para seguimiento interno de asesores y avance de planes.',
      'Filtros cruzados (instituciones, clasificación, provincia, cantón, año, estrategia, canal de atención) para permitir exploración autoservicio sin depender de reportes puntuales solicitados al equipo técnico.',
      'Documentación técnica, de usuario y de administración entregada para asegurar la continuidad del proyecto tras finalizar las prácticas.'
    ],
    metrics: [
      '240 horas de práctica profesional en el Ministerio de Telecomunicaciones y de la Sociedad de la Información',
      '2 dashboards interactivos desarrollados (público y privado) en Looker Studio',
      'Información de 252 instituciones y más de 7.100 trámites consumida mediante APIs del portal GOB.EC',
      'Seguimiento de 113 planes de simplificación aprobados y 579 trámites a simplificar',
      'Manuales de usuario y de administración entregados al equipo del Ministerio'
    ],
    stack: ['Looker Studio', 'REST APIs', 'Extracción de Datos', 'Documentación'],
    cover: "/images/projects/Mintel/DashboardCover.png",
    gallery: [
      {
        image: "/images/projects/Mintel/SimplificacionTramites.png",
        title: "Planes de Simplificación de Trámites",
        description: "Panel con indicadores clave (113 planes aprobados, 579 trámites, 69 simplificados) y las estrategias de simplificación más usadas por institución, con filtros por año, clasificación y estado de cumplimiento."
      },
      {
        image: "/images/projects/Mintel/InstitucionesPlanes.png",
        title: "Instituciones y Estado de Planes",
        description: "Seguimiento del avance de cada plan aprobado por institución, con mapa geográfico interactivo por provincia y filtros por cantón y clasificación."
      },
      {
        image: "/images/projects/Mintel/AsesoresInstituciones.png",
        title: "Asesores e Instituciones",
        description: "Distribución de la carga de trabajo entre asesores, mostrando cuántas instituciones tiene asignadas cada uno y el detalle de asignación institución-asesor."
      }
    ]
  },
  {
    slug: "cafe-diamante",
    title: 'Café Diamante — plataforma web con e-commerce',
    type: 'WordPress / E-commerce',
    period: 'Servicio comunitario PUCE · Nov 2023–Feb 2024',
    summary: 'Sitio web de e-commerce para Café Diamante, desarrollado en equipo como parte del Servicio Comunitario universitario, en colaboración con la Prefectura de Pichincha para apoyar a emprendimientos locales de la provincia. Construido en WordPress con Elementor, integrando WooCommerce para catálogo, carrito y checkout completo. Incluye elementos interactivos personalizados (cubo 3D, tarjetas giratorias) con HTML, CSS y JavaScript, junto con manuales de usuario y administración entregados al emprendimiento.',
    problem: 'Como parte de un proyecto de Servicio Comunitario universitario, en colaboración con la Prefectura de Pichincha, se buscaba apoyar a Café Diamante —emprendimiento con presencia en 9 ciudades de Ecuador— que no contaba con un canal digital propio para dar a conocer su marca ni vender sus productos en línea. Se requería un sitio responsivo, fácil de administrar sin depender de un desarrollador, con catálogo, carrito y checkout completo.',
    architecture: 'Se construyó en equipo el sitio sobre WordPress como CMS, con Elementor para la maquetación visual y WooCommerce para catálogo, carrito y checkout. Se añadieron componentes interactivos personalizados con HTML, CSS y JavaScript —un cubo 3D giratorio en la página de historia y tarjetas dinámicas con animación de giro en la guía de preparación— para diferenciar la experiencia de un sitio WordPress estándar.',
    decisions: [
      'Alcance definido junto al emprendimiento y la Prefectura de Pichincha, priorizando funcionalidades esenciales de venta en línea sobre personalización avanzada, dado el marco de un proyecto de vinculación comunitaria.',
      'WordPress + Elementor para permitir la administración del contenido sin depender de un desarrollador, priorizando la autonomía del cliente en el control total del código.',
      'WooCommerce para resolver catálogo, variaciones de producto (tamaño: cajas de 12 y 24 sobres), cupones de descuento, direcciones de envío/facturación separadas y checkout, evitando construir un carrito desde cero.',
      'HTML, CSS y JavaScript personalizados para los elementos que Elementor no resolvía de forma nativa (cubo 3D, tarjetas giratorias).',
      'Elaboración de manuales de usuario y de administración, pensados para que el propio emprendimiento pudiera mantener el sitio tras la entrega del proyecto.'
    ],
    metrics: [
      'Plataforma web entregada en el marco del Servicio Comunitario, en colaboración con la Prefectura de Pichincha',
      'Proyecto desarrollado en equipo de 2 estudiantes',
      'Catálogo de productos con variaciones de tamaño integrado vía WooCommerce',
      'Flujo de compra completo: carrito, cupones, direcciones de envío/facturación separadas, 2 métodos de pago y confirmación de pedido',
      'Puntos de venta/sedes listados en la página de ubicación',
      'Manual de usuario y manual de administración entregados al emprendimiento'
    ],
    stack: ['WordPress', 'WooCommerce', 'Elementor', 'HTML', 'CSS', 'JavaScript'],
    cover: "/images/projects/CafeDiamante/CafeDiamanteCover.png",
    gallery: [
      {
        image: "/images/projects/CafeDiamante/Store.png",
        title: "Tienda — Catálogo de Productos",
        description: "Catálogo de productos vía WooCommerce con opciones de ordenamiento por popularidad, calificación y precio para facilitar la búsqueda."
      },
      {
        image: "/images/projects/CafeDiamante/History.png",
        title: "Nuestra Historia",
        description: "Sección de storytelling de marca con un cubo 3D interactivo que muestra fotografías del emprendimiento."
      },
      {
        image: "/images/projects/CafeDiamante/Recipe.png",
        title: "Guía de Preparación",
        description: "Guía interactiva de 4 pasos con tarjetas giratorias que revelan las instrucciones al seleccionarlas."
      },
      {
        image: "/images/projects/CafeDiamante/Cart.png",
        title: "Carrito de Compras",
        description: "Gestión de productos seleccionados, cupones de descuento y cambio de dirección de envío antes de finalizar la compra."
      },
      {
        image: "/images/projects/CafeDiamante/Product.png",
        title: "Detalle de Producto",
        description: "Ficha de producto con variaciones de tamaño, precio dinámico, valoraciones de clientes y productos relacionados."
      }
    ]
  }
];
