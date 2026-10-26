(() => {
  const cfg = window.NEXCODE;
  const $ = (selector, root = document) => root.querySelector(selector);
  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  const link = (label, href, className = 'text-link') => {
    const a = el('a', className, label);
    a.href = href;
    return a;
  };
  const heroArt = $('.hero-art');
  const heroCards = heroArt?.querySelectorAll('.device-card, .window-back');
  if (heroArt && heroCards?.length) {
    const exchangeCards = () => {
      const swapped = heroArt.classList.toggle('is-swapped');
      heroCards.forEach((card) => card.setAttribute('aria-pressed', String(swapped)));
    };
    heroCards.forEach((card) => {
      card.addEventListener('click', exchangeCards);
      card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          exchangeCards();
        }
      });
    });
  }
  const serviceGrid = $('#service-grid');
  cfg.services.forEach((s, i) => {
    const article = el('article', `service-card service-${s.id}`);
    const picture = el('div', 'service-image');
    const img = el('img');
    img.src = s.image;
    img.alt = s.imageAlt || `${s.name} — Nexcode`;
    img.loading = 'lazy';
    picture.append(img);
    const content = el('div', 'service-content'),
      meta = el('div', 'service-meta');
    meta.append(el('span', '', `0${i + 1}`), el('span', '', s.category));
    const title = el('h3', '', s.name),
      desc = el('p', '', s.description),
      details = document.createElement('details'),
      summary = document.createElement('summary');
    summary.append(document.createTextNode('Qué puede incluir '), el('span', '', '+'));
    details.append(summary);
    const detailContent = el('div', 'service-details');
    const challenge = el('p');
    challenge.append(
      el('strong', '', 'El reto'),
      document.createElement('br'),
      document.createTextNode(s.problem),
    );
    detailContent.append(challenge, el('p', '', 'Beneficios'));
    const benefits = document.createElement('ul');
    (s.benefits || []).forEach((x) => benefits.append(el('li', '', x)));
    detailContent.append(benefits, el('p', '', 'Entregables posibles'));
    const deliverables = document.createElement('ul');
    (s.deliverables || []).forEach((x) => deliverables.append(el('li', '', x)));
    detailContent.append(deliverables);
    details.append(detailContent);
    content.append(meta, title, desc, details, link('Consultar este servicio →', '#contacto'));
    article.append(picture, content);
    serviceGrid.append(article);
  });

  const projectFilters = $('#project-filters');
  const categories = [
    ['all', 'Todos'],
    ['web', 'Páginas web'],
    ['mobile', 'Aplicaciones móviles'],
    ['systems', 'Sistemas web'],
    ['backend', 'Backend y APIs'],
    ['prototype', 'Prototipos'],
    ['other', 'Otros'],
  ];
  let selectedCategory = 'all';
  const emptyProjects = $('#empty-projects'),
    projectList = $('#project-list');
  const renderProjects = () => {
    projectList.replaceChildren();
    const projects = cfg.projects || [];
    const visible = projects.filter(
      (p) => selectedCategory === 'all' || p.category === selectedCategory,
    );
    emptyProjects.hidden = projects.length > 0 && visible.length > 0;
    if (projects.length > 0 && visible.length === 0) {
      emptyProjects.hidden = false;
      $('.eyebrow', emptyProjects).textContent = 'Sin coincidencias';
      $('h3', emptyProjects).textContent = 'No hay proyectos en esta categoría.';
      $('p:not(.eyebrow)', emptyProjects).textContent =
        'Prueba con otra categoría para ver más trabajos.';
      $('.text-link', emptyProjects).hidden = true;
      return;
    }
    if (projects.length === 0) {
      $('.eyebrow', emptyProjects).textContent = 'Portafolio en preparación';
      $('h3', emptyProjects).textContent = 'Estamos preparando lo que viene.';
      $('p:not(.eyebrow)', emptyProjects).textContent =
        'Pronto encontrarás aquí proyectos, procesos y soluciones construidas por Nexcode. Mientras tanto, cuéntanos qué quieres crear.';
      $('.text-link', emptyProjects).hidden = false;
      return;
    }
    visible.forEach((p) => {
      const card = el('article', 'project-card');
      if (p.image) {
        const cover = el('div', 'project-cover'),
          img = el('img');
        img.src = p.image;
        img.alt = p.imageAlt || `Captura de ${p.name}`;
        img.loading = 'lazy';
        cover.append(img);
        card.append(cover);
      }
      const body = el('div', 'project-card-body'),
        meta = el('div', 'service-meta');
      meta.append(
        el('span', '', p.status || p.type || 'Proyecto'),
        el('span', '', p.categoryLabel || categoryLabel(p.category)),
      );
      body.append(meta, el('h3', '', p.name), el('p', '', p.summary || p.description || ''));
      if (p.technologies?.length) {
        const tags = el('div', 'project-tags');
        p.technologies.forEach((t) => tags.append(el('span', '', t)));
        body.append(tags);
      }
      body.append(link('Ver proyecto →', `project.html?id=${encodeURIComponent(p.id)}`));
      card.append(body);
      projectList.append(card);
    });
  };
  const categoryLabel = (id) => categories.find((x) => x[0] === id)?.[1] || 'Proyecto';
  categories.forEach(([id, label], i) => {
    const b = el('button', 'filter-chip' + (!i ? ' active' : ''), label);
    b.type = 'button';
    b.setAttribute('aria-pressed', String(!i));
    b.addEventListener('click', () => {
      selectedCategory = id;
      projectFilters.querySelectorAll('button').forEach((q) => {
        q.classList.remove('active');
        q.setAttribute('aria-pressed', 'false');
      });
      b.classList.add('active');
      b.setAttribute('aria-pressed', 'true');
      renderProjects();
    });
    projectFilters.append(b);
  });
  renderProjects();

  const teamGrid = $('#team-grid'),
    teamPlaceholder = $('#team-placeholder');
  (cfg.team || []).forEach((person) => {
    const card = el('article', 'team-card');
    if (person.photo) {
      const avatarWrap = el('div', 'team-avatar-wrap');
      const img = el('img', 'team-photo');
      img.src = person.photo;
      img.alt = person.name ? `Fotografía de ${person.name}` : 'Fotografía del equipo Nexcode';
      img.loading = 'lazy';
      avatarWrap.append(img);
      card.append(avatarWrap);
    }
    const body = el('div', 'team-card-body');
    const header = el('div', 'team-card-header');
    header.append(
      el('p', 'eyebrow', person.role || person.specialty || 'Equipo Nexcode'),
      el('h3', '', person.name),
    );

    const socials = el('div', 'team-links');
    for (const [label, url] of [
      ['LinkedIn', person.linkedin],
      ['Perfil', person.website],
    ])
      if (url) socials.append(link(label, url, 'small-link'));
    if (socials.childElementCount) header.append(socials);
    body.append(header);

    const bios = Array.isArray(person.bio)
      ? person.bio
      : (person.bio || '').split('\n\n').filter(Boolean);
    bios.forEach((b) => body.append(el('p', '', b)));

    if (person.areas?.length) {
      body.append(el('p', 'eyebrow', 'Áreas de desarrollo'));
      const areaTags = el('div', 'project-tags');
      person.areas.forEach((a) => areaTags.append(el('span', '', a)));
      body.append(areaTags);
    }

    if (person.stack) {
      body.append(el('p', 'eyebrow', 'Stack tecnológico'));
      Object.entries(person.stack).forEach(([category, items]) => {
        const group = el('div', 'team-stack-group');
        group.append(el('small', 'team-stack-label', category));
        const tags = el('div', 'project-tags');
        items.forEach((t) => tags.append(el('span', '', t)));
        group.append(tags);
        body.append(group);
      });
    } else if (person.technologies?.length) {
      body.append(el('p', 'eyebrow', 'Stack tecnológico'));
      const tags = el('div', 'project-tags');
      person.technologies.forEach((t) => tags.append(el('span', '', t)));
      body.append(tags);
    }

    card.append(body);
    teamGrid.append(card);
  });
  if (teamPlaceholder) teamPlaceholder.hidden = (cfg.team || []).length > 0;

  const technologyGrid = $('#technology-grid'),
    techFilters = $('#tech-filters'),
    techEmpty = $('#tech-empty'),
    techMore = $('#tech-more');
  const techCats = [
    'all',
    ...new Set((cfg.technologies || []).map((technology) => technology.category).filter(Boolean)),
  ];
  let selectedTech = 'all';
  let showAllTech = false;
  const mobileTech = window.matchMedia('(max-width: 620px)');
  const renderTech = () => {
    technologyGrid.replaceChildren();
    const items = (cfg.technologies || []).filter(
      (t) => selectedTech === 'all' || t.category === selectedTech,
    );
    if (techEmpty) techEmpty.hidden = items.length > 0;
    const visibleItems = showAllTech ? items : items.slice(0, 6);
    if (techMore) {
      techMore.hidden = items.length <= 6;
      techMore.textContent = showAllTech
        ? 'Mostrar menos tecnologías'
        : `Ver todas las tecnologías (${items.length})`;
      techMore.setAttribute('aria-expanded', String(showAllTech));
    }
    visibleItems.forEach((t) => {
      const card = el('article', 'technology-card');
      const symbol = el('span', 'technology-symbol');
      if (t.icon) {
        const icon = el('img', 'technology-icon');
        icon.src = t.icon;
        icon.alt = `${t.name} logo`;
        icon.loading = 'lazy';
        symbol.classList.add('has-icon');
        symbol.append(icon);
      } else {
        symbol.textContent = t.symbol || '{ }';
      }
      card.append(
        symbol,
        el('div', '', t.category || ''),
        el('h3', '', t.name),
        el('p', '', t.description || ''),
      );
      if (t.projects?.length) card.append(el('small', '', `Proyectos: ${t.projects.join(', ')}`));
      technologyGrid.append(card);
    });
  };
  techCats.forEach((name, i) => {
    const label = i === 0 ? 'Todas' : name;
    const b = el('button', 'tech-filter' + (!i ? ' active' : ''), label);
    b.type = 'button';
    b.setAttribute('aria-pressed', String(!i));
    b.addEventListener('click', () => {
      selectedTech = i === 0 ? 'all' : name;
      showAllTech = false;
      techFilters.querySelectorAll('button').forEach((q) => {
        q.classList.remove('active');
        q.setAttribute('aria-pressed', 'false');
      });
      b.classList.add('active');
      b.setAttribute('aria-pressed', 'true');
      renderTech();
    });
    techFilters.append(b);
  });
  techMore?.addEventListener('click', () => {
    showAllTech = !showAllTech;
    renderTech();
  });
  const resetTechExpansion = () => {
    showAllTech = false;
    renderTech();
  };
  mobileTech.addEventListener('change', resetTechExpansion);
  renderTech();

  const faq = $('#faq-list');
  cfg.faqs.forEach(([q, a]) => {
    const d = document.createElement('details');
    d.className = 'faq-item';
    const summary = document.createElement('summary');
    summary.append(document.createTextNode(q), el('span', '', '+'));
    d.append(summary, el('p', '', a));
    faq.append(d);
  });
  const contactLinks = $('#contact-links'),
    contact = cfg.contact || {};
  let hasContact = false;
  if (contact.email) {
    contactLinks.append(link('Correo', `mailto:${contact.email}`, 'small-link'));
    hasContact = true;
  }
  if (contact.whatsapp) {
    const number = contact.whatsapp.replace(/\D/g, '');
    if (number) {
      const href = `https://wa.me/${number}?text=${encodeURIComponent('Hola Nexcode, quiero conversar sobre un proyecto.')}`;
      const a = link('WhatsApp', href, 'small-link');
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      contactLinks.append(a);
      hasContact = true;
    }
  }
  for (const [label, key] of [
    ['LinkedIn', 'linkedin'],
    ['GitHub', 'github'],
  ])
    if (contact[key]) {
      const a = link(label, contact[key], 'small-link');
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      contactLinks.append(a);
      hasContact = true;
    }
  if (hasContact) $('#contact-status').textContent = 'Elige el canal que te resulte más cómodo.';
  const socialLinks = $('#social-links');
  const socialIconPaths = {
    github:
      'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
    instagram:
      'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 2.5A5.5 5.5 0 1 1 6.5 12 5.5 5.5 0 0 1 12 6.5Zm0 2A3.5 3.5 0 1 0 15.5 12 3.5 3.5 0 0 0 12 8.5Zm6-3.25a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 18 5.25Z',
    tiktok:
      'M14 2h2.6c.3 2.6 1.8 4.4 4.4 4.9V9.5a7.6 7.6 0 0 1-4.4-1.4v7.3a5.4 5.4 0 1 1-5.4-5.4c.4 0 .8 0 1.2.1v2.7a2.7 2.7 0 1 0 1.6 2.5V2Z',
    mail: 'M2 4h20v16H2V4zm10 8L4 6v12h16V6l-8 6zm0-2 7-4H5l7 4z',
  };
  (cfg.socials || []).forEach(({ name, url, icon }) => {
    if (!name || !url || !socialIconPaths[icon]) return;
    const anchor = link('', url, 'footer-social-link');
    anchor.setAttribute('aria-label', `${name} de Nexcode`);
    anchor.title = name;
    if (/^https:\/\//i.test(url)) {
      anchor.target = '_blank';
      anchor.rel = 'noopener noreferrer';
    }
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('aria-hidden', 'true');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', socialIconPaths[icon]);
    if (icon === 'instagram') path.setAttribute('fill-rule', 'evenodd');
    svg.append(path);
    anchor.append(svg, el('span', '', name));
    socialLinks.append(anchor);
  });
  $('#year').textContent = new Date().getFullYear();
  const themeButton = $('.theme-toggle'),
    saved = localStorage.getItem('nexcode-theme');
  if (saved === 'light') document.documentElement.dataset.theme = 'light';
  const setThemeLabel = () =>
    themeButton.setAttribute(
      'aria-label',
      document.documentElement.dataset.theme === 'light'
        ? 'Cambiar a tema oscuro'
        : 'Cambiar a tema claro',
    );
  const syncBrandLogo = () =>
    document.querySelectorAll('[data-logo-dark]').forEach((img) => {
      img.src =
        document.documentElement.dataset.theme === 'light'
          ? img.dataset.logoLight
          : img.dataset.logoDark;
    });
  setThemeLabel();
  syncBrandLogo();
  themeButton.addEventListener('click', () => {
    const light = document.documentElement.dataset.theme !== 'light';
    document.documentElement.dataset.theme = light ? 'light' : 'dark';
    localStorage.setItem('nexcode-theme', light ? 'light' : 'dark');
    setThemeLabel();
    syncBrandLogo();
  });
  const toggle = $('.menu-toggle'),
    nav = $('#primary-nav');
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    nav.classList.toggle('open', open);
  });
  nav.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menú');
      nav.classList.remove('open');
    }),
  );
  const form = $('#contact-form'),
    status = $('.form-status');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    form.querySelectorAll('.field-error').forEach((x) => (x.textContent = ''));
    let invalid = false;
    for (const input of form.querySelectorAll(
      'input[required],select[required],textarea[required]',
    )) {
      if (!input.checkValidity()) {
        invalid = true;
        const msg =
          input.type === 'checkbox'
            ? 'Debes aceptar para enviar la consulta.'
            : input.validity.typeMismatch
              ? 'Ingresa un correo válido.'
              : 'Completa este campo.';
        input.parentElement
          .querySelector('.field-error')
          ?.replaceChildren(document.createTextNode(msg));
        input.setAttribute('aria-invalid', 'true');
      } else input.removeAttribute('aria-invalid');
    }
    if (invalid) {
      status.textContent = 'Revisa los campos marcados e inténtalo de nuevo.';
      return;
    }
    if (!contact.endpoint) {
      status.textContent =
        'La consulta no se envió porque el servicio de recepción no está configurado. Tus datos no se han transmitido.';
      return;
    }
    const button = form.querySelector('button[type=submit]');
    button.disabled = true;
    status.textContent = 'Enviando…';
    try {
      const response = await fetch(contact.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(result.error || 'No se pudo enviar la consulta. Inténtalo más tarde.');
      }
      form.reset();
      status.textContent = 'Consulta recibida. Gracias por escribirnos.';
    } catch (error) {
      status.textContent = error.message || 'No se pudo enviar la consulta. Inténtalo más tarde.';
    } finally {
      button.disabled = false;
    }
  });
  form.querySelectorAll('input,select,textarea').forEach((input) =>
    input.addEventListener('input', () => {
      input.removeAttribute('aria-invalid');
      input.parentElement.querySelector('.field-error')?.replaceChildren();
    }),
  );

  // Small navigation improvements shared by the whole landing page.
  const header = $('.site-header');
  const progress = el('div', 'site-progress');
  progress.setAttribute('aria-hidden', 'true');
  header.append(progress);

  const ambient = el('div', 'page-ambient');
  ambient.setAttribute('aria-hidden', 'true');
  document.body.prepend(ambient);

  const scrollTop = el('button', 'scroll-top', '↑');
  scrollTop.type = 'button';
  scrollTop.setAttribute('aria-label', 'Volver al inicio');
  document.body.append(scrollTop);
  scrollTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  const navLinks = [...nav.querySelectorAll('a[href^="#"]')];
  const sections = navLinks
    .map((item) => document.querySelector(item.getAttribute('href')))
    .filter(Boolean);
  const setActiveLink = (section) => {
    navLinks.forEach((item) => {
      const active = item.getAttribute('href') === `#${section.id}`;
      item.classList.toggle('is-active', active);
      if (active) item.setAttribute('aria-current', 'page');
      else item.removeAttribute('aria-current');
    });
  };

  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveLink(visible.target);
      },
      { rootMargin: '-28% 0px -62%', threshold: [0.05, 0.25, 0.5] },
    );
    sections.forEach((section) => sectionObserver.observe(section));

    const revealItems = [...document.querySelectorAll('.section-block, .intro-strip')];
    revealItems.forEach((item) => item.classList.add('reveal-item'));
    const revealObserver = new IntersectionObserver(
      (entries, observer) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }),
      { threshold: 0.08 },
    );
    revealItems.forEach((item) => revealObserver.observe(item));
  } else sections.slice(0, 1).forEach(setActiveLink);

  const syncScrollState = () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${maxScroll > 0 ? window.scrollY / maxScroll : 0})`;
    header.classList.toggle('is-scrolled', window.scrollY > 12);
    scrollTop.classList.toggle('is-visible', window.scrollY > 700);
    const mobileContactCta = $('.mobile-contact-cta');
    if (mobileContactCta) {
      const reachedContact =
        window.scrollY + window.innerHeight * 0.72 >= $('#contacto').offsetTop;
      mobileContactCta.classList.toggle('is-hidden', reachedContact);
      mobileContactCta.setAttribute('aria-hidden', String(reachedContact));
      mobileContactCta.tabIndex = reachedContact ? -1 : 0;
    }
  };
  window.addEventListener('scroll', syncScrollState, { passive: true });
  syncScrollState();
})();
