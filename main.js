const button = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const list = document.querySelector(".menu");

button.addEventListener("click", () => {
   console.log("elo");
   button.classList.toggle("open");
   menu.classList.toggle("menu");
   list.classList.toggle("slide-in-top");
});
