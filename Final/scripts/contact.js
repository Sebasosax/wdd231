// scripts/contact.js

document.addEventListener("DOMContentLoaded", () => {
    const yesRadio = document.getElementById('diabetes-yes');
    const noRadio = document.getElementById('diabetes-no');
    const typeContainer = document.getElementById('diabetes-type-container');

    yesRadio.addEventListener('change', () => {
        typeContainer.style.display = 'block';
    });

    noRadio.addEventListener('change', () => {
        typeContainer.style.display = 'none';
    });
});
