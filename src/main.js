import "./style.css";
/* Import af Motion One bibliotek */
import { animate, stagger, inView, scroll, timeline } from "motion";

// Import af AlpineJS
import Alpine from "alpinejs";
window.Alpine = Alpine;
Alpine.start();

// dark/light mode
const btnLight = document.querySelector("#light");
const btnDark = document.querySelector("#dark");

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

function toggleTheme(e) {
  const mode = e.target.dataset.theme;
  if (mode !== "dark") {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
    console.log("sker der noget?");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
    console.log("sker der noget?");
  }
}

btnLight.addEventListener("click", toggleTheme);
btnDark.addEventListener("click", toggleTheme);

// in view
inView(".hjerterinview", ({ target }) => {
  animate(
    target.querySelectorAll(".hjerte"),
    { x: [2000, 0] },
    { duration: 0.75, delay: stagger(1, { start: 0.25 }) }
  );
});
