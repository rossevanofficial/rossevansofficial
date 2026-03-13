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
    document.addEventListener("DOMContentLoaded", function () {
  const mlBox = document.querySelector(".ml-embedded");

  if (!mlBox) return;

  document.addEventListener("submit", function (e) {
    const form = e.target;

    if (!mlBox.contains(form)) return;

    const emailField = form.querySelector('input[type="email"], input[name="email"]');

    if (!emailField) return;

    const emailValue = emailField.value.trim();

    if (!emailValue) {
      e.preventDefault();
      emailField.focus();
      emailField.reportValidity?.();
      return;
    }

    const emailValid = emailField.checkValidity ? emailField.checkValidity() : true;

    if (!emailValid) {
      e.preventDefault();
      emailField.focus();
      emailField.reportValidity?.();
    }
  }, true);
});
  });
}
document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener(
    "submit",
    function (e) {
      const form = e.target;

      if (!form.closest(".ml-embedded")) return;

      const emailField = form.querySelector('input[type="email"], input[name="email"]');

      if (!emailField) return;

      const emailValue = emailField.value.trim();

      if (!emailValue) {
        e.preventDefault();
        emailField.focus();
        if (typeof emailField.reportValidity === "function") {
          emailField.reportValidity();
        }
        return;
      }

      if (typeof emailField.checkValidity === "function" && !emailField.checkValidity()) {
        e.preventDefault();
        emailField.focus();
        if (typeof emailField.reportValidity === "function") {
          emailField.reportValidity();
        }
      }
    },
    true
  );
});
