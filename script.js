/* ============================================================
   MAURICIO MONTILLA — Personal Website
   script.js

   SECTIONS:
   1. i18n (translations & language toggle)
   2. Data Projects
   3. Apps & Tools
   4. Blog Posts
   5. Social Links
   6. Contact Form
   7. Navbar (scroll behavior, hamburger)
   8. Init (AOS, Typed.js, per-page renderers, hero animation)
   ============================================================ */

'use strict';

/* ============================================================
   SECTION 1 — i18n: Translations & Language Toggle
   ============================================================ */

const TRANSLATIONS = {
  en: {
    'resources.templates': 'Notion templates',
    'resources.tools': 'Tools',
    'resources.marketplace': 'My Notion marketplace',
    'resources.template': 'View template',
    'resources.open': 'Open GPT',
    'resources.free': 'Free',
    'resources.paid': 'Paid',
    // Navbar
    'nav.about':    'About me',
    'nav.projects': 'Data Projects',
    'nav.apps':     'Apps',
    'nav.blog':     'Resources',

    'app.open': 'Open app',
    'nav.main': 'Main navigation',
    'nav.mobile': 'Mobile navigation',
    'nav.menu': 'Open menu',
    // Hero
    'hero.tagline':     'I turn data into information and ideas into tools.',
    'hero.cta.portfolio': 'See my work',
    'hero.cta.contact':   'Get in touch',

    // Explore section (home page)
    'explore.label':          'Explore',
    'explore.title':          'What I do',
    'explore.subtitle':       'Browse my work, tools, writing, and more.',
    'explore.projects.title': 'Projects',
    'explore.projects.sub':   'Data analysis and ML models',
    'explore.apps.title':     'Apps',
    'explore.apps.sub':       "Tools I've built",
    'explore.blog.title':     'Resources',
    'explore.blog.sub':       'Notion templates and practical tools created by me.',
    'explore.contact.title':  'Contact',
    'explore.contact.sub':    "Let's talk",

    // Portfolio section
    'portfolio.label':    'Work',
    'portfolio.title':    'Data projects',
    'portfolio.subtitle': 'A collection of data analytics and engineering work.',

    // Apps section
    'apps.label':    'Tools',
    'apps.title':    'Apps',
    'apps.subtitle': 'Apps built by me.',

    // Blog section
    'blog.label':    'Writing',
    'blog.title':    'Resources',
    'blog.subtitle': 'Notion templates and practical tools created by me.',

    // Contact section
    'contact.label':    'Contact',
    'contact.title':    "Let's talk",
    'contact.subtitle': 'Have a project in mind or just want to say hi?',
    'contact.info.text': 'You can also reach me directly via email or find me on social media.',
    'contact.form.name':             'Name',
    'contact.form.namePlaceholder':  'Your name',
    'contact.form.email':            'Email',
    'contact.form.emailPlaceholder': 'your@email.com',
    'contact.form.message':          'Message',
    'contact.form.messagePlaceholder': 'Tell me about your project...',
    'contact.form.submit':           'Open email app',
    'contact.form.hint': 'This form opens your email app. Send the message there to complete delivery.',
    'contact.mailto': 'Continue in your email app to send the message. If it did not open, use the email address shown on this page.',
    'contact.success':               "Message sent! I'll get back to you soon.",
    'contact.error':                 'Something went wrong. Please try email directly.',

    // Card links
    'card.demo':   'Live demo',
    'card.github': 'GitHub',

    // Blog
    'blog.readTime': 'min read',

    // Footer
    'footer.madeBy': 'Made by',

    // Typed.js strings (roles)
    'typed.roles': ['Analytics Engineer', 'Data Analyst', 'Developer'],
  },

  es: {
    'resources.templates': 'Plantillas de Notion',
    'resources.tools': 'Herramientas',
    'resources.marketplace': 'Mi marketplace de Notion',
    'resources.template': 'Ver plantilla',
    'resources.open': 'Abrir GPT',
    'resources.free': 'Gratis',
    'resources.paid': 'De pago',
    // Navbar
    'nav.about':    'Sobre mí',
    'nav.projects': 'Proyectos de datos',
    'nav.apps':     'Apps',
    'nav.blog':     'Recursos',

    'app.open': 'Abrir aplicación',
    'nav.main': 'Navegación principal',
    'nav.mobile': 'Navegación móvil',
    'nav.menu': 'Abrir menú',
    // Hero
    'hero.tagline':     'Transformo datos en información e ideas en herramientas.',
    'hero.cta.portfolio': 'Ver mi trabajo',
    'hero.cta.contact':   'Contactar',

    // Explore section (home page)
    'explore.label':          'Explorar',
    'explore.title':          'Lo que hago',
    'explore.subtitle':       'Explora mi trabajo, herramientas, escritura y más.',
    'explore.projects.title': 'Proyectos',
    'explore.projects.sub':   'Análisis de datos y modelos de ML',
    'explore.apps.title':     'Apps',
    'explore.apps.sub':       'Herramientas desarrolladas',
    'explore.blog.title':     'Recursos',
    'explore.blog.sub':       'Plantillas de Notion y herramientas prácticas creadas por mí.',
    'explore.contact.title':  'Contacto',
    'explore.contact.sub':    'Hablemos',

    // Portfolio section
    'portfolio.label':    'Trabajo',
    'portfolio.title':    'Proyectos de datos',
    'portfolio.subtitle': 'Una selección de proyectos de análisis, ciencia e ingeniería de datos.',

    // Apps section
    'apps.label':    'Herramientas',
    'apps.title':    'Apps',
    'apps.subtitle': 'Herramientas desarrolladas.',

    // Blog section
    'blog.label':    'Escritura',
    'blog.title':    'Recursos',
    'blog.subtitle': 'Plantillas de Notion y herramientas prácticas creadas por mí.',

    // Contact section
    'contact.label':    'Contacto',
    'contact.title':    'Hablemos',
    'contact.subtitle': '¿Tienes un proyecto en mente o simplemente quieres saludar?',
    'contact.info.text': 'También puedes contactarme directamente por email o encontrarme en redes sociales.',
    'contact.form.name':             'Nombre',
    'contact.form.namePlaceholder':  'Tu nombre',
    'contact.form.email':            'Email',
    'contact.form.emailPlaceholder': 'tu@email.com',
    'contact.form.message':          'Mensaje',
    'contact.form.messagePlaceholder': 'Cuéntame sobre tu proyecto...',
    'contact.form.submit':           'Abrir aplicación de correo',
    'contact.form.hint': 'Este formulario abre tu aplicación de correo. Envía el mensaje desde allí para completar el envío.',
    'contact.mailto': 'Continúa en tu aplicación de correo para enviar el mensaje. Si no se ha abierto, utiliza la dirección de correo que aparece en esta página.',
    'contact.success':               '¡Mensaje enviado! Te responderé lo antes posible.',
    'contact.error':                 'Algo salió mal. Por favor escríbeme directamente por email.',

    // Card links
    'card.demo':   'Demo en vivo',
    'card.github': 'GitHub',

    // Blog
    'blog.readTime': 'min de lectura',

    // Footer
    'footer.madeBy': 'Creado por',

    // Typed.js strings (roles)
    'typed.roles': ['Analytics Engineer', 'Data Analyst', 'Desarrollador'],
  },
};

