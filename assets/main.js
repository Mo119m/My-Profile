// Small enhancements: dark-mode toggle (remembered) + current year.
(function () {
  var root = document.documentElement;
  var stored = localStorage.getItem("theme");
  var prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }

  apply(stored || (prefersDark ? "dark" : "light"));

  var toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var current = root.getAttribute("data-theme");
      apply(current === "dark" ? "light" : "dark");
    });
  }

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
