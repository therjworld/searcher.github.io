/* ================================
   SCROLL REVEAL ANIMATION
================================ */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

revealElements.forEach((el) => revealObserver.observe(el));

/* ================================
   DARK / LIGHT THEME TOGGLE
================================ */

const themeToggle = document.getElementById("themeToggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  if (themeToggle) themeToggle.textContent = "Light";
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      themeToggle.textContent = "Light";
    } else {
      localStorage.setItem("theme", "light");
      themeToggle.textContent = "Dark";
    }
  });
}
/* ================= HERO BAR LOAD ANIMATION ================= */
window.addEventListener("load", () => {
  const heroImage = document.querySelector(".hero-image");
  if (heroImage) {
    heroImage.classList.add("animate");
  }
});