/** Detect initial language from browser preference, default to English */
function detectLanguage() {
  try {
    const saved = localStorage.getItem('portfolio-language');
    if (saved === 'es' || saved === 'en') return saved;
  } catch { /* Browser storage may be unavailable. */ }
  const browserLang = (navigator.language || navigator.userLanguage || 'en').slice(0, 2).toLowerCase();
  return browserLang === 'es' ? 'es' : 'en';
}

/** Active language state */
let currentLang = detectLanguage();

/** Convenience: get a translation string */
function t(key) {
  return TRANSLATIONS[currentLang][key] || TRANSLATIONS['en'][key] || key;
}

/**
 * Apply all [data-i18n] and [data-i18n-placeholder] attributes on the page.
 * Call this whenever the language changes.
 */
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const value = t(key);
    if (value !== undefined) el.textContent = value;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    const value = t(key);
    if (value !== undefined) el.setAttribute('placeholder', value);
  });

  document.documentElement.lang = currentLang;
  document.querySelectorAll('[data-language]').forEach(el => { el.hidden = el.dataset.language !== currentLang; });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => el.setAttribute('aria-label', t(el.dataset.i18nAria)));

  // Lang toggle button label
  const labels = document.querySelectorAll('#langLabel, #langLabelMobile');
  const toggleText = currentLang === 'en' ? 'Cambiar a español' : 'Change to English';
  labels.forEach((label) => {
    label.textContent = toggleText;
    label.parentElement.setAttribute('aria-label', toggleText);
  });
}

