const navDropdown = document.querySelector("#menu-button");
const megaMenuBtn = document.querySelector(".mega-menu__btn");
const headerContainer = document.querySelector(".header");

navDropdown.addEventListener("click", (_) => {
  document.querySelector(".mobile-nav").classList.toggle("is-expanded");
});

megaMenuBtn.addEventListener("click", (_) => {
  document.querySelector(".header").classList.toggle("open");
});

let headroom = new Headroom(headerContainer, {
  offset: 59.6,
  tolerance: 5,
  classes: {
    initial: "headeroom--pinned",
    pinned: "headroom--pinned",
    unpinned: "headroom--unpinned",
  },
});

headroom.init();

window.addEventListener("scroll", () => {
  if (window.pageYOffset === 0) {
    headerContainer.classList.remove("headroom--pinned");
  }
});
