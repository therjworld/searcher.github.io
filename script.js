// HERO STAGGERED REVEAL (EDITORIAL FEEL)
window.addEventListener("load", () => {
  const heroContent = document.querySelector(".hero-content");
  setTimeout(() => {
    heroContent.classList.add("reveal-active");
  }, 300);
});
