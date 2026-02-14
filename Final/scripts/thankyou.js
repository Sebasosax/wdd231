document.addEventListener("DOMContentLoaded", () => {
    const data = JSON.parse(sessionStorage.getItem('contactData'));

    if (data) {
        // Mensaje de agradecimiento personalizado
        document.getElementById('thankMessage').textContent =
            `Dear ${data.name}, thank you for reaching out to us!`;

        // Mostrar los datos enviados en una minicarta
        document.getElementById('submittedData').innerHTML = `
            <ul>
                <li><strong>Email:</strong> ${data.email}</li>
                <li><strong>Phone:</strong> ${data.phone}</li>
                <li><strong>Comments:</strong> ${data.comments}</li>
                <li><strong>Diabetes:</strong> ${data.diabetes}</li>
                ${data.diabetes === 'yes' ? `<li><strong>Type:</strong> ${data.type}</li>` : ''}
            </ul>
        `;

        // Limpiar sessionStorage para la próxima vez
        sessionStorage.removeItem('contactData');
    } else {
        document.getElementById('thankMessage').textContent =
            "No data submitted.";
    }
});