/** Toggle between EN and ES, then re-render dynamic content for current page */
function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'es' : 'en';
  try { localStorage.setItem('portfolio-language', currentLang); } catch { /* Keep the toggle usable. */ }
  applyTranslations();
  renderPageContent();
  restartTyped();
}


/* ============================================================
   SECTION 2 — Data Projects
   ============================================================ */

const PROJECTS = [
  {
    id: 'churn-telecom',
    icon: '📡',
    cover: 'assets/projects/churn-telecom.jpg',
    title: {
      en: 'Churn prediction in a telecommunications company',
      es: 'Predicción de churn en una empresa de telecomunicaciones',
    },
    description: {
      en: 'Analytical model to predict which customers are likely to leave a telecom operator, enabling the business to act proactively with targeted retention strategies.',
      es: 'Modelo analítico para predecir qué clientes tienen mayor probabilidad de darse de baja en una operadora, permitiendo accionar estrategias de retención de forma proactiva.',
    },
    tags: ['Python', 'scikit-learn', 'pandas'],
    links: {
      demo:   null,
      github: 'https://github.com/mauriciomontillagarcia/Churn-Prediction-Telecom-Company',
      notion: 'https://www.notion.so/Churn-prediction-in-a-telecommunications-company-6482b696bbe04a7aa73839226a32dbe6',
    },
  },
  {
    id: 'transport-ml',
    icon: '🚌',
    cover: 'assets/projects/transport-ml.jpg',
    title: {
      en: 'Predicting transport mode choice to support mobility policy and planning',
      es: 'Predicción del modo de transporte para apoyar políticas de movilidad',
    },
    description: {
      en: 'Comparison of multiple ML models for predicting transportation methods, with a focus on sustainability and efficiency for smarter urban mobility decisions.',
      es: 'Comparación de múltiples modelos de ML para predecir métodos de transporte, con foco en sostenibilidad y eficiencia para decisiones de movilidad urbana más inteligentes.',
    },
    tags: ['Python', 'scikit-learn'],
    links: {
      demo:   null,
      github: 'https://github.com/mauriciomontillagarcia/ML-Model-Comparison-Transport-Method',
      notion: 'https://www.notion.so/Predicting-transport-mode-choice-to-support-mobility-policy-and-planning-bdda2b67236e4586a27b143ac89e2104',
    },
  },
  {
    id: 'water-pump',
    icon: '💧',
    cover: 'assets/projects/water-pump.jpg',
    title: {
      en: 'Predicting water pump functionality to optimize rural maintenance efforts',
      es: 'Predicción del funcionamiento de bombas de agua para optimizar el mantenimiento rural',
    },
    description: {
      en: 'Infrastructure ML model to accurately predict the operational status of water pumps, supporting resource optimization and proactive maintenance to reduce costs.',
      es: 'Modelo de ML para predecir con precisión el estado operativo de bombas de agua, apoyando la optimización de recursos y el mantenimiento proactivo para reducir costes.',
    },
    tags: ['Python', 'scikit-learn', 'pandas'],
    links: {
      demo:   null,
      github: 'https://github.com/mauriciomontillagarcia/Water-Pump-Functionality-Prediction',
      notion: 'https://www.notion.so/Predicting-water-pump-functionality-to-optimize-rural-maintenance-efforts-6a13977b4653407fae8cd52b0127abca',
    },
  },
  {
    id: 'hotel-bookings',
    icon: '🏨',
    cover: 'assets/projects/hotel-bookings.jpg',
    title: {
      en: 'Optimizing hotel bookings through data analytics',
      es: 'Optimización de reservas hoteleras con analítica de datos',
    },
    description: {
      en: 'Exploratory analysis and predictive modelling to optimize hotel booking rates, identifying key factors that drive cancellations and occupancy patterns.',
      es: 'Análisis exploratorio y modelado predictivo para optimizar las reservas hoteleras, identificando los factores clave que afectan las cancelaciones y la ocupación.',
    },
    tags: ['Python', 'pandas', 'SQL'],
    links: {
      demo:   null,
      github: null,
      notion: 'https://www.notion.so/Optimizing-hotel-bookings-through-data-analytics-124b2334db64475899a02e3b45d80929',
    },
  },
  {
    id: 'hospital-db',
    icon: '🏥',
    cover: 'assets/projects/hospital-database.jpg',
    title: {
      en: 'Hospital resource management database design',
      es: 'Diseño de base de datos para gestión hospitalaria',
    },
    description: {
      en: 'Relational database design for managing hospital resources, covering patient records, staff scheduling, and medical equipment tracking.',
      es: 'Diseño de base de datos relacional para la gestión de recursos hospitalarios, incluyendo pacientes, planificación de personal y equipamiento médico.',
    },
    tags: ['SQL'],
    links: {
      demo:   null,
      github: null,
      notion: 'https://www.notion.so/Hospital-resource-management-database-design-ef92f0ca3120451baf999657d4261370',
    },
  },
  {
    id: 'wholesale-db',
    icon: '🏪',
    cover: 'assets/projects/wholesale-database.jpg',
    title: {
      en: 'Database system for a wholesale business model',
      es: 'Sistema de base de datos para modelo de negocio mayorista',
    },
    description: {
      en: 'Design and implementation of a complete relational database for a wholesale business, covering inventory, orders, suppliers and clients.',
      es: 'Diseño e implementación de un sistema de base de datos relacional para un negocio mayorista, cubriendo inventario, pedidos, proveedores y clientes.',
    },
    tags: ['SQL'],
    links: {
      demo:   null,
      github: null,
      notion: 'https://www.notion.so/Functional-database-system-for-a-wholesale-business-model-1474f66379a945b7994f4779604b0cc7',
    },
  },
];

