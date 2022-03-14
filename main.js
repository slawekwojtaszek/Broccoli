const button = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const list = document.querySelector(".list");
button.addEventListener("click", () => {
   console.log("elo");

   menu.classList.toggle("menu");
   list.classList.toggle("slide-in-top");
});

let parent = document.querySelector(".sticky").parentElement;

while (parent) {
   const hasOverflow = getComputedStyle(parent).overflow;
   if (hasOverflow !== "visible") {
      console.log(hasOverflow, parent);
   }
   parent = parent.parentElement;
}
