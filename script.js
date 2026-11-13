
"use strict";

// Elements
const pages = document.querySelectorAll("main .page");
const navLinks = document.querySelectorAll(".nav-links a");
const menu = document.querySelector(".nav-links");
const toggle = document.querySelector(".menu-toggle");

// Show selected page
function showPage() {
  const requested = location.hash.slice(1);
  const id = [...pages].some(p => p.id === requested)
    ? requested : "home";

  pages.forEach(page => {
    const active = page.id === id;
    page.classList.toggle("active-page", active);
    page.setAttribute("aria-hidden", String(!active));
  });

  navLinks.forEach(link => {
    const active = link.getAttribute("href") === `#${id}`;
    link.classList.toggle("active", active);

    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });

  closeMenu();
  window.scrollTo(0, 0);
}

// Mobile menu
function closeMenu() {
  menu.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
}

// Events
window.addEventListener("hashchange", showPage);

toggle.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeMenu();
});

// Footer year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Initialize
showPage();
