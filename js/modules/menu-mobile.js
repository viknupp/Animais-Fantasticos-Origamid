import outsideClick from "./outside-click.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector("[data-menu='button']");
  const menuList = document.querySelector("[data-menu='list']");
  const theEvents = ["click", "touchstart"];

  if (menuButton) {
    function openMenu(event) {
      menuList.classList.add("active");
      menuButton.classList.add("active");
      outsideClick(menuList, theEvents, () => {
        menuList.classList.remove("active");
        menuButton.classList.remove("active");
      });
    }
    theEvents.forEach((userEvent) =>
      menuButton.addEventListener(userEvent, openMenu)
    );
  }
}
