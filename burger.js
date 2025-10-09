document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("#primary-nav") || document.querySelector(".nav");

  if (!burger || !nav) {
    console.warn("Burger eller nav blev ikke fundet på siden.");
    return;
  }

  // initial ARIA-status
  burger.setAttribute("aria-expanded", "false");

  burger.addEventListener("click", (e) => {
    const isOpen = burger.classList.toggle("active");
    nav.classList.toggle("active", isOpen);
    burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
});