/** Render project cards into #projectsGrid */
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  grid.innerHTML = PROJECTS.map((project, index) => `
    <article class="card" data-aos="fade-up" data-aos-delay="${index * 80}">
      <a href="${project.links.notion || project.links.github}" target="_blank" rel="noopener noreferrer" class="card__cover" aria-hidden="true">
        <img src="${project.cover}" alt="${project.title[currentLang]}" class="card__cover-img" loading="lazy">
      </a>
      <h3 class="card__title">${(project.links.notion || project.links.github) ? `<a href="${project.links.notion || project.links.github}" target="_blank" rel="noopener noreferrer">${project.title[currentLang]}</a>` : project.title[currentLang]}</h3>
      <p class="card__description">${project.description[currentLang]}</p>
      <div class="card__tags">
        ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}
      </div>
      <div class="card__links">
        ${project.links.demo ? `
          <a class="card__link" href="${project.links.demo}" target="_blank" rel="noopener noreferrer">
            <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
            ${t('card.demo')}
          </a>
        ` : ''}
        ${project.links.demo && project.links.github ? `<span class="card__link-divider" aria-hidden="true">·</span>` : ''}
        ${project.links.notion ? `
          <a class="card__link" href="${project.links.notion}" target="_blank" rel="noopener noreferrer">
            <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
            Notion
          </a>
        ` : project.links.github ? `
          <a class="card__link" href="${project.links.github}" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-github" aria-hidden="true"></i>
            ${t('card.github')}
          </a>
        ` : ''}
      </div>
    </article>
  `).join('');

  if (window.AOS) AOS.refresh();
}


