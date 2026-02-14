// scripts/spotlight.js
const container = document.querySelector('#spotlightContainer');

if (container) {
    let resourcesData = [];
    let currentIndex = 0;

    // Cargar recursos desde JSON
    async function loadResources() {
        try {
            const response = await fetch('data/resources.json'); // asegúrate que la ruta sea correcta
            const data = await response.json();
            resourcesData = data.resources;

            displaySpotlight();
            startRotation();

        } catch (error) {
            console.error('Error loading resources:', error);
        }
    }

    // Mostrar 4 recursos a la vez
    function displaySpotlight() {
        container.innerHTML = '';

        for (let i = 0; i < 4; i++) {
            const index = (currentIndex + i) % resourcesData.length;
            const item = resourcesData[index];

            const card = document.createElement('article');
            card.classList.add('spotlight-card');

            // Diferenciar links externos (Hospitals) e internos (Local Clinics)
            let link = "resources.html"; 
            if (item.type === "Hospital" || item.type === "Nutrition Clinic") {
                link = "#"; // reemplazar con link real si hay
            }

            card.innerHTML = `
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                <div class="spotlight-content">
                    <h3>${item.name}</h3>
                    <p>${item.type}</p>
                    <p>${item.location}</p>
                    <a href="${link}" class="btn-small">More Info</a>
                </div>
            `;

            container.appendChild(card);
        }
    }

    // Rotación automática cada 5 segundos
    function startRotation() {
        setInterval(() => {
            currentIndex = (currentIndex + 4) % resourcesData.length;
            displaySpotlight();
        }, 5000);
    }

    loadResources();
}
