/* Mobile nav */
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

/* Footer year */
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

/* Privacy modal */
const privacyLink = document.getElementById("privacyLink");
const privacyModal = document.getElementById("privacyModal");

if (privacyLink && privacyModal) {
  privacyLink.addEventListener("click", (e) => {
    e.preventDefault();
    privacyModal.showModal();
  });
}

/* Redemption progress modal + live progress data */
const progressTrigger = document.getElementById("progressTrigger");
const progressModal = document.getElementById("progressModal");
const progressClose = document.getElementById("progressClose");
const progressList = document.getElementById("progressList");
const progressWordCount = document.getElementById("progressWordCount");
const progressTargetDate = document.getElementById("progressTargetDate");

/* Update these values anytime */
const redemptionProgress = {
  wordCount: "12,000 / 120,000 words",
  targetDate: "Target: 2026",
  items: [
    { label: "Outlining & Prep", value: 100 },
    { label: "First Draft", value: 15 },
    { label: "Line Edit", value: 0 },
    { label: "Self Edit", value: 0 },
    { label: "Beta Read", value: 0 },
    { label: "Copy Edit 1", value: 0 },
    { label: "Copy Edit 2", value: 0 },
    { label: "Formatting", value: 0 },
    { label: "Print Production", value: 0 },
    { label: "Audiobook", value: 0 },
    { label: "Publish", value: 0 }
  ]
};

function renderProgressBars() {
  if (!progressList) return;

  progressList.innerHTML = "";

  redemptionProgress.items.forEach((item) => {
    const wrapper = document.createElement("div");
    wrapper.className = "progress-item";

    wrapper.innerHTML = `
      <div class="progress-label">
        <span>${item.label}</span>
        <span>${item.value}%</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${item.value}%"></div>
      </div>
    `;

    progressList.appendChild(wrapper);
  });

  if (progressWordCount) {
    progressWordCount.textContent = redemptionProgress.wordCount;
  }

  if (progressTargetDate) {
    progressTargetDate.textContent = redemptionProgress.targetDate;
  }
}

function openProgressModal() {
  if (!progressModal) return;
  progressModal.classList.add("active");
  progressModal.setAttribute("aria-hidden", "false");
}

function closeProgressModal() {
  if (!progressModal) return;
  progressModal.classList.remove("active");
  progressModal.setAttribute("aria-hidden", "true");
}

renderProgressBars();

if (progressTrigger && progressModal) {
  progressTrigger.addEventListener("click", openProgressModal);

  progressTrigger.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openProgressModal();
    }
  });
}

if (progressClose) {
  progressClose.addEventListener("click", closeProgressModal);
}

if (progressModal) {
  progressModal.addEventListener("click", (e) => {
    if (e.target === progressModal) {
      closeProgressModal();
    }
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && progressModal && progressModal.classList.contains("active")) {
    closeProgressModal();
  }
});
