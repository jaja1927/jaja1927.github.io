// window
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};
// window end
// hambuger
const hamburger = document.querySelector("#hamburger");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
});
// dark
let theme = "light";

function toggleDarkTheme() {
  if (localStorage.getItem("theme") === "dark") {
    localStorage.setItem("theme", "light");
    document.documentElement.classList.remove("dark");
  } else {
    localStorage.setItem("theme", "dark");
    document.documentElement.classList.add("dark");
  }
}

document;
var button = document.getElementById("dark");
button.addEventListener("click", toggleDarkTheme);
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
}
// dark end
