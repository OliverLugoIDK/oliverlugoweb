/*
  OLIVER LUGO — CONFIGURACIÓN EDITABLE
  Cambia aquí nombre, logo, colores, servicios, paquetes, contacto, enlaces e imágenes.
  Para imágenes propias: guarda tus archivos en assets/img/ y cambia la ruta.
*/
window.SITE_CONFIG = {
  brand: {
    name: "Oliver Lugo",
    legalName: "Oliver Lugo Studio",
    tagline: "Diseño gráfico estratégico para marcas que necesitan verse profesionales, vender mejor y destacar desde el primer impacto.",
    shortTagline: "Diseño gráfico, branding y dirección visual.",
    logo: "assets/img/logo-oliver-lugo.svg",
    favicon: "assets/img/favicon.svg",
    email: "contactooliverlugo@gmail.com",
    phone: "+58 412-5477119",
    whatsapp: "58 412-5477119",
    instagram: "https://www.instagram.com/oliver.lugo1/",
    behance: "https://behance.net/oliverlugo",
    location: "Latinoamérica · Atención remota",
    calendar: "#contacto",
    currency: "USD",
    primaryCTA: "Solicitar propuesta",
    secondaryCTA: "Ver paquetes",
    footerNote: "Diseño con criterio, sistema y ejecución visual de alto nivel."
  },
  colors: {
    primary: "#8a5cff",
    secondary: "#00e0ff",
    accent: "#f7d85c",
    background: "#050508",
    surface: "#101017",
    text: "#f4f4f7"
  },
  navigation: [
    { label: "Inicio", href: "index.html" },
    { label: "Servicios", href: "servicios.html" },
    { label: "Paquetes", href: "paquetes.html" },
    { label: "Portafolio", href: "portafolio.html" },
    { label: "Sobre mí", href: "sobre-mi.html" },
    { label: "Contacto", href: "contacto.html" }
  ],
  hero: {
    eyebrow: "Diseñador gráfico · Branding · Creativos comerciales",
    title: "Tu marca no necesita verse bonita. Necesita verse imposible de ignorar.",
    highlight: "imposible de ignorar",
    description: "Creo identidades visuales, piezas comerciales, sistemas gráficos y páginas de venta para negocios que quieren proyectar autoridad, confianza y deseo de compra.",
    bullets: ["Identidad visual profesional", "Creativos para vender", "Dirección visual con IA", "Entrega lista para usar"],
    image: "assets/img/hero-visual.svg"
  },
  stats: [
    { value: "+120", label: "piezas diseñadas" },
    { value: "4", label: "áreas clave" },
    { value: "100%", label: "editable" },
    { value: "24/7", label: "sistema online" }
  ],
  pain: {
    eyebrow: "El problema real",
    title: "No es falta de talento. Es falta de dirección visual.",
    text: "Cuando una marca se ve improvisada, el cliente duda. Cuando se ve estructurada, el cliente entiende rápido qué vendes, por qué confiar y por qué pagar más.",
    cards: [
      { title: "Diseños sin estrategia", text: "Piezas bonitas pero sin intención comercial, sin jerarquía y sin mensaje claro." },
      { title: "Marca inconsistente", text: "Cada publicación parece de una empresa distinta. Eso reduce confianza y recordación." },
      { title: "Oferta débil", text: "Servicios, paquetes y beneficios mal presentados aunque el producto sea bueno." }
    ]
  },
  services: [
    {
      slug: "branding",
      title: "Identidad visual y branding",
      category: "Marca",
      description: "Sistema visual profesional para que tu negocio tenga una presencia coherente, clara y memorable.",
      deliverables: ["Logo principal y variantes", "Paleta cromática", "Tipografías", "Sistema visual", "Manual básico de marca"],
      icon: "✦",
      image: "assets/img/service-branding.svg"
    },
    {
      slug: "social-ads",
      title: "Creativos para redes y ads",
      category: "Ventas",
      description: "Piezas gráficas con jerarquía, gancho visual y enfoque comercial para campañas, lanzamientos y promociones.",
      deliverables: ["Posts y carruseles", "Historias", "Flyers", "Anuncios", "Adaptaciones por formato"],
      icon: "◈",
      image: "assets/img/service-ads.svg"
    },
    {
      slug: "packaging",
      title: "Packaging y mockups",
      category: "Producto",
      description: "Diseño de empaques, etiquetas y presentaciones visuales para elevar la percepción de valor del producto.",
      deliverables: ["Etiqueta", "Caja o empaque", "Mockups realistas", "Ficha visual", "Arte final editable"],
      icon: "▣",
      image: "assets/img/service-packaging.svg"
    },
    {
      slug: "landing",
      title: "Landing pages y páginas de venta",
      category: "Web",
      description: "Estructuras visuales y páginas comerciales para presentar servicios, paquetes, cursos o marcas personales.",
      deliverables: ["Diseño de landing", "Copy base", "Secciones de venta", "Responsive", "Archivos editables"],
      icon: "⬡",
      image: "assets/img/service-web.svg"
    },
    {
      slug: "direccion-visual-ia",
      title: "Dirección visual con IA",
      category: "IA",
      description: "Prompts, escenas, mockups y recursos visuales generados con IA bajo una dirección de arte profesional.",
      deliverables: ["Prompts optimizados", "Moodboards", "Fotografía IA", "Retoque base", "Guía de estilo"],
      icon: "✺",
      image: "assets/img/service-ai.svg"
    },
    {
      slug: "auditoria",
      title: "Auditoría visual de marca",
      category: "Diagnóstico",
      description: "Revisión crítica de tu presencia visual para detectar fallas, oportunidades y próximos pasos concretos.",
      deliverables: ["Informe visual", "Errores prioritarios", "Ruta de mejora", "Referencias", "Checklist de acción"],
      icon: "◎",
      image: "assets/img/service-audit.svg"
    }
  ],
  process: [
    { step: "01", title: "Diagnóstico", text: "Se analiza marca, oferta, público, competencia y percepción visual actual." },
    { step: "02", title: "Dirección visual", text: "Se define estilo, tono, jerarquía, referentes y sistema gráfico base." },
    { step: "03", title: "Diseño", text: "Se construyen piezas con enfoque profesional, comercial y editable." },
    { step: "04", title: "Entrega", text: "Recibes archivos organizados, versiones finales y guía para modificar." }
  ],
  packages: [
    {
      name: "Starter Visual",
      tag: "Para ordenar tu imagen",
      price: "Desde $150",
      description: "Base visual profesional para emprendedores o marcas pequeñas que necesitan dejar de verse improvisadas.",
      features: ["Logo simple o refresh visual", "Paleta + tipografías", "5 piezas gráficas", "Mini guía de uso", "Entrega editable"],
      cta: "Quiero el Starter",
      featured: false
    },
    {
      name: "Marca de Impacto",
      tag: "Más solicitado",
      price: "Desde $350",
      description: "Sistema completo de identidad visual para presentar tu marca con más autoridad y coherencia comercial.",
      features: ["Logo completo + variantes", "Manual básico de marca", "Sistema gráfico", "10 piezas para redes", "Mockups profesionales", "Dirección visual IA"],
      cta: "Quiero mi marca",
      featured: true
    },
    {
      name: "Visual Sales System",
      tag: "Para vender mejor",
      price: "Desde $650",
      description: "Paquete estratégico para negocios que necesitan mejorar percepción, oferta y conversión visual.",
      features: ["Branding avanzado", "Landing page estática", "20 creativos comerciales", "Presentación de servicios", "Mockups + recursos", "Guía editable del sistema"],
      cta: "Solicitar sistema",
      featured: false
    }
  ],
  portfolio: [
    { title: "Identidad premium para marca personal", type: "Branding", image: "assets/img/work-01.svg" },
    { title: "Campaña visual para lanzamiento", type: "Ads / Social", image: "assets/img/work-02.svg" },
    { title: "Packaging cosmético editorial", type: "Packaging", image: "assets/img/work-03.svg" },
    { title: "Landing page para servicio creativo", type: "Web", image: "assets/img/work-04.svg" },
    { title: "Dirección visual con IA", type: "AI Art Direction", image: "assets/img/work-05.svg" },
    { title: "Sistema gráfico para promoción", type: "Campaign", image: "assets/img/work-06.svg" }
  ],
  testimonials: [
    { name: "Cliente de branding", role: "Marca comercial", quote: "La marca se entendió mejor desde el primer contacto. Ahora todo se ve coherente y más profesional." },
    { name: "Cliente de campaña", role: "Negocio digital", quote: "Las piezas dejaron de verse genéricas. La propuesta visual elevó la percepción del servicio." },
    { name: "Cliente de packaging", role: "Producto físico", quote: "El empaque empezó a comunicar calidad antes de explicar el precio." }
  ],
  bonuses: [
    { title: "Guía editable de marca", value: "$47 incluido", text: "Documento base para mantener consistencia visual en futuras piezas." },
    { title: "Pack de prompts visuales", value: "$27 incluido", text: "Prompts para generar recursos, mockups y referencias con IA." },
    { title: "Checklist de publicación", value: "$27 incluido", text: "Lista de revisión para evitar errores de jerarquía, texto y legibilidad." },
    { title: "Mini auditoría post-entrega", value: "$47 incluido", text: "Revisión breve para ajustar la implementación inicial de tu nueva imagen." }
  ],
  faqs: [
    { q: "¿Puedo cambiar textos, imágenes y precios?", a: "Sí. El sitio está armado con archivos editables. La mayoría de datos comerciales están en assets/js/config.js y los estilos en assets/css/styles.css." },
    { q: "¿La web tiene backend?", a: "No. Es una versión estática profesional. El formulario abre WhatsApp o correo. Se puede conectar luego con hosting, CRM, WordPress, Laravel o Node." },
    { q: "¿Puedo usar mi propio logo?", a: "Sí. Sustituye assets/img/logo-oliver-lugo.svg por tu archivo o cambia la ruta en config.js." },
    { q: "¿Los paquetes son fijos?", a: "No. Son ejemplos comerciales. Puedes cambiar nombres, precios, beneficios y CTA desde config.js." },
    { q: "¿Está optimizada para teléfono?", a: "Sí. El diseño es responsive y tiene navegación móvil, animaciones suaves y estructura adaptable." },
    { q: "¿Puedo publicar esto en hosting?", a: "Sí. Sube la carpeta completa a Netlify, Vercel, cPanel o cualquier hosting estático." }
  ]
};
