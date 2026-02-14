document.addEventListener("DOMContentLoaded", () => {
    // Elementos del formulario
    const yesRadio = document.getElementById('diabetes-yes');
    const noRadio = document.getElementById('diabetes-no');
    const typeContainer = document.getElementById('diabetes-type-container');
    const form = document.querySelector('.contact-form');

    // Función para mostrar/ocultar selector de tipo de diabetes
    function toggleDiabetesType() {
        if (yesRadio.checked) {
            typeContainer.classList.add('show');
        } else {
            typeContainer.classList.remove('show');
        }
    }

    // Eventos de cambio de radio buttons
    yesRadio.addEventListener('change', toggleDiabetesType);
    noRadio.addEventListener('change', toggleDiabetesType);

    // Inicializar estado correcto al cargar la página
    toggleDiabetesType();

    // Capturar envío del formulario
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
