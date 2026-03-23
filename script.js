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
    // Navbar
    'nav.about':    'Sobre mí',
    'nav.projects': 'Data Projects',
    'nav.apps':     'Apps',
    'nav.blog':     'Blog',

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
    'explore.blog.title':     'Blog',
    'explore.blog.sub':       'Technical and personal writing',
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
    'blog.title':    'Blog',
    'blog.subtitle': 'Reflections on data, development, productivity, and a bit of everything.',

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
    'contact.form.submit':           'Send message',
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
    // Navbar
    'nav.about':    'Sobre mí',
    'nav.projects': 'Data Projects',
    'nav.apps':     'Apps',
    'nav.blog':     'Blog',

    // Hero
    'hero.tagline':     'Transformo datos en información e ideas en herramientas.',
    'hero.cta.portfolio': 'Ver mi trabajo',
    'hero.cta.contact':   'Contactar',

    // Explore section (home page)
    'explore.label':          'Explorar',
    'explore.title':          'Lo que hago',
    'explore.subtitle':       'Explorá mi trabajo, herramientas, escritura y más.',
    'explore.projects.title': 'Proyectos',
    'explore.projects.sub':   'Análisis de datos y modelos de ML',
    'explore.apps.title':     'Apps',
    'explore.apps.sub':       'Herramientas que desarrollé',
    'explore.blog.title':     'Blog',
    'explore.blog.sub':       'Escritura técnica y personal',
    'explore.contact.title':  'Contacto',
    'explore.contact.sub':    'Hablemos',

    // Portfolio section
    'portfolio.label':    'Trabajo',
    'portfolio.title':    'Proyectos de datos',
    'portfolio.subtitle': 'Una selección de proyectos de análisis, ciencia e ingeniería de datos.',

    // Apps section
    'apps.label':    'Herramientas',
    'apps.title':    'Apps',
    'apps.subtitle': 'Apps desarrolladas por mí.',

    // Blog section
    'blog.label':    'Escritura',
    'blog.title':    'Blog',
    'blog.subtitle': 'Reflexiones sobre datos, desarrollo, productividad, et... de todo un poco.',

    // Contact section
    'contact.label':    'Contacto',
    'contact.title':    'Hablemos',
    'contact.subtitle': '¿Tenés un proyecto en mente o simplemente querés saludar?',
    'contact.info.text': 'También podés contactarme directamente por email o encontrarme en redes sociales.',
    'contact.form.name':             'Nombre',
    'contact.form.namePlaceholder':  'Tu nombre',
    'contact.form.email':            'Email',
    'contact.form.emailPlaceholder': 'tu@email.com',
    'contact.form.message':          'Mensaje',
    'contact.form.messagePlaceholder': 'Contame sobre tu proyecto...',
    'contact.form.submit':           'Enviar mensaje',
    'contact.success':               '¡Mensaje enviado! Te responderé a la brevedad.',
    'contact.error':                 'Algo salió mal. Por favor escribime directamente por email.',

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

  // Lang toggle button label
  const labels = document.querySelectorAll('#langLabel, #langLabelMobile');
  const toggleText = currentLang === 'en' ? 'Cambiar a español' : 'Change to English';
  labels.forEach((label) => {
    label.textContent = toggleText;
  });
}

