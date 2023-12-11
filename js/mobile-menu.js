const mobileMenu = document.querySelector(".mobile-menu");
const menuBtnOpen = document.querySelector(".menu-btn-open");
const menuBtnClose = document.querySelector(".menu-btn-close");
const mobileMenuSkills = document.querySelector("#mobile-menu-skills");
const mobileMenuPortfolio = document.querySelector("#mobile-menu-portfolio");
const mobileMenuVideo = document.querySelector("#mobile-menu-video");
const mobileMenuPrice = document.querySelector("#mobile-menu-price");
const mobileMenuContact = document.querySelector("#mobile-menu-contact");

const toggleMenu = () => mobileMenu.classList.toggle("is-open");
const disableScroll = () =>
  document.body.classList.toggle("is-scroll-disabled");

menuBtnOpen.addEventListener("click", toggleMenu);
menuBtnClose.addEventListener("click", toggleMenu);
mobileMenuSkills.addEventListener("click", toggleMenu);
mobileMenuPortfolio.addEventListener("click", toggleMenu);
mobileMenuVideo.addEventListener("click", toggleMenu);
mobileMenuPrice.addEventListener("click", toggleMenu);
mobileMenuContact.addEventListener("click", toggleMenu);

menuBtnOpen.addEventListener("click", disableScroll);
menuBtnClose.addEventListener("click", disableScroll);
mobileMenuSkills.addEventListener("click", disableScroll);
mobileMenuPortfolio.addEventListener("click", disableScroll);
mobileMenuVideo.addEventListener("click", disableScroll);
mobileMenuPrice.addEventListener("click", disableScroll);
mobileMenuContact.addEventListener("click", disableScroll);
