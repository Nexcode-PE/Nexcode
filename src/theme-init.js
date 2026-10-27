(() => {
  const root = document.documentElement;
  let savedTheme = null;
  try {
    savedTheme = localStorage.getItem('nexcode-theme');
  } catch {
    // If storage is unavailable, follow the operating-system preference.
  }
  const theme =
    savedTheme === 'light' || savedTheme === 'dark'
      ? savedTheme
      : window.matchMedia('(prefers-color-scheme: light)').matches
        ? 'light'
        : 'dark';
  root.dataset.theme = theme;
})();
