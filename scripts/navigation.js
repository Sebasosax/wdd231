const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navmenu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    // Opcional: cambiar el icono de hamburguesa por una X
    menuButton.textContent = navMenu.classList.contains("show") ? "❌" : "☰";
});