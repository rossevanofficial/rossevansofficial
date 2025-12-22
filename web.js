// Mobile nav
const toggle = document.querySelector(".navToggle");
const nav = document.querySelector("#nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("isOpen");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // close when a link is clicked (mobile)
  nav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      nav.classList.remove("isOpen");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Privacy modal
const privacyLink = document.getElementById("privacyLink");
const privacyModal = document.getElementById("privacyModal");
if (privacyLink && privacyModal) {
  privacyLink.addEventListener("click", (e) => {
    e.preventDefault();
    privacyModal.showModal();
  });
}

// Contact form -> mailto fallback
const contactForm = document.getElementById("contactForm");
const contactMsg = document.getElementById("contactMsg");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(contactForm);
    const name = encodeURIComponent(data.get("name") || "");
    const email = encodeURIComponent(data.get("email") || "");
    const message = encodeURIComponent(data.get("message") || "");

    // Change this to your real inbox
    const to = "contact@rossevansofficial.com";
    const subject = encodeURIComponent(`Website message from ${decodeURIComponent(name)}`);
    const body = encodeURIComponent(
      `Name: ${decodeURIComponent(name)}\nEmail: ${decodeURIComponent(email)}\n\n${decodeURIComponent(message)}`
    );

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

    if (contactMsg) {
      contactMsg.textContent = "Opening your email client...";
    }
  });
}

// Newsletter form placeholder (shows message only)
const newsletterForm = document.getElementById("newsletterForm");
const newsletterMsg = document.getElementById("newsletterMsg");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (newsletterMsg) {
      newsletterMsg.textContent =
        "Add your newsletter provider link (Option A) or wire this form to Formspree/Mailchimp/ConvertKit.";
    }
  });
}
