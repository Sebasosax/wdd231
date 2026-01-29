// main.js

// Actualiza el año y la fecha de última modificación
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  const lastModifiedEl = document.getElementById("lastModified");

  if (yearEl) yearEl.textContent = new Date().getFullYear();
  if (lastModifiedEl) lastModifiedEl.textContent = document.lastModified;
  
  // Toggle menú hamburguesa
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  }
});
