function burger() {
  const burgerBtn = document.querySelector("[data-js-header-burger-button]"),
    burgerOverlay = document.querySelector("[data-js-header-overlay]"),
    menuWrapper = document.querySelector("[data-js-header-wrapper]"),
    headerMenuLinks = document.querySelectorAll(".header__menu-link");

  function openMenu() {
    burgerBtn.classList.add("is-active");
    burgerOverlay.classList.add("is-active");
    menuWrapper.classList.add("is-active");
    document.body.classList.add("is-lock");
  }

  function closeMenu() {
    burgerBtn.classList.remove("is-active");
    burgerOverlay.classList.remove("is-active");
    menuWrapper.classList.remove("is-active");
    document.body.classList.remove("is-lock");
  }

  burgerBtn.addEventListener("click", () => {
    if (burgerBtn.classList.contains("is-active")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  menuWrapper.addEventListener("click", (event) => {
    if (
      event.target === menuWrapper &&
      burgerOverlay.classList.contains("is-active")
    ) {
      closeMenu();
    }
  });

  headerMenuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

export default burger;
