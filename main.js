const menuMore = document.querySelector(".menu__more");
const menuDropdown = document.querySelector(".menu__dropdown");
const dropdownLinks = document.querySelectorAll(".dropdown__link");
const menuBurger = document.querySelector(".menu__burger");
const overlay = document.querySelector(".header__overlay");
const navbarItems = document.querySelectorAll(".navbar__item");
const navbarSearch = document.querySelector(".navbar__search");
const searchField = document.querySelector(".search__field");
const navbarMore = document.querySelector(".navbar__more");
const navbarDropdown = document.querySelector(".navbar__dropdown");
const navbarDropdownItem = document.querySelectorAll(".navbar__dropdownItem");

menuMore.addEventListener("click", () => {
  menuMore.classList.toggle("active");
  menuDropdown.classList.toggle("active");
});

dropdownLinks.forEach((el) =>
  el.addEventListener("click", () => {
    menuMore.classList.remove("active");
    menuBurger.classList.remove("active");
    menuDropdown.classList.remove("active");
    document.body.classList.remove("lock");
    overlay.classList.remove("active");
  })
);

menuBurger.addEventListener("click", (e) => {
  menuBurger.classList.toggle("active");
  menuDropdown.classList.toggle("active");
  document.body.classList.toggle("lock");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", (e) => {
  menuBurger.classList.remove("active");
  menuDropdown.classList.remove("active");
  document.body.classList.remove("lock");
  overlay.classList.remove("active");
});

navbarItems.forEach((el) => {
  el.addEventListener("click", (e) => {
    navbarItems.forEach((el) => el.classList.remove("active"));
    e.target.closest(".navbar__item").classList.add("active");
  });
});

navbarSearch.addEventListener("click", () => {
  searchField.classList.toggle("active");
  navbarDropdown.classList.remove("active");
});

navbarMore.addEventListener("click", () => {
  navbarDropdown.classList.toggle("active");
  searchField.classList.remove("active");
});

navbarDropdownItem.forEach((el) => {
  el.addEventListener("click", (e) => {
    navbarDropdownItem.forEach((el) => el.classList.remove("active"));
    e.target.closest(".navbar__dropdownItem").classList.add("active");
    navbarDropdown.classList.remove("active");
  });
});