/* ============================================================
   SECTION 3 — Apps & Tools
   ============================================================ */

const APPS = [
  {
    id: 'city-size-comparison',
    icon: '🗺️',
    title: {
      en: 'City Size Comparison',
      es: 'City Size Comparison',
    },
    description: {
      en: 'Interactive map tool to overlay and compare the geographical size of different cities side by side. Built with React and Leaflet for smooth, intuitive exploration.',
      es: 'Herramienta de mapas interactiva para superponer y comparar el tamaño geográfico de diferentes ciudades. Desarrollada con React y Leaflet para una exploración fluida e intuitiva.',
    },
    tags: ['React', 'Leaflet', 'JavaScript', 'CSS'],
    iframeUrl: 'https://mauriciomontillagarcia.github.io/City-Size-Comparsion/',
    links: {
      demo:   'https://mauriciomontillagarcia.github.io/City-Size-Comparsion/',
      github: null,
    },
  },
];

/** Render app cards into #appsGrid */
function renderApps() {
  const grid = document.getElementById('appsGrid');
  if (!grid) return;

  grid.innerHTML = APPS.map((app, index) => `
    <article class="card${app.iframeUrl ? ' card--has-preview' : ''}" data-aos="fade-up" data-aos-delay="${index * 80}">
      ${app.iframeUrl ? `
      <div class="card__preview">
        <iframe
          src="${app.iframeUrl}"
          class="card__preview-iframe"
          loading="lazy"
          scrolling="no"
          tabindex="-1"
          aria-hidden="true"
          title="${app.title[currentLang]} preview"
        ></iframe>
        <a class="card__preview-overlay" href="${app.iframeUrl}" target="_blank" rel="noopener noreferrer" aria-label="${t('app.open')}: ${app.title[currentLang]}">
          <span class="card__preview-label"><i class="fa-solid fa-arrow-up-right-from-square"></i> ${t('app.open')}</span>
        </a>
      </div>
      ` : `<div class="card__icon" aria-hidden="true">${app.icon}</div>`}
      <h3 class="card__title">${app.title[currentLang]}</h3>
      <p class="card__description">${app.description[currentLang]}</p>
      <div class="card__tags">
        ${app.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}
      </div>
      <div class="card__links">
        ${app.links.demo ? `
          <a class="card__link" href="${app.links.demo}" target="_blank" rel="noopener noreferrer">
            <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
            ${t('card.demo')}
          </a>
        ` : ''}
        ${app.links.demo && app.links.github ? `<span class="card__link-divider" aria-hidden="true">·</span>` : ''}
        ${app.links.github ? `
          <a class="card__link" href="${app.links.github}" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-github" aria-hidden="true"></i>
            ${t('card.github')}
          </a>
        ` : ''}
      </div>
    </article>
  `).join('');

  if (window.AOS) AOS.refresh();
}


/* ============================================================
   SECTION 4 — Blog Posts
   ============================================================ */

const NOTION_TEMPLATES = [
  {
    "name": "MyBudget",
    "slug": "mybudget",
    "image": "5483d20e-3c8f-4686-8548-9fd464b679d3/1771832376681",
    "paid": false,
    "description": {
      "es": "Organiza tus ingresos y gastos, define tu objetivo de ahorro y consulta tu presupuesto de un vistazo.",
      "en": "Organise your income and expenses, set a savings goal and check your budget at a glance."
    }
  },
  {
    "name": "MyContent",
    "slug": "mycontent",
    "image": "4d133e4b-7862-4e6d-a5d2-323769451dba/1773130457104",
    "paid": false,
    "description": {
      "es": "Reúne ideas, guiones, tareas y calendario de publicaciones en un único espacio de trabajo.",
      "en": "Bring ideas, scripts, tasks and your publishing calendar together in one workspace."
    }
  },
  {
    "name": "MyTrain",
    "slug": "mytrain",
    "image": "c0cc6cc4-a8e6-4bd8-a59c-1a4613a0b00c/1773067190139",
    "paid": true,
    "description": {
      "es": "Planifica tus entrenamientos semanales y registra la evolución de las cargas con una estructura sencilla.",
      "en": "Plan your weekly workouts and track your lifting progress with a simple structure."
    }
  }
];

