(function () {
  const nav = document.querySelector('.nav');
  const hero = document.querySelector('.hero');
  if (!nav || !hero) return;

  function updateNav() {
    nav.classList.toggle('scrolled', hero.getBoundingClientRect().bottom <= 0);
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();
})();
