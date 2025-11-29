document.addEventListener('DOMContentLoaded', () => {

  // =========================
  // MOBILE NAV TOGGLE
  // =========================
    // Work dropdown toggle
  const workLink = document.querySelector('.work-link');
  const workMenu = document.querySelector('.work-submenu');

  if (workLink && workMenu) {
    workLink.addEventListener('click', (e) => {
      // stop the link from jumping the page
      e.preventDefault();

      const isOpen = workMenu.classList.contains('open');
      workMenu.classList.toggle('open', !isOpen);
      workLink.setAttribute('aria-expanded', String(!isOpen));
    });
  }

  // ... your back-to-top code if present ...
});

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




