document.addEventListener('DOMContentLoaded', () => {

  // =========================
  // MOBILE NAV TOGGLE (Hamburger)
  // =========================
  const menuBtn = document.getElementById('menu-btn');
  const primaryNav = document.getElementById('primary-nav');

  if (menuBtn && primaryNav) {
    menuBtn.addEventListener('click', () => {
      const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', String(!isExpanded));
      primaryNav.classList.toggle('nav-open');
    });
  }


  // =========================
  // WORK DROPDOWN (Desktop + Mobile)
  // =========================
  const workLink = document.querySelector('.work-link');
  const workMenu = document.querySelector('.work-submenu');

  if (workLink && workMenu) {
    workLink.addEventListener('click', (e) => {
      e.preventDefault();

      const isOpen = workMenu.classList.contains('open');
      workMenu.classList.toggle('open', !isOpen);
      workLink.setAttribute('aria-expanded', String(!isOpen));
    });
  }


  // =========================
  // BACK TO TOP BUTTON
  // =========================
  const backToTopBtn = document.getElementById('back-to-top');

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

});




