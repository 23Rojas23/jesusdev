import type { Service, Project, TechItem, Testimonial, PricingPlan, FaqItem } from '../types';

export const personalInfo = {
  name: "Jesus Rojas",
  brandName: "JesusDev",
  title: "Desarrollador Web Full Stack & Especialista Frontend",
  tagline: "Desarrollo sitios web modernos, rápidos y de alto impacto comercial.",
  bio: "Creamos soluciones digitales para startups, empresas y profesionales. Especializado en React, Next.js, Node.js y Tailwind CSS.",
  email: "jesusenrique230701@gmail.com",
  phone: "+58 412 969 3441",
  whatsappNumber: "584129693441",
  whatsappMessage: "¡Hola Jesus! Vi tu landing page y me gustaría cotizar un proyecto web.",
  location: "Valencia, Venezuela",
  availableForHire: true,
  yearsExperience: "5+",
  projectsCompleted: "40+",
  satisfiedClients: "100%",
  averageLoadTime: "< 0.8s",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  calendly: "https://calendly.com",
};

export const servicesData: Service[] = [
  {
    id: "landing-pages",
    title: "Landing Pages de Alta Conversión",
    description: "Páginas de aterrizaje diseñadas estratégicamente para captar clientes potenciales, presentar productos y maximizar ventas.",
    iconName: "Zap",
    features: [
      "Diseño persuasivo centrado en conversión (CRO)",
      "Tiempos de carga ultrarrápidos (< 1 segundo)",
      "100% adaptable a teléfonos, tablets y computadoras",
      "Integración directa con WhatsApp, CRM y correos",
      "Optimización SEO básica y píxeles de seguimiento"
    ],
    techs: ["React", "Tailwind CSS", "Vite", "TypeScript"],
    highlight: true,
  },
  {
    id: "custom-web",
    title: "Sitios Web Corporativos a Medida",
    description: "Sitios web profesionales multi-sección que transmiten credibilidad, autoridad y posicionan tu marca en lo más alto.",
    iconName: "Layout",
    features: [
      "Arquitectura de información profesional",
      "Diseño UI/UX exclusivo (sin plantillas genéricas)",
      "Animaciones sutiles y experiencia fluida",
      "Estructura optimizada para posicionar en Google (SEO)",
      "Panel para gestionar contenidos o blog opcional"
    ],
    techs: ["React", "Next.js", "Tailwind CSS", "SEO"]
  },
  {
    id: "web-apps",
    title: "Aplicaciones Web & Paneles SaaS",
    description: "Sistemas web interactivos con lógica de negocio, autenticación, roles de usuario y paneles de administración.",
    iconName: "Layers",
    features: [
      "Autenticación segura (Login, roles, JWT)",
      "Dashboards con métricas y gráficos interactivos",
      "Bases de datos optimizadas en tiempo real",
      "Conexión con APIs externas y pasarelas de pago",
      "Arquitectura escalable y mantenible"
    ],
    techs: ["React", "Node.js", "Express", "PostgreSQL", "Supabase"],
    highlight: true,
  },
  {
    id: "ecommerce",
    title: "E-Commerce & Catálogos Digitales",
    description: "Tiendas online diseñadas para brindar una experiencia de compra rápida y sin fricción a tus clientes.",
    iconName: "ShoppingCart",
    features: [
      "Catálogo dinámico con filtros y buscador",
      "Carrito de compras persistente e intuitivo",
      "Integración de pasarelas (Stripe, Mercado Pago, PayPal)",
      "Panel para control de inventario y pedidos",
      "Checkout optimizado para reducir abandono de carrito"
    ],
    techs: ["React", "Stripe API", "Node.js", "Tailwind CSS"]
  },
  {
    id: "seo-performance",
    title: "Optimización de Rendimiento & SEO",
    description: "¿Tu web es lenta o no aparece en Google? La optimizo a fondo para alcanzar puntuaciones perfectas en Google Lighthouse.",
    iconName: "TrendingUp",
    features: [
      "Auditoría técnica profunda de Core Web Vitals",
      "Compresión de assets, carga diferida y caching",
      "Indexación SEO On-Page (meta tags, sitemap, Schema.org)",
      "Puntuación 95-100 en Google PageSpeed",
      "Mejora radical de la retención de usuarios"
    ],
    techs: ["Lighthouse", "Core Web Vitals", "Next.js", "Clean Code"]
  },
  {
    id: "maintenance",
    title: "Mantenimiento, Soporte & APIs",
    description: "Acompañamiento continuo para mantener tu infraestructura web actualizada, segura y libre de errores.",
    iconName: "ShieldCheck",
    features: [
      "Actualizaciones periódicas de dependencias y seguridad",
      "Monitoreo de caídas y copias de seguridad",
      "Solución prioritaria de bugs o mejoras visuales",
      "Integración de webhooks y automatizaciones",
      "Asesoría técnica y soporte directo por WhatsApp"
    ],
    techs: ["Git", "Docker", "REST APIs", "Cloud Hosting"]
  }
];

