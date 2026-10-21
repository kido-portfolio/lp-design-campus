// ============================
// Hamburger
// ============================
const hamburgerButton = document.getElementById('js-hamburger-button');
const drawerMenu = document.getElementById('js-drawer-menu');

hamburgerButton.addEventListener('click', () => {
  hamburgerButton.classList.toggle('is-open');
  drawerMenu.classList.toggle('is-open');
});
