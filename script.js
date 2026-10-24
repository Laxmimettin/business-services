// Mobile navigation menu
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu",
  );
});

// Close mobile menu when a navigation link is clicked
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  });
});

// Filter technology programs
const filterButtons = document.querySelectorAll(".filter-btn");
const programCards = document.querySelectorAll(".program-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => {
      item.classList.remove("active");
    });

    button.classList.add("active");

    const selectedFilter = button.dataset.filter;

    programCards.forEach((card) => {
      const matches =
        selectedFilter === "all" || card.dataset.category === selectedFilter;

      card.classList.toggle("hidden", !matches);
    });
  });
});

// FAQ accordion
document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const shouldOpen = !item.classList.contains("open");

    document.querySelectorAll(".faq-item").forEach((faq) => {
      faq.classList.remove("open");

      faq.querySelector(".faq-question").setAttribute("aria-expanded", "false");

      faq.querySelector(".faq-symbol").textContent = "+";
    });

    if (shouldOpen) {
      item.classList.add("open");
      button.setAttribute("aria-expanded", "true");
      button.querySelector(".faq-symbol").textContent = "−";
    }
  });
});

// Contact form validation
// This demonstration does not send or store form data.
const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    formStatus.textContent = "Please check the required fields and try again.";
    formStatus.className = "form-status error";
    return;
  }

  formStatus.textContent =
    "Your details look valid. This demo does not send messages. Please contact Veda Technology through its official website.";

  formStatus.className = "form-status success";
});

// Automatically update the copyright year
document.querySelector("#year").textContent = new Date().getFullYear();

// Back-to-top button
const backToTop = document.querySelector(".back-to-top");

window.addEventListener(
  "scroll",
  () => {
    backToTop.classList.toggle("visible", window.scrollY > 450);
  },
  { passive: true },
);

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
