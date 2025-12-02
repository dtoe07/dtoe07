// add event listener to manipulate site behavior after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // COLLAPSE NAVBAR ON LINK CLICK (FOR MOBILE)
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

  // --- SCROLL ANIMATION (INTERSECTION OBSERVER) ---
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Only animate once
        }
      });
    },
    { threshold: 0.1 } // Trigger when 10% of the element is visible
  );

  // Observe any element with the "animate-on-scroll" class
  const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");
  elementsToAnimate.forEach((element) => {
    observer.observe(element);
  });

  // Contact Form Validation
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
    event.stopPropagation(); // Stop further propagation of the event

    if (form.checkValidity()) {
      // If form is valid
      const btn = form.querySelector('button[type="submit"]'); // Get the submit button
      const originalText = btn.innerText; // Store original button text

      btn.innerText = "Sending..."; // Change button text to indicate sending
      btn.disabled = true; // Disable the button to prevent multiple submissions

      // Simulate form submission delay for now
      setTimeout(() => {
        alert("Thanks for contacting me! I will get back to you soon.");
        form.reset();
        form.classList.remove("was-validated");
        btn.innerText = originalText;
        btn.disabled = false;
      }, 1500);
    } else {
      // If form is invalid
      form.classList.add("was-validated"); // Add Bootstrap validation class
      const firstInvalid = form.querySelector(":invalid"); // Find the first invalid input
      if (firstInvalid) firstInvalid.focus(); // Focus on the first invalid input
    }

    // Toggle invalid/valid classes for visual feedback
    Array.from(form.elements).forEach((input) => {
      // Iterate through form elements
      if (input.tagName === "INPUT" || input.tagName === "TEXTAREA") {
        // Check if element is either input or textarea only
        if (!input.checkValidity()) {
          // If input is invalid, change the box to red
          input.classList.add("is-invalid"); // Add invalid class for styling to show error message
          input.classList.remove("is-valid"); // Remove valid class if present
        } else {
          // If input is valid, change the box to green
          input.classList.remove("is-invalid"); // Remove invalid class if present
          input.classList.add("is-valid"); // Add valid class for styling to show success
        }
      }
    });
  });
});