export const techStackData: TechItem[] = [
  // Frontend
  { name: "React", category: "frontend", level: "Avanzado", iconColor: "text-cyan-400" },
  { name: "TypeScript", category: "frontend", level: "Avanzado", iconColor: "text-blue-400" },
  { name: "Tailwind CSS", category: "frontend", level: "Avanzado", iconColor: "text-teal-400" },
  { name: "Next.js", category: "frontend", level: "Avanzado", iconColor: "text-slate-100" },
  { name: "Vite", category: "frontend", level: "Avanzado", iconColor: "text-purple-400" },
  { name: "HTML5 / CSS3 Moderno", category: "frontend", level: "Avanzado", iconColor: "text-orange-400" },
  // Backend
  { name: "Node.js", category: "backend", level: "Avanzado", iconColor: "text-emerald-400" },
  { name: "Express.js", category: "backend", level: "Avanzado", iconColor: "text-gray-300" },
  { name: "RESTful APIs", category: "backend", level: "Avanzado", iconColor: "text-yellow-400" },
  { name: "Supabase / Firebase", category: "backend", level: "Intermedio-Avanzado", iconColor: "text-emerald-500" },
  { name: "PostgreSQL / MySQL", category: "database", level: "Intermedio", iconColor: "text-indigo-400" },
  { name: "MongoDB", category: "database", level: "Intermedio", iconColor: "text-green-500" },
  // Tools
  { name: "Git & GitHub", category: "tools", level: "Avanzado", iconColor: "text-orange-500" },
  { name: "Vercel / Netlify", category: "tools", level: "Avanzado", iconColor: "text-slate-200" },
  { name: "Docker", category: "tools", level: "Intermedio", iconColor: "text-sky-400" },
  { name: "Figma (UI/UX)", category: "tools", level: "Intermedio", iconColor: "text-pink-400" },
];

export const projectsData: Project[] = [
  {
    id: "fintech-landing",
    title: "NovaPay - Landing Page FinTech",
    category: "landing",
    categoryLabel: "Landing Page",
    description: "Landing page de alta conversión para app de pagos inteligentes y finanzas personales.",
    longDescription: "Diseñada y desarrollada para maximizar el registro a la lista de espera de una aplicación financiera. Incluye animaciones fluidas, calculadora interactiva de ahorro y 100/100 en Google Lighthouse.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    metrics: "+240% tasa de conversión",
    techs: ["React", "Tailwind CSS", "TypeScript", "Vite"],
    liveUrl: "https://example.com/demo1",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "saas-dashboard",
    title: "CloudMetrics - Dashboard Analítico SaaS",
    category: "webapp",
    categoryLabel: "Aplicación Web",
    description: "Panel de control administrativo con visualización de datos en tiempo real y gestión de suscripciones.",
    longDescription: "Plataforma SaaS para monitoreo de métricas empresariales. Cuenta con modo oscuro/claro, tablas con filtros avanzados, gráficos dinámicos y pasarela de cobros con Stripe.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    metrics: "45k usuarios activos mensuales",
    techs: ["React", "TypeScript", "Tailwind CSS", "ChartJS", "Node.js"],
    liveUrl: "https://example.com/demo2",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "luxury-ecommerce",
    title: "Aura Home - E-commerce de Decoración",
    category: "ecommerce",
    categoryLabel: "E-Commerce",
    description: "Tienda online minimalista con carrito instantáneo, filtros multicriterio y checkout seguro.",
    longDescription: "Desarrollo completo de tienda virtual para marca de diseño de interiores. Enfoque mobile-first, imágenes optimizadas con WebP y pasarela integrada con Stripe y PayPal.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    metrics: "+180% en ventas primer trimestre",
    techs: ["React", "Tailwind CSS", "Stripe", "Supabase"],
    liveUrl: "https://example.com/demo3",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "law-firm-corporate",
    title: "Vanguard Abogados - Web Corporativa",
    category: "corporate",
    categoryLabel: "Web Corporativa",
    description: "Sitio web institucional para prestigiosa firma legal con agenda de citas y blog especializado.",
    longDescription: "Sitio web corporativo enfocado en transmitir seriedad y prestigio. Incluye sistema para agendar consultas directamente en Google Calendar, formularios cifrados y SEO local optimizado.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    metrics: "#1 en búsquedas locales de Google",
    techs: ["Next.js", "Tailwind CSS", "Calendly API", "SEO"],
    liveUrl: "https://example.com/demo4",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: "gym-fitness-landing",
    title: "PulseFit - Landing Page Gimnasio & Membresías",
    category: "landing",
    categoryLabel: "Landing Page",
    description: "Página de captación para centro de entrenamiento con testimonios interactivos y botón directo a WhatsApp.",
    longDescription: "Página de aterrizaje orientada a campañas publicitarias en Meta Ads y Google Ads. Logró una reducción del costo por adquisición (CPA) del 35% gracias a su velocidad de carga instantánea.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    metrics: "Carga en 0.6s / 99% Mobile Score",
    techs: ["React", "Vite", "Tailwind CSS"],
    liveUrl: "https://example.com/demo5",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: "medical-booking-app",
    title: "MediSync - Portal Médico de Citas",
    category: "webapp",
    categoryLabel: "Aplicación Web",
    description: "Sistema de gestión clínica donde pacientes eligen especialista, horario y reciben recordatorios por email.",
    longDescription: "Aplicación web que digitalizó todo el proceso de atención para un centro médico con 12 especialistas. Incluye recordatorios automatizados y panel de gestión de expedientes.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    metrics: "+1,200 citas agendadas/mes",
    techs: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    liveUrl: "https://example.com/demo6",
    githubUrl: "https://github.com",
    featured: false,
  }
];

