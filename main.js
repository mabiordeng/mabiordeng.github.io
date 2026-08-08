(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  const storedTheme = localStorage.getItem('mabior-site-theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  root.dataset.theme = storedTheme || (prefersDark ? 'dark' : 'light');

  themeButton?.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    localStorage.setItem('mabior-site-theme', next);
  });

  navToggle?.addEventListener('click', () => {
    const isOpen = nav?.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(Boolean(isOpen)));
    navToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });

  nav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      navToggle?.setAttribute('aria-expanded', 'false');
    });
  });

  document.querySelectorAll('#year').forEach((node) => {
    node.textContent = new Date().getFullYear();
  });

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('visible'));
  }
})();
