// HERO MASK REVEAL ON LOAD + SCROLL RE-ENTRY
const hero = document.querySelector(".hero");
const heroText = document.querySelector(".mask-text");

let hasPlayed = false;

const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      heroText.classList.remove("play");
      void heroText.offsetWidth; // reset animation
      heroText.classList.add("play");
    }
  },
  { threshold: 0.6 }
);

observer.observe(hero);