/** Render Notion templates and tools into the resources page. */
function renderBlog() {
  const list = document.getElementById('blogList');
  if (!list) return;
  list.innerHTML = `
    <section aria-labelledby="templates-title">
      <div class="resources__header">
        <h2 class="section__title" id="templates-title">${t('resources.templates')}</h2>
        <a class="card__link" href="https://www.notion.com/@mauriciomontilla" target="_blank" rel="noopener noreferrer">${t('resources.marketplace')} ↗</a>
      </div>
      <div class="card-grid">
        ${NOTION_TEMPLATES.map(item => `
          <article class="card resource-card">
            <a class="card__cover" href="https://www.notion.com/templates/${item.slug}" target="_blank" rel="noopener noreferrer" aria-label="${t('resources.template')}: ${item.name}">
              <img class="card__cover-img" src="https://s3-us-west-2.amazonaws.com/public.notion-static.com/template/${item.image}/desktop.jpg" alt="${item.name}" loading="lazy" width="640" height="360">
            </a>
            <h3 class="card__title">${item.name}</h3>
            <p class="card__description">${item.description[currentLang]}</p>
            <a class="card__link" href="https://www.notion.com/templates/${item.slug}" target="_blank" rel="noopener noreferrer">${t('resources.template')} ↗</a>
          </article>`).join('')}
      </div>
    </section>
    <section class="resources__tools" aria-labelledby="tools-title">
      <h2 class="section__title" id="tools-title">${t('resources.tools')}</h2>
      <div class="card-grid">
      <article class="card resource-card resource-tool">
        <a class="card__cover" href="https://chatgpt.com/g/g-684dafe3e04881919e2135c9782d2d38-ea-fc-modo-manager-gpt" target="_blank" rel="noopener noreferrer" aria-label="${t('resources.open')}: EA FC Manager GPT">
          <img class="card__cover-img" src="assets/ea-fc-manager.svg" alt="EA FC Manager GPT" loading="lazy" width="640" height="360">
        </a>
        <h3 class="card__title">EA FC Manager GPT</h3>
        <p class="card__description">${currentLang === 'es' ? 'Un asistente de scouting para el modo carrera de EA FC. Busca jugadores por edad, posición, media, potencial o valor de mercado.' : 'A scouting assistant for EA FC career mode. Find players by age, position, rating, potential or market value.'}</p>
        <a class="card__link" href="https://chatgpt.com/g/g-684dafe3e04881919e2135c9782d2d38-ea-fc-modo-manager-gpt" target="_blank" rel="noopener noreferrer">${t('resources.open')} ↗</a>
      </article>
      </div>
    </section>`;
}


/* ============================================================
   SECTION 5 — Social Links
   ============================================================ */

const SOCIAL_LINKS = [
  {
    id: 'github',
    label: 'GitHub',
    icon: 'fa-brands fa-github',
    url: 'https://github.com/mauriciomontillagarcia',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    icon: 'fa-brands fa-linkedin-in',
    url: 'https://linkedin.com/in/mauri',
  },
  {
    id: 'twitter',
    label: 'Twitter / X',
    icon: 'fa-brands fa-x-twitter',
    url: 'https://x.com/mauri',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    icon: 'fa-brands fa-instagram',
    url: 'https://instagram.com/mauri',
  },
];

