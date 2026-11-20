// ============================
// Hamburger
// ============================
const hamburgerButton = document.getElementById('js-hamburger-button');
const drawerMenu = document.getElementById('js-drawer-menu');
const navLinks = document.querySelectorAll('.c-nav__link');

hamburgerButton.addEventListener('click', () => {
  hamburgerButton.classList.toggle('is-open');
  drawerMenu.classList.toggle('is-open');
});

// ナビのリンクを押したらドロワーを閉じる
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    hamburgerButton.classList.remove('is-open');
    drawerMenu.classList.remove('is-open');
  });
});
