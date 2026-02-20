const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav a');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    mainNav.classList.toggle('open');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      mainNav.classList.remove('open');
    });
  });
}

const revealNodes = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: '0px 0px -6% 0px',
    }
  );

  revealNodes.forEach((node, index) => {
    node.style.transitionDelay = `${Math.min(index * 45, 320)}ms`;
    observer.observe(node);
  });
} else {
  revealNodes.forEach((node) => node.classList.add('visible'));
}

const yearNode = document.querySelector('#year');
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const translations = {
  en: {
    meta_title: 'JuanMa Cuevas | Senior Android Engineer & Applied AI Builder',
    meta_description:
      'JuanMa Cuevas - Senior Android Engineer with fintech-grade security experience, shipping AI-enabled product features with production reliability.',
    'ui.open_menu': 'Open menu',
    'ui.language_selector': 'Language selector',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.impact': 'Impact Projects',
    'nav.maker': 'Maker Lab',
    'hero.title': 'Senior Android Engineer.<br /><span>Applied AI Builder</span>.<br />Production-Grade Systems.',
    'hero.lead':
      'I design and deliver robust Android systems for real users in production - from securing banking applications to shipping AI-enabled product features. Over a decade of mobile depth, backend pragmatism, and applied AI engineering, focused on solving high-impact product problems.',
    'hero.cta.github': 'GitHub',
    'hero.cta.contact': 'Get in Touch',
    'ph.secure.title': '<span>#</span> Secure & Robust Engineering',
    'ph.secure.body':
      'With 15+ years in Android development, I have focused intensely on building reliable, secure systems at production scale. At <strong>ABN AMRO</strong>, I contribute to the Security Guild, architecting solutions that protect millions of users and ensure trust in critical financial applications.',
    'ph.secure.li1': 'Deep Android architecture expertise',
    'ph.secure.li2': 'Security-first development (banking-grade)',
    'ph.secure.li3': 'Secure biometric & payment solutions',
    'ph.ai.title': '<span class="orange">#</span> Applied AI & Problem Solver',
    'ph.ai.body':
      'I ship AI-enabled capabilities that improve product outcomes in production, not only in demos. Beyond corporate projects, I tackle real-world problems with practical, rapid technological solutions - from crisis-response tools to widely-used community platforms.',
    'ph.ai.li1': 'AI-enabled product features (LLM, RAG, automation)',
    'ph.ai.li2': 'Full-stack rapid prototyping & deployment',
    'ph.ai.li3': 'Python for data pipelines, scripting & AI tooling',
    'exp.title': 'Professional Journey.',
    'exp.intro': 'Exploring the evolution of mobile and software engineering through key roles.',
    'exp.1.time': '2019 - Present',
    'exp.1.role': 'Senior Android Developer (Security Guild Contributor)',
    'exp.1.body':
      'Architecting and shipping secure Android features for a banking app serving millions of users. Active contributor to the Security Guild - driving security-by-design practices, biometric authentication, and compliance across Android teams.',
    'exp.2.time': '2016 - 2017 (Contract)',
    'exp.2.role': 'Android Lead / Payment Architect',
    'exp.2.body':
      'Led the implementation of fingerprint biometric authentication - one of the first in Dutch banking - and architected secure payment request flows used by millions of customers.',
    'exp.3.time': '2014 - 2015 (Freelance)',
    'exp.3.role': 'Founding Android Engineer',
    'exp.3.body':
      "Built WeTransfer's first native Android app from zero - custom animations, minimal UI, and robust chunked uploads to AWS S3. Established the architecture that shipped v1 to market in a fast-paced startup environment.",
    'exp.4.time': '2010 (Internship)',
    'exp.4.role': 'Android Developer',
    'exp.4.body':
      'First professional Android role: developed performance-optimized UI for early mobile devices, including a complex slot-machine animation for a Heineken campaign. Deep focus on memory optimization and rendering performance.',
    'impact.title': 'Impact Projects: Engineering for the Community.',
    'impact.intro':
      'Concrete outcomes from applying engineering skills to real-world problems - under pressure, at scale, for people who need it.',
    'impact.1.title': 'Bahia Blanca Flood Crisis Map',
    'impact.1.meta': 'Cloudflare Pages/Workers, Maps API, KML | 2024',
    'impact.1.body':
      '<strong>40,000+ users in a single day.</strong> Designed and deployed an incident mapping tool in under 24 hours during a major flood. Provided real-time data on services, power outages, and road blocks. Integrated directly with Argentinian military mapping experts via KML exports for coordinated response.',
    'impact.2.title': 'Santander Bus App',
    'impact.2.meta': 'Bootstrap, Python (Jinja2/App Engine) | 2012-2023',
    'impact.2.body':
      "<strong>800 daily users for 11 years.</strong> Built a full-stack real-time bus information app that replaced the city's broken Flash-based site. Python/Jinja2 backend on Google App Engine, launched with guerrilla marketing (QR codes on bus stops). Became the de facto local resource until the city shipped its own solution.",
    'impact.3.title': 'Spanish Consulate Appointment Scraper & Community Bridge',
    'impact.3.meta': 'Python, WhatsApp, Civic Advocacy | 2021-2023',
    'impact.3.body':
      '<strong>Policy change achieved.</strong> A Python scraper to monitor consulate appointments grew organically into a large WhatsApp community. Led to direct collaboration with the Council of Residents from Spain (CRE) and a formal consultation with the Spanish Consul in Amsterdam - influencing real improvements in bureaucratic processes.',
    'impact.4.title': 'COVID-19 Maker Response (PPE Production)',
    'impact.4.meta': '3D Printing (Fusion 360), Community Collaboration | 2020',
    'impact.4.body':
      '<strong>Mass-produced PPE for healthcare workers.</strong> Joined the Santander maker community during the pandemic to design and 3D-print ear protectors and face shields for medical staff. Parametric modeling in Fusion 360, rapid iteration, and community coordination under urgency.',
    'maker.title': 'The Maker Lab & Life Outside Work.',
    'maker.intro':
      'Beyond product work, I build and experiment with technical hobbies that reinforce precision, long-horizon thinking, and disciplined execution.',
    'maker.1.title': '3D Printing & Parametric Design',
    'maker.1.body':
      'A passion for turning digital ideas into physical objects, mastering parametric modeling with Fusion 360. From practical homelab solutions to contributing to community PPE efforts, I love the tangible aspect of creation.',
    'maker.2.title': 'Linux, Cloud & Homelab Orchestration',
    'maker.2.body':
      'A long-time Linux enthusiast, I enjoy building and maintaining my homelab, delving into containers, cloud solutions, and orchestrating personal systems. It is my playground for continuous learning and practical system architecture.',
    'maker.3.title': 'Telescope Building & Amateur Astronomy',
    'maker.3.body':
      "In Argentina, I built a 115mm Newtonian Dobsonian reflector with a handmade wood tube and mount, inspired by classic Stellafane designs. I use it from the southern hemisphere to observe Jupiter's moons, Saturn's rings, lunar craters, and deep-sky clusters and nebulae.",
    'maker.4.title': 'Drone Piloting',
    'maker.4.body':
      'I recently started flying drones as a way to explore spatial awareness, field planning, and real-world system control. It is a practical hobby that pairs engineering curiosity with disciplined operation.',
    'footer.line': 'Built with pure HTML, CSS and no unnecessary JavaScript.',
  },
  es: {
    meta_title: 'JuanMa Cuevas | Ingeniero Android Senior e IA aplicada',
    meta_description:
      'JuanMa Cuevas — Ingeniero Android Senior con experiencia en seguridad fintech, desarrollando funcionalidades con IA en entornos de producción. Con base en España.',
    'ui.open_menu': 'Abrir menú',
    'ui.language_selector': 'Selector de idioma',
    'nav.about': 'Sobre mí',
    'nav.experience': 'Experiencia',
    'nav.impact': 'Proyectos de impacto',
    'nav.maker': 'Maker Lab',
    'hero.title': 'Ingeniero Android Senior.<br /><span>IA aplicada al producto</span>.<br />Sistemas de producción.',
    'hero.lead':
      'Diseño y entrego sistemas Android robustos para usuarios reales en producción: desde aplicaciones bancarias con requisitos de seguridad exigentes hasta funcionalidades potenciadas con IA. Aporto más de una década de especialización móvil, pragmatismo en backend e ingeniería de IA aplicada, siempre centrado en resolver problemas de producto de alto impacto.',
    'hero.cta.github': 'GitHub',
    'hero.cta.contact': 'Contacto',
    'ph.secure.title': '<span>#</span> Ingeniería segura y robusta',
    'ph.secure.body':
      'Con más de 15 años en desarrollo Android, me he centrado en construir sistemas fiables y seguros a escala de producción. En <strong>ABN AMRO</strong> participo en el Security Guild, diseñando soluciones que protegen a millones de usuarios y garantizan la confianza en aplicaciones financieras críticas.',
    'ph.secure.li1': 'Amplia experiencia en arquitectura Android',
    'ph.secure.li2': 'Desarrollo con seguridad como prioridad (nivel banca)',
    'ph.secure.li3': 'Soluciones de autenticación biométrica y pagos seguros',
    'ph.ai.title': '<span class="orange">#</span> IA aplicada y resolución de problemas',
    'ph.ai.body':
      'Desarrollo funcionalidades con IA que mejoran resultados de producto en producción, no solo en demostraciones. Más allá de proyectos corporativos, afronto problemas reales con soluciones tecnológicas prácticas y rápidas: desde herramientas de respuesta ante emergencias hasta plataformas comunitarias de uso extendido.',
    'ph.ai.li1': 'Funcionalidades con IA en producto (LLM, RAG, automatización)',
    'ph.ai.li2': 'Prototipado y despliegue full stack rápidos',
    'ph.ai.li3': 'Python para procesamiento de datos, scripting y herramientas de IA',
    'exp.title': 'Trayectoria profesional.',
    'exp.intro': 'La evolución de la ingeniería móvil y de software a través de mis roles más relevantes.',
    'exp.1.time': '2019 — Actualidad',
    'exp.1.role': 'Desarrollador Android sénior (Security Guild)',
    'exp.1.body':
      'Diseño y desarrollo de funcionalidades Android seguras en una aplicación bancaria con millones de usuarios. Contribuyo activamente al Security Guild, impulsando prácticas de seguridad desde el diseño, autenticación biométrica y cumplimiento normativo en los equipos Android.',
    'exp.2.time': '2016 — 2017 (Contrato)',
    'exp.2.role': 'Android Lead / Arquitecto de Pagos',
    'exp.2.body':
      'Lideré la implementación de autenticación biométrica por huella dactilar, una de las primeras en la banca holandesa, y diseñé los flujos seguros de solicitud de pago utilizados por millones de clientes.',
    'exp.3.time': '2014 — 2015 (Freelance)',
    'exp.3.role': 'Primer ingeniero Android',
    'exp.3.body':
      'Construí desde cero la primera aplicación nativa Android de WeTransfer: animaciones a medida, interfaz minimalista y subida robusta por segmentos a AWS S3. Definí la arquitectura base que permitió lanzar la v1 en un entorno startup de ritmo intenso.',
    'exp.4.time': '2010 (Prácticas)',
    'exp.4.role': 'Desarrollador Android',
    'exp.4.body':
      'Mi primer rol profesional en Android: desarrollo de interfaces optimizadas para los dispositivos de la época, incluyendo una animación compleja de tragaperras para una campaña de Heineken. Foco en optimización de memoria y rendimiento de renderizado.',
    'impact.title': 'Proyectos de impacto: ingeniería para la comunidad.',
    'impact.intro':
      'Resultados concretos aplicando ingeniería a problemas reales: bajo presión, a escala y para personas que lo necesitaban.',
    'impact.1.title': 'Mapa de crisis por inundaciones en Bahía Blanca',
    'impact.1.meta': 'Cloudflare Pages/Workers, Maps API, KML | 2024',
    'impact.1.body':
      '<strong>Más de 40.000 usuarios en un solo día.</strong> Diseñé y desplegué una herramienta de mapeo de incidencias en menos de 24 horas durante una gran inundación. Información en tiempo real sobre servicios, cortes de luz y carreteras cortadas, con integración KML para coordinación con cartógrafos militares argentinos.',
    'impact.2.title': 'Santander Bus App',
    'impact.2.meta': 'Bootstrap, Python (Jinja2/App Engine) | 2012–2023',
    'impact.2.body':
      '<strong>800 usuarios diarios durante 11 años.</strong> Aplicación full-stack de información de autobuses en tiempo real que sustituyó la obsoleta web municipal en Flash. Backend en Python/Jinja2 sobre Google App Engine, lanzada con marketing de guerrilla (códigos QR en las marquesinas). Fue la referencia local hasta que el Ayuntamiento publicó su propia solución.',
    'impact.3.title': 'Scraper de citas consulares y puente con la comunidad',
    'impact.3.meta': 'Python, WhatsApp, acción cívica | 2021–2023',
    'impact.3.body':
      '<strong>Se consiguió un cambio en la gestión consular.</strong> Un scraper en Python para monitorizar citas del consulado español creció de forma orgánica hasta convertirse en una gran comunidad en WhatsApp. Derivó en colaboración directa con el CRE y una consulta formal con el Cónsul de España en Ámsterdam, logrando mejoras reales en los trámites burocráticos.',
    'impact.4.title': 'Respuesta maker COVID-19 (producción de EPI)',
    'impact.4.meta': 'Impresión 3D (Fusion 360), colaboración comunitaria | 2020',
    'impact.4.body':
      '<strong>Producción a gran escala de EPI para personal sanitario.</strong> Colaboré con la comunidad maker de Santander para diseñar e imprimir en 3D protectores de orejas y pantallas faciales para personal médico. Modelado paramétrico en Fusion 360, iteración rápida y coordinación comunitaria en un contexto de urgencia.',
    'maker.title': 'Maker Lab y vida fuera del trabajo.',
    'maker.intro':
      'Fuera del ámbito profesional, construyo y experimento con aficiones técnicas que refuerzan la precisión, la visión a largo plazo y la ejecución disciplinada.',
    'maker.1.title': 'Impresión 3D y diseño paramétrico',
    'maker.1.body':
      'Me apasiona convertir ideas digitales en objetos físicos, dominando el modelado paramétrico con Fusion 360. Desde soluciones prácticas para el homelab hasta contribuciones en proyectos comunitarios de fabricación de EPI.',
    'maker.2.title': 'Linux, nube y orquestación del homelab',
    'maker.2.body':
      'Entusiasta de Linux desde hace años. Disfruto montando y manteniendo mi homelab, experimentando con contenedores, soluciones en la nube y orquestación de sistemas propios como entorno permanente de aprendizaje.',
    'maker.3.title': 'Construcción de telescopio y astronomía amateur',
    'maker.3.body':
      'En Argentina construí un telescopio reflector newtoniano dobsoniano de 115 mm con tubo y montura de madera, inspirado en los diseños clásicos de Stellafane. Desde el hemisferio sur he podido observar las lunas de Júpiter, los anillos de Saturno, cráteres lunares y diversos cúmulos y nebulosas.',
    'maker.4.title': 'Pilotaje de drones',
    'maker.4.body':
      'Hace poco empecé a volar drones para trabajar la percepción espacial, la planificación de campo y el control de sistemas en condiciones reales. Una afición práctica que combina curiosidad técnica con operación disciplinada.',
    'footer.line': 'Construido con HTML y CSS puro, sin JavaScript innecesario.',
  },
};

