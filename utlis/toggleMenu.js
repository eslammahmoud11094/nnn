// export const openMenu = () => {
//   document.querySelector(".popup-mobile-menu").classList.add("active");
// };
// export const closeMenu = () => {
//   document.querySelector(".popup-mobile-menu").classList.remove("active");
// };



export const openMenu = () => {
  if (typeof document !== "undefined") {
    const menu = document.querySelector(".popup-mobile-menu");
    if (menu) menu.classList.add("active");
  }
};

export const closeMenu = () => {
  if (typeof document !== "undefined") {
    const menu = document.querySelector(".popup-mobile-menu");
    if (menu) menu.classList.remove("active");
  }
};
