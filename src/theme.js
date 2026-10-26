(() => {
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('nexcode-theme');

  if (savedTheme === 'light') root.dataset.theme = 'light';

  const syncButtons = () => {
    const isLight = root.dataset.theme === 'light';
    document.querySelectorAll('.theme-toggle').forEach((button) => {
      button.setAttribute('aria-label', isLight ? 'Cambiar a tema oscuro' : 'Cambiar a tema claro');
      button.setAttribute('title', isLight ? 'Cambiar a tema oscuro' : 'Cambiar a tema claro');
      button.querySelector('[aria-hidden="true"]').textContent = isLight ? '☾' : '◐';
    });
    document.querySelectorAll('[data-logo-dark]').forEach((image) => {
      image.src = isLight ? image.dataset.logoLight : image.dataset.logoDark;
    });
  };

  document.querySelectorAll('.theme-toggle').forEach((button) => {
    button.addEventListener('click', () => {
      const nextTheme = root.dataset.theme === 'light' ? 'dark' : 'light';
      root.dataset.theme = nextTheme;
      localStorage.setItem('nexcode-theme', nextTheme);
      syncButtons();
    });
  });

  syncButtons();
})();
