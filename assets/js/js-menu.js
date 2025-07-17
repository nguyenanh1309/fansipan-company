document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector('.mobile-menu-icon');
  const mobileMenu = document.querySelector('.mobile-menu');

  menuIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
  });
});