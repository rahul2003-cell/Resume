// --- Portfolio Script.js (Optimized) ---
// Smooth scrolling and UI interactions

const qs = (s) => document.querySelector(s);
const qsa = (s) => document.querySelectorAll(s);

// Smooth scrolling
qsa('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    const target = qs(anchor.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

// Navbar scroll shadow
window.addEventListener("scroll", () => {
  const navbar = qs("#navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Fade-in observer
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.1 });

qsa(".fade-in").forEach((el) => fadeObserver.observe(el));

// Skill bar animation
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const bar = entry.target.querySelector(".skill-progress");
      if (bar) bar.style.width = bar.dataset.width + "%";
    }
  });
}, { threshold: 0.2 });

qsa(".skill-card").forEach((card) => skillObserver.observe(card));

// Contact form message
qs("#contact-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const btn = qs(".submit-btn");
  const original = btn.textContent;

  btn.textContent = "Message Sent! ✓";
  btn.style.background = "#48bb78";

  e.target.reset();

  setTimeout(() => {
    btn.textContent = original;
    btn.style.background = "";
  }, 3000);
});