// Mobile nav
const toggle = document.querySelector(".navToggle");
const nav = document.querySelector("#nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("isOpen");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      nav.classList.remove("isOpen");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Privacy modal
const privacyLink = document.getElementById("privacyLink");
const privacyModal = document.getElementById("privacyModal");

if (privacyLink && privacyModal) {
  privacyLink.addEventListener("click", (e) => {
    e.preventDefault();
    privacyModal.showModal();
  });
}
