const hamburgerMenuBtn = document.querySelector(".main-header__hamburger-menu");
const closeMenuBtn = document.querySelector(".mobile-menu__closebtn");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuLinks = document.querySelectorAll(
  ".mobile-menu__navigation-list-item a"
);

function showMobileMenu() {
  mobileMenu.classList.add("mobile-menu--active");
}

function hideMobileMenu() {
  mobileMenu.classList.remove("mobile-menu--active");
}

hamburgerMenuBtn.addEventListener("click", showMobileMenu);
closeMenuBtn.addEventListener("click", hideMobileMenu);

for (const link of mobileMenuLinks) {
  link.addEventListener("click", hideMobileMenu);
}
