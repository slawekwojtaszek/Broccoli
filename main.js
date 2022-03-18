const button = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

button.addEventListener("click", () => {
   console.log("elo");
   button.classList.toggle("open");
   menu.classList.toggle("menu");
   menu.classList.toggle("slide-in-top");
});
