/* OLIVER LUGO — Front-end estático */
(function () {
  const config = window.SITE_CONFIG || {};
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

  const get = (path, fallback = "") => path.split(".").reduce((obj, key) => (obj && obj[key] !== undefined ? obj[key] : undefined), config) ?? fallback;

  function setCSSVariables() {
    if (!config.colors) return;
    const root = document.documentElement;
    Object.entries(config.colors).forEach(([key, value]) => {
      const cssKey = key === "background" ? "bg" : key;
      root.style.setProperty(`--${cssKey}`, value);
    });
  }

  function bindText() {
    $$('[data-bind]').forEach((el) => {
      const value = get(el.dataset.bind, el.textContent);
      if (el.tagName === 'IMG') el.src = value;
      else if (el.tagName === 'A' && el.dataset.attr === 'href') el.href = value;
      else el.textContent = value;
    });

    $$('[data-whatsapp]').forEach((el) => {
      const message = encodeURIComponent(el.dataset.message || `Hola, quiero una propuesta de diseño con ${get('brand.name')}.`);
      el.href = `https://wa.me/${get('brand.whatsapp')}?text=${message}`;
      el.target = '_blank';
      el.rel = 'noopener noreferrer';
    });
  }

  function renderNav() {
    const navMount = $('[data-nav]');
    if (!navMount) return;
    const current = location.pathname.split('/').pop() || 'index.html';
    const navItems = (config.navigation || []).map(item => `<a href="${item.href}" class="${item.href === current ? 'active' : ''}">${item.label}</a>`).join('');
    navMount.innerHTML = `
      <header class="header">
        <div class="container nav">
          <a class="brand" href="index.html" aria-label="Volver al inicio">
            <img class="brand-logo" src="${get('brand.logo')}" alt="Logo ${get('brand.name')}">
            <span class="brand-text"><span class="brand-name">${get('brand.name')}</span><span class="brand-studio">Design Studio</span></span>
          </a>
          <nav class="nav-links" id="mainNav" aria-label="Navegación principal">${navItems}</nav>
          <div class="nav-cta">
            <a class="btn small primary" data-whatsapp data-message="Hola Oliver, quiero solicitar una propuesta de diseño gráfico.">${get('brand.primaryCTA')}</a>
            <button class="mobile-toggle" type="button" aria-label="Abrir menú" aria-expanded="false" aria-controls="mainNav"><span></span></button>
          </div>
        </div>
      </header>`;

    const toggle = $('.mobile-toggle', navMount);
    const links = $('.nav-links', navMount);
    toggle?.addEventListener('click', () => {
      const open = links.classList.toggle('is-open');
      toggle.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  function renderFooter() {
    const mount = $('[data-footer]');
    if (!mount) return;
    const navItems = (config.navigation || []).map(item => `<a href="${item.href}">${item.label}</a>`).join('');
    mount.innerHTML = `
      <footer class="footer">
        <div class="container">
          <div class="footer-grid">
            <div>
              <a class="brand" href="index.html">
                <img class="brand-logo" src="${get('brand.logo')}" alt="Logo ${get('brand.name')}">
                <span class="brand-text"><span class="brand-name">${get('brand.name')}</span><span class="brand-studio">Design Studio</span></span>
              </a>
              <p class="text-muted" style="max-width:520px;margin:18px 0 0;line-height:1.6">${get('brand.footerNote')}</p>
            </div>
            <nav class="footer-links" aria-label="Navegación secundaria">${navItems}</nav>
          </div>
          <div class="footer-bottom">
            <span>© <span id="year"></span> ${get('brand.legalName')}. Todos los derechos reservados.</span>
            <span>${get('brand.location')} · <a href="mailto:${get('brand.email')}">${get('brand.email')}</a></span>
          </div>
        </div>
      </footer>`;
    $('#year', mount).textContent = new Date().getFullYear();
  }

  function renderStats() {
    const mount = $('[data-stats]');
    if (!mount) return;
    mount.innerHTML = (config.stats || []).map(item => `
      <div class="stat-card reveal"><strong data-counter="${item.value}">${item.value}</strong><span>${item.label}</span></div>
    `).join('');
  }

  function renderPortfolio(target = '[data-portfolio]', limit = null) {
    const mount = $(target);
    if (!mount) return;
    const items = limit ? (config.portfolio || []).slice(0, limit) : (config.portfolio || []);
    const isStrip = mount.classList.contains('work-strip');
    mount.innerHTML = items.map(item => isStrip ? `
      <article class="work-card reveal">
        <img src="${item.image}" alt="${item.title}">
        <div class="work-meta"><span>${item.type}</span><h3>${item.title}</h3></div>
      </article>
    ` : `
      <article class="portfolio-item reveal">
        <img src="${item.image}" alt="${item.title}">
        <div class="portfolio-overlay"><span>${item.type}</span><h3>${item.title}</h3></div>
      </article>
    `).join('');
  }

  function renderServices(target = '[data-services]', detailed = false) {
    const mount = $(target);
    if (!mount) return;
    mount.innerHTML = (config.services || []).map(service => detailed ? `
      <article class="card service-detail reveal" id="${service.slug}">
        <img src="${service.image}" alt="${service.title}">
        <div>
          <span class="pill">${service.category}</span>
          <h2>${service.title}</h2>
          <p>${service.description}</p>
          <div class="deliverables">${service.deliverables.map(x => `<span>${x}</span>`).join('')}</div>
          <div style="margin-top:24px"><a class="btn primary" data-whatsapp data-message="Hola Oliver, quiero información sobre el servicio: ${service.title}.">Solicitar este servicio</a></div>
        </div>
      </article>
    ` : `
      <article class="card card-pad service-card reveal">
        <div>
          <div class="service-top"><div class="service-icon">${service.icon}</div><span class="pill">${service.category}</span></div>
          <h3>${service.title}</h3>
          <p>${service.description}</p>
          <div class="deliverables">${service.deliverables.slice(0,4).map(x => `<span>${x}</span>`).join('')}</div>
        </div>
        <div style="margin-top:26px"><a class="btn secondary full" href="servicios.html#${service.slug}">Ver detalle</a></div>
      </article>
    `).join('');
  }

  function renderPackages() {
    const mount = $('[data-packages]');
    if (!mount) return;
    mount.innerHTML = (config.packages || []).map(pkg => `
      <article class="card package-card reveal ${pkg.featured ? 'featured' : ''}">
        <span class="package-tag">${pkg.tag}</span>
        <h3>${pkg.name}</h3>
        <div class="price">${pkg.price}</div>
        <p>${pkg.description}</p>
        <ul class="feature-list">${pkg.features.map(x => `<li>${x}</li>`).join('')}</ul>
        <a class="btn ${pkg.featured ? 'primary' : 'secondary'} full" data-whatsapp data-message="Hola Oliver, quiero información del paquete ${pkg.name}.">${pkg.cta}</a>
      </article>
    `).join('');
  }

  function renderProcess() {
    const mount = $('[data-process]');
    if (!mount) return;
    mount.innerHTML = (config.process || []).map(item => `
      <article class="card process-card reveal" data-step="${item.step}">
        <h3>${item.title}</h3><p>${item.text}</p>
      </article>
    `).join('');
  }

  function renderBonuses() {
    const mount = $('[data-bonuses]');
    if (!mount) return;
    mount.innerHTML = (config.bonuses || []).map(item => `
      <article class="card bonus-card reveal"><strong>${item.value}</strong><h3>${item.title}</h3><p>${item.text}</p></article>
    `).join('');
  }

  function renderTestimonials() {
    const mount = $('[data-testimonials]');
    if (!mount) return;
    mount.innerHTML = (config.testimonials || []).map(item => `
      <article class="card quote-card reveal"><p class="quote">“${item.quote}”</p><strong>${item.name}</strong><span>${item.role}</span></article>
    `).join('');
  }

  function renderFaq() {
    const mount = $('[data-faq]');
    if (!mount) return;
    mount.innerHTML = (config.faqs || []).map((item, i) => `
      <article class="faq-item reveal ${i === 0 ? 'is-open' : ''}">
        <button class="faq-q" type="button">${item.q}<span>+</span></button>
        <div class="faq-a"><p>${item.a}</p></div>
      </article>
    `).join('');
    $$('.faq-q', mount).forEach(btn => btn.addEventListener('click', () => {
      btn.closest('.faq-item').classList.toggle('is-open');
    }));
  }

  function renderPain() {
    const mount = $('[data-pain-cards]');
    if (!mount) return;
    mount.innerHTML = (get('pain.cards', []) || []).map(item => `
      <article class="problem-card reveal"><h3>${item.title}</h3><p>${item.text}</p></article>
    `).join('');
  }

  function renderContactInfo() {
    const mount = $('[data-contact-info]');
    if (!mount) return;
    mount.innerHTML = `
      <li><strong>WhatsApp</strong><span>${get('brand.phone')}</span></li>
      <li><strong>Email</strong><span>${get('brand.email')}</span></li>
      <li><strong>Ubicación</strong><span>${get('brand.location')}</span></li>
      <li><strong>Instagram</strong><span>@${(get('brand.instagram').split('/').filter(Boolean).pop() || 'oliverlugo.design')}</span></li>
    `;
  }

  function setupContactForm() {
    const form = $('[data-contact-form]');
    if (!form) return;
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const lines = [
        `Hola Oliver, quiero solicitar una propuesta.`,
        `Nombre: ${data.get('name') || ''}`,
        `Email: ${data.get('email') || ''}`,
        `Servicio: ${data.get('service') || ''}`,
        `Presupuesto: ${data.get('budget') || ''}`,
        `Mensaje: ${data.get('message') || ''}`
      ];
      const url = `https://wa.me/${get('brand.whatsapp')}?text=${encodeURIComponent(lines.join('\n'))}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  }

  function setupScroll() {
    const progress = $('.progress-bar');
    const glow = $('.cursor-glow');
    const updateProgress = () => {
      if (!progress) return;
      const max = document.documentElement.scrollHeight - innerHeight;
      progress.style.width = `${Math.max(0, Math.min(100, (scrollY / max) * 100))}%`;
    };
    updateProgress();
    addEventListener('scroll', updateProgress, { passive: true });

    if (glow && matchMedia('(pointer:fine)').matches) {
      addEventListener('pointermove', (e) => {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
      }, { passive: true });
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    $$('.reveal').forEach(el => observer.observe(el));
  }

  function setupTilt() {
    if (!matchMedia('(pointer:fine)').matches) return;
    $$('.card, .hero-card, .portfolio-item').forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rx = ((y / rect.height) - .5) * -4;
        const ry = ((x / rect.width) - .5) * 4;
        card.style.transform = `translateY(-4px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      });
      card.addEventListener('mouseleave', () => card.style.transform = '');
    });
  }

  function setupMarquee() {
    $$('[data-marquee]').forEach(mount => {
      const items = (mount.dataset.items || 'Branding,Packaging,Creativos,Landing Pages,Dirección Visual,IA aplicada').split(',');
      const html = [...items, ...items].map(x => `<span>${x.trim()}</span>`).join('');
      mount.innerHTML = `<div class="marquee">${html}</div>`;
    });
  }

  function init() {
    setCSSVariables();
    renderNav();
    renderFooter();
    bindText();
    renderStats();
    renderPortfolio('[data-portfolio]', $('[data-portfolio]')?.dataset.limit ? Number($('[data-portfolio]').dataset.limit) : null);
    renderServices('[data-services]', $('[data-services]')?.dataset.detailed === 'true');
    renderPackages();
    renderProcess();
    renderBonuses();
    renderTestimonials();
    renderFaq();
    renderPain();
    renderContactInfo();
    setupContactForm();
    setupMarquee();
    bindText();
    setupScroll();
    setupTilt();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