/** Toggle between EN and ES, then re-render dynamic content for current page */
function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'es' : 'en';
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
      en: 'Churn prediction — Telecom',
      es: 'Predicción de churn — Telecom',
    },
    description: {
      en: 'Analytical model to predict which customers are likely to leave a telecom operator, enabling the business to act proactively with targeted retention strategies.',
      es: 'Modelo analítico para predecir qué clientes tienen mayor probabilidad de darse de baja en una operadora, permitiendo accionar estrategias de retención de forma proactiva.',
    },
    tags: ['Python', 'scikit-learn', 'Jupyter', 'ML', 'pandas'],
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
      en: 'ML model comparison — Transport',
      es: 'Comparación de modelos ML — Transporte',
    },
    description: {
      en: 'Comparison of multiple ML models for predicting transportation methods, with a focus on sustainability and efficiency for smarter urban mobility decisions.',
      es: 'Comparación de múltiples modelos de ML para predecir métodos de transporte, con foco en sostenibilidad y eficiencia para decisiones de movilidad urbana más inteligentes.',
    },
    tags: ['Python', 'scikit-learn', 'Jupyter', 'ML', 'TypeScript'],
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
      en: 'Water pump functionality prediction',
      es: 'Predicción de funcionamiento de bombas de agua',
    },
    description: {
      en: 'Infrastructure ML model to accurately predict the operational status of water pumps, supporting resource optimization and proactive maintenance to reduce costs.',
      es: 'Modelo de ML para predecir con precisión el estado operativo de bombas de agua, apoyando la optimización de recursos y el mantenimiento proactivo para reducir costes.',
    },
    tags: ['Python', 'scikit-learn', 'Jupyter', 'ML', 'pandas'],
    links: {
      demo:   null,
      github: 'https://github.com/mauriciomontillagarcia/Water-Pump-Functionality-Prediction',
      notion: 'https://www.notion.so/Predicting-water-pump-functionality-to-optimize-rural-maintenance-efforts-6a13977b4653407fae8cd52b0127abca',
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
      es: 'Comparador de Tamaño de Ciudades',
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
        <a class="card__preview-overlay" href="${app.iframeUrl}" target="_blank" rel="noopener noreferrer" aria-label="Open ${app.title[currentLang]}">
          <span class="card__preview-label"><i class="fa-solid fa-arrow-up-right-from-square"></i> Open app</span>
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

const BLOG_POSTS = [
  {
    id: '5-libros-desarrollo-personal',
    date: '2023-01-15',
    readTime: 4,
    category: {
      en: 'Books',
      es: 'Libros',
    },
    title: {
      en: 'My 5 Favourite Personal Development Books',
      es: 'Mis 5 libros favoritos sobre desarrollo personal',
    },
    excerpt: {
      en: 'From Stoicism to habit-building: the five books that genuinely changed the way I think — and why each one is worth your time.',
      es: 'Del estoicismo a la construcción de hábitos: los cinco libros que cambiaron de verdad mi forma de pensar y por qué cada uno merece tu tiempo.',
    },
    url: 'blog-5-libros.html',
  },
];

/** Format ISO date string to locale-friendly display */
function formatDate(isoString, lang) {
  const date = new Date(isoString + 'T00:00:00');
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const locale = lang === 'es' ? 'es-AR' : 'en-US';
  return date.toLocaleDateString(locale, options);
}

/** Render blog posts into #blogList */
function renderBlog() {
  const list = document.getElementById('blogList');
  if (!list) return;

  list.innerHTML = BLOG_POSTS.map((post, index) => `
    <a class="blog-item" href="${post.url}" data-aos="fade-up" data-aos-delay="${index * 60}">
      <div class="blog-item__left">
        <div class="blog-item__meta">
          <span class="blog-item__category">${post.category[currentLang]}</span>
          <span class="blog-item__date">${formatDate(post.date, currentLang)}</span>
        </div>
        <h3 class="blog-item__title">${post.title[currentLang]}</h3>
        <p class="blog-item__excerpt">${post.excerpt[currentLang]}</p>
      </div>
      <div class="blog-item__right">
        <span class="blog-item__read-time">
          <i class="fa-regular fa-clock" aria-hidden="true"></i>
          ${post.readTime} ${t('blog.readTime')}
        </span>
        <div class="blog-item__arrow" aria-hidden="true">
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </a>
  `).join('');

  if (window.AOS) AOS.refresh();
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

/**
 * Set to a Formspree / Netlify Forms URL to use real form submission.
 * Set to null to fall back to mailto: only.
 * Example: 'https://formspree.io/f/YOUR_FORM_ID'
 */
const FORM_ENDPOINT = null;

/** The email address that mailto: will send to */
const CONTACT_EMAIL = 'mauri@example.com';

function initContactForm() {
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');
  if (!form || !feedback) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name    = form.name.value.trim();
    const email   = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) return;

    if (FORM_ENDPOINT) {
      try {
        const response = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({ name, email, message }),
        });

        if (response.ok) {
          feedback.textContent = t('contact.success');
          feedback.className = 'form__feedback form__feedback--success';
          form.reset();
        } else {
          throw new Error('Server error');
        }
      } catch {
        feedback.textContent = t('contact.error');
        feedback.className = 'form__feedback form__feedback--error';
      }
    } else {
      // mailto: fallback
      const subject  = encodeURIComponent(`Contact from ${name} via portfolio`);
      const body     = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      window.location.href = mailtoUrl;

      feedback.textContent = t('contact.success');
      feedback.className = 'form__feedback form__feedback--success';
      form.reset();
    }

    setTimeout(() => {
      feedback.textContent = '';
      feedback.className = 'form__feedback';
    }, 5000);
  });
}


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

  // Init contact form if on contact page
  if (detectPage() === 'contact') {
    initContactForm();
  }

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
