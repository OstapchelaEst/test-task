const openMenuButton = document.querySelector(".icon-menu-open");
const closeMenuButton = document.querySelector(".icon-menu-close");

openMenuButton.addEventListener("click", () => {
  document.body.classList.add("menu-open");
});
closeMenuButton.addEventListener("click", () => {
  document.body.classList.remove("menu-open");
});
