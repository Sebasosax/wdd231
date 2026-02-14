document.addEventListener("DOMContentLoaded", () => {
    const yesRadio = document.getElementById('diabetes-yes');
    const noRadio = document.getElementById('diabetes-no');
    const typeContainer = document.getElementById('diabetes-type-container');

    // Mostrar/ocultar selector de tipo de diabetes
    yesRadio.addEventListener('change', () => {
        typeContainer.style.display = 'block';
    });

    noRadio.addEventListener('change', () => {
        typeContainer.style.display = 'none';
    });

    // Capturar el formulario y enviar datos a thankyou.html
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // evitar recarga de página

        // Obtener valores del formulario
        const data = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            comments: document.getElementById('message').value,
            diabetes: document.querySelector('input[name="has_diabetes"]:checked')?.value || 'no',
            type: document.getElementById('diabetes-type').value
        };

        // Guardar en sessionStorage
        sessionStorage.setItem('contactData', JSON.stringify(data));

        // Redirigir a thankyou.html
        window.location.href = 'thankyou.html';
    });
});