export const processSteps = [
  {
    step: "01",
    title: "Descubrimiento & Estrategia",
    description: "Analizamos tu negocio, competencia y objetivos. Definimos la estructura ideal y el camino más rápido para conseguir resultados.",
    duration: "Días 1 - 2",
    icon: "Compass",
  },
  {
    step: "02",
    title: "Diseño UI/UX & Prototipo",
    description: "Diseño visual moderno adaptado a la identidad de tu marca. Validamos la experiencia de usuario antes de escribir una sola línea de código.",
    duration: "Días 3 - 5",
    icon: "Figma",
  },
  {
    step: "03",
    title: "Desarrollo Ágil & Código Limpio",
    description: "Programación con tecnologías punteras (React, Vite, Tailwind). Código semántico, limpio, modular y con pruebas continuas.",
    duration: "Días 6 - 12",
    icon: "Code",
  },
  {
    step: "04",
    title: "Pruebas, Optimización & SEO",
    description: "Verificamos compatibilidad en todos los navegadores y pantallas. Maximizamos velocidad en Google PageSpeed y configuramos SEO.",
    duration: "Día 13",
    icon: "CheckCircle",
  },
  {
    step: "05",
    title: "Lanzamiento & Capacitación",
    description: "Publicación oficial en tu dominio, entrega de accesos y una sesión de video personalizada para enseñarte a gestionar tu nueva web.",
    duration: "Día 14",
    icon: "Rocket",
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "landing-express",
    name: "Landing Express",
    description: "Ideal para profesionales, marcas personales o lanzamientos que necesitan captar clientes rápido.",
    price: "$299",
    period: "pago único",
    deliveryTime: "Entrega en 5 a 7 días hábiles",
    features: [
      "Diseño exclusivo de 1 página (One-Page)",
      "Hasta 5 secciones estratégicas",
      "100% Responsive (Móvil, Tablet, PC)",
      "Botón directo de WhatsApp & Formulario",
      "Velocidad optimizada (Lighthouse > 95)",
      "Configuración de Dominio y Hosting",
      "15 días de soporte y ajustes incluidos"
    ],
    nonFeatures: [
      "Panel de administración / Blog",
      "Pasarela de pagos en línea"
    ],
    ctaText: "Elegir Landing Express",
  },
  {
    id: "web-corporativa",
    name: "Web Corporativa Pro",
    description: "La solución completa para empresas que buscan una presencia digital sólida, profesional y con SEO.",
    price: "$599",
    period: "pago único",
    popular: true,
    deliveryTime: "Entrega en 10 a 14 días hábiles",
    features: [
      "Sitio web multi-página (hasta 5 páginas internas)",
      "Diseño UI/UX a medida con animaciones",
      "Optimización SEO avanzada para Google",
      "Formularios dinámicos con aviso a correo/CRM",
      "Integración de Google Analytics & Search Console",
      "Conexión con redes sociales y WhatsApp",
      "Carga ultrarrápida con React + Tailwind",
      "30 días de garantía y soporte técnico"
    ],
    ctaText: "Elegir Web Corporativa",
  },
  {
    id: "app-custom",
    name: "A Medida / Web App",
    description: "Para plataformas que requieren lógica avanzada, usuarios, pagos o funciones personalizadas.",
    price: "$999+",
    period: "cotización a medida",
    deliveryTime: "Entrega en 3 a 5 semanas",
    features: [
      "Todo lo de Web Corporativa",
      "Base de datos y Backend a medida",
      "Autenticación segura y panel de control (Dashboard)",
      "Pasarelas de pago (Stripe, Mercado Pago)",
      "Integraciones con APIs de terceros",
      "Arquitectura escalable en la nube",
      "60 días de soporte post-lanzamiento"
    ],
    ctaText: "Cotizar Proyecto a Medida",
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "Alejandro Gómez",
    role: "Fundador & CEO",
    company: "FitLife Studio",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    content: "Carlos transformó por completo nuestra presencia online. La landing page que construyó duplicó nuestros contactos por WhatsApp en solo dos semanas. Es un profesional comprometido y súper detallista con los tiempos.",
    rating: 5,
    projectType: "Landing Page de Ventas"
  },
  {
    id: "2",
    name: "Sofía Martínez",
    role: "Directora de Operaciones",
    company: "Nexum Consulting",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    content: "Nuestra web corporativa anterior era lentísima y difícil de navegar. Con la nueva versión en React y Tailwind, carga al instante y nuestros clientes corporativos no paran de elogiarnos el diseño moderno. 100% recomendado.",
    rating: 5,
    projectType: "Sitio Web Corporativo"
  },
  {
    id: "3",
    name: "Martín Rivas",
    role: "Co-Founder",
    company: "Trackify SaaS",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    content: "Necesitábamos un dashboard reactivo para nuestros usuarios con gráficos y pasarela de cobros. Carlos no solo programó el código con una calidad impecable, sino que aportó ideas clave en la usabilidad.",
    rating: 5,
    projectType: "Aplicación Web SaaS"
  }
];

