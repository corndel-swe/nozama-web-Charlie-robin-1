const toggle = document.querySelector(".theme-toggle");
const TOGGLE_DARK = "Toggle Dark mode";
const TOGGLE_LIGHT = "Toggle Light mode";

document.addEventListener("DOMContentLoaded", async function () {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.body.classList.add("dark");
    toggle.textContent = TOGGLE_DARK;
  } else {
    document.body.classList.add("light");
    toggle.textContent = TOGGLE_LIGHT;
  }
});

toggle.addEventListener("click", () => {
  console.log("Hello");
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    toggle.textContent = TOGGLE_LIGHT;
  } else {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    toggle.textContent = TOGGLE_DARK;
  }
});
