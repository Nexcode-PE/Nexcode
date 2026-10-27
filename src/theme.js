(() => {
  const root = document.documentElement;
  const themePreference = window.matchMedia('(prefers-color-scheme: light)');
  const readSavedTheme = () => {
    try {
      const saved = localStorage.getItem('nexcode-theme');
      return saved === 'light' || saved === 'dark' ? saved : null;
    } catch {
      return null;
    }
  };

  const syncButtons = () => {
    const isLight = root.dataset.theme === 'light';
    document.querySelectorAll('.theme-toggle').forEach((button) => {
      const label = isLight ? 'Cambiar a tema oscuro' : 'Cambiar a tema claro';
      button.setAttribute('aria-label', label);
      button.setAttribute('title', label);
      const icon = button.querySelector('.theme-toggle-icon');
      if (icon) icon.textContent = isLight ? '☾' : '☼';
    });
    document.querySelectorAll('[data-logo-dark]').forEach((image) => {
      image.src = isLight ? image.dataset.logoLight : image.dataset.logoDark;
    });
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.content = isLight ? '#f8fafc' : '#0b1120';
  };

  const applyTheme = (theme) => {
    root.dataset.theme = theme;
    syncButtons();
  };

  applyTheme(
    readSavedTheme() || (themePreference.matches ? 'light' : 'dark'),
  );

  document.querySelectorAll('.theme-toggle').forEach((button) => {
    button.addEventListener('click', () => {
      const nextTheme = root.dataset.theme === 'light' ? 'dark' : 'light';
      try {
        localStorage.setItem('nexcode-theme', nextTheme);
      } catch {
        // The toggle still works for this page if storage is unavailable.
      }
      applyTheme(nextTheme);
    });
  });

  themePreference.addEventListener('change', (event) => {
    if (!readSavedTheme()) applyTheme(event.matches ? 'light' : 'dark');
  });

  const whatsappNumber = (window.NEXCODE?.contact?.whatsapp || '').replace(/\D/g, '');
  if (whatsappNumber && document.body) {
    const whatsapp = document.createElement('a');
    whatsapp.className = 'whatsapp-float';
    whatsapp.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hola Nexcode, quiero conversar sobre un proyecto.')}`;
    whatsapp.target = '_blank';
    whatsapp.rel = 'noopener noreferrer';
    whatsapp.setAttribute('aria-label', 'Escríbenos por WhatsApp');
    whatsapp.title = 'Escríbenos por WhatsApp';
    whatsapp.innerHTML = '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3.1a12.7 12.7 0 0 0-10.9 19.2L3.4 28.9l6.8-1.8A12.7 12.7 0 1 0 16 3.1Zm0 2.2a10.5 10.5 0 0 1 0 21c-1.7 0-3.3-.4-4.8-1.2l-.7-.4-4.1 1.1 1.1-4-.5-.7A10.5 10.5 0 0 1 16 5.3Zm-4.1 4.5c-.3 0-.7.1-1 .5-.3.3-1.2 1.2-1.2 2.9s1.2 3.4 1.4 3.6c.2.2 2.4 3.9 6 5.2 3 .9 3.6.7 4.2.7.6-.1 1.9-.8 2.2-1.6.3-.8.3-1.4.2-1.6-.1-.1-.3-.2-.7-.4l-2.1-1c-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.3-.7.1-.4-.2-1.5-.5-2.8-1.7-1-.9-1.7-2-1.9-2.3-.2-.4 0-.5.2-.7l.5-.6.3-.5c.1-.2 0-.4 0-.6l-1-2.4c-.2-.5-.5-.6-.8-.6Z"/></svg><span>WhatsApp</span>';
    document.body.append(whatsapp);
  }
})();