const supportedLangs = ['en', 'es'];
const langButtons = document.querySelectorAll('.lang-btn');
const langSwitch = document.querySelector('.lang-switch');

function getInitialLang() {
  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get('lang');
  if (supportedLangs.includes(urlLang)) {
    return urlLang;
  }

  const storedLang = localStorage.getItem('site_lang');
  if (supportedLangs.includes(storedLang)) {
    return storedLang;
  }

  const browserLang = (navigator.language || '').toLowerCase();
  if (browserLang.startsWith('es')) {
    return 'es';
  }

  return 'en';
}

function applyLanguage(lang, persist = true) {
  const dictionary = translations[lang] || translations.en;

  document.documentElement.lang = lang;

  if (dictionary.meta_title) {
    document.title = dictionary.meta_title;
  }

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription && dictionary.meta_description) {
    metaDescription.setAttribute('content', dictionary.meta_description);
  }

  if (menuToggle && dictionary['ui.open_menu']) {
    menuToggle.setAttribute('aria-label', dictionary['ui.open_menu']);
  }

  if (langSwitch && dictionary['ui.language_selector']) {
    langSwitch.setAttribute('aria-label', dictionary['ui.language_selector']);
  }

  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n;
    const value = dictionary[key];
    if (typeof value === 'string') {
      node.textContent = value;
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach((node) => {
    const key = node.dataset.i18nHtml;
    const value = dictionary[key];
    if (typeof value === 'string') {
      node.innerHTML = value;
    }
  });

  langButtons.forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  if (persist) {
    localStorage.setItem('site_lang', lang);
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    window.history.replaceState({}, '', url);
  }
}

langButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedLang = button.dataset.lang;
    if (!supportedLangs.includes(selectedLang)) {
      return;
    }
    applyLanguage(selectedLang, true);
  });
});

applyLanguage(getInitialLang(), false);