export const faqData: FaqItem[] = [
  {
    question: "¿Cuánto tiempo toma tener mi web lista?",
    answer: "Una Landing Page suele estar lista en 5 a 7 días hábiles. Un sitio web corporativo de varias secciones toma entre 10 y 14 días, mientras que aplicaciones web complejas o tiendas online toman de 3 a 5 semanas según las funciones requeridas."
  },
  {
    question: "¿Por qué utilizar React + Vite + Tailwind en vez de WordPress?",
    answer: "A diferencia de WordPress con constructores lentos y plugins pesados que son vulnerables a hackeos, una web desarrollada con React + Vite + Tailwind ofrece velocidades de carga instantáneas (< 1s), puntuaciones perfectas en Google (100% SEO), seguridad absoluta y un diseño 100% personalizado sin limitaciones."
  },
  {
    question: "¿El sitio web se verá bien en teléfonos móviles?",
    answer: "¡Totalmente! Todos mis desarrollos siguen la filosofía Mobile-First. Tu sitio web se adaptará con total fluidez a smartphones de cualquier tamaño, tablets, laptops y pantallas gigantes."
  },
  {
    question: "¿Cómo se gestiona el hosting y el dominio?",
    answer: "Puedo encargarme de toda la configuración técnica. Recomiendo y configuro plataformas de hosting en la nube de alta disponibilidad como Vercel o Netlify (muchas veces con plan gratuito suficiente para empezar), y te oriento en la compra de tu dominio (.com, .es, etc.)."
  },
  {
    question: "¿Cómo es el proceso de pago?",
    answer: "Normalmente trabajamos con un anticipo del 50% al comenzar el proyecto para reservar agenda y arrancar el desarrollo, y el 50% restante al finalizar las pruebas y antes de la entrega final del dominio y código."
  },
  {
    question: "¿Tendré soporte después de que se entregue la web?",
    answer: "Sí. Todos los paquetes incluyen un periodo de garantía y soporte técnico gratuito (de 15 a 60 días según el plan) para resolver cualquier duda, corregir ajustes o brindar asesoría."
  }
];
