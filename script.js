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
});
