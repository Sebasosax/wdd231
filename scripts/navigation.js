const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navmenu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});
