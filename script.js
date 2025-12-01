// This script ensures that the Bootstrap navbar collapses automatically when a navigation link is clicked on smaller screens.
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const navbarCollapse = document.getElementById("navbarNav");
  const bootstrapCollapse = new bootstrap.Collapse(navbarCollapse, {
    toggle: false,
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navbarCollapse.classList.contains("show")) {
        bootstrapCollapse.hide();
      }
    });
  });

  // SIMPLE FADE-IN ON SCROLL
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((sec) => observer.observe(sec));

  // Reveal About section on scroll for experiment purposes for future use
  const aboutSection = document.querySelector("#about");

  const aboutObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          aboutSection.classList.add("visible");
          aboutObserver.unobserve(aboutSection);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  aboutObserver.observe(aboutSection);
});
