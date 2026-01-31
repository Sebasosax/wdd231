// Agregar timestamp al cargar la página
document.getElementById("timestamp").value = new Date().toISOString();

// Abrir modales al hacer clic
const modalLinks = document.querySelectorAll("[data-modal]");
modalLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const modalId = link.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    if(modal) modal.showModal();
  });
});

// Cerrar modales con el botón
const modals = document.querySelectorAll("dialog");
modals.forEach(modal => {
  const closeBtn = modal.querySelector("button");
  closeBtn.addEventListener("click", () => modal.close());
});