/** Render social icon buttons into #socialIcons */
function renderSocial() {
  const container = document.getElementById('socialIcons');
  if (!container) return;

  container.innerHTML = SOCIAL_LINKS.map((social) => `
    <a class="social-icon"
       href="${social.url}"
       target="_blank"
       rel="noopener noreferrer"
       aria-label="${social.label}">
      <i class="${social.icon}" aria-hidden="true"></i>
    </a>
  `).join('');
}


/* ============================================================
   SECTION 6 — Contact Form
   ============================================================ */

/* ============================================================
   SECTION 7 — Navbar
   ============================================================ */

function initNavbar() {
  const navbar     = document.getElementById('navbar');
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-menu__link');

  // Scroll: add .scrolled class
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Hamburger toggle
  const openMenu = () => {
    hamburger.classList.add('is-active');
    hamburger.setAttribute('aria-expanded', 'true');
    mobileMenu.classList.add('is-open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    document.body.classList.add('menu-open');
  };

  const closeMenu = () => {
    hamburger.classList.remove('is-active');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('is-open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('menu-open');
  };

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.contains('is-open') ? closeMenu() : openMenu();
  });

  mobileLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  // Language toggles
  const langToggleDesktop = document.getElementById('langToggle');
  const langToggleMobile  = document.getElementById('langToggleMobile');

  if (langToggleDesktop) langToggleDesktop.addEventListener('click', toggleLanguage);
  if (langToggleMobile)  langToggleMobile.addEventListener('click', toggleLanguage);
}


/* ============================================================
   SECTION 8 — Init: page detection, AOS, Typed.js, renderers
   ============================================================ */

/** Detect which page we are on from the URL pathname */
function detectPage() {
  const path = window.location.pathname.toLowerCase();
  if (path.includes('projects')) return 'projects';
  if (path.includes('apps'))     return 'apps';
  if (path.includes('blog'))     return 'blog';
  if (path.includes('contact'))  return 'contact';
  return 'home'; // index.html or root
}

/**
 * Render only the dynamic content relevant to the current page.
 * Called on initial load and on every language toggle.
 */
function renderPageContent() {
  const page = detectPage();

  if (page === 'projects') {
    renderProjects();
  } else if (page === 'apps') {
    renderApps();
  } else if (page === 'blog') {
    renderBlog();
  } else if (page === 'contact') {
    renderSocial();
  }
  // home page has no JS-rendered dynamic sections (cards are static HTML)
}

/** Typed.js instance — stored so we can destroy/recreate on lang change */
let typedInstance = null;

function initTyped() {
  const el = document.getElementById('typedRole');
  if (!el || !window.Typed) return;

  if (typedInstance) {
    typedInstance.destroy();
    typedInstance = null;
  }

  typedInstance = new Typed('#typedRole', {
    strings: t('typed.roles'),
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 2000,
    startDelay: 400,
    loop: true,
    smartBackspace: true,
    showCursor: true,
    cursorChar: '|',
  });
}

/** Called on language change to restart Typed with new strings */
function restartTyped() {
  initTyped();
}

/** Trigger hero fade-in animation */
function initHeroAnimation() {
  const heroContent = document.querySelector('.hero--fade-in');
  if (!heroContent) return;

  requestAnimationFrame(() => {
    setTimeout(() => {
      heroContent.classList.add('hero--visible');
    }, 100);
  });
}

/** Initialize AOS scroll animations */
function initAOS() {
  if (!window.AOS) return;
  AOS.init({
    duration: 600,
    easing: 'ease-out-cubic',
    once: true,
    offset: 60,
    delay: 0,
  });
}

/** Set current year in footer */
function initFooterYear() {
  const el = document.getElementById('footerYear');
  if (el) el.textContent = new Date().getFullYear();
}

/** Main entry point — runs after DOM is ready */
function init() {
  // Apply translations first
  applyTranslations();

  // Render dynamic content for current page only
  renderPageContent();

  // Shared interactive features (present on every page)
  initNavbar();
  initFooterYear();
  initAOS();

  // Hero-only features (index.html)
  if (detectPage() === 'home') {
    initHeroAnimation();
    initTyped();
  }
}

// Run init when the DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
