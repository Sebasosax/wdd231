const container = document.querySelector('#spotlightContainer');

if (container) {
    let resourcesData = [];
    let currentIndex = 0;

    async function loadResources() {
        try {
            const response = await fetch('data/resources.json');
            const data = await response.json();
            resourcesData = data.resources;

            displaySpotlight();
            startRotation();

        } catch (error) {
            console.error('Error loading resources:', error);
        }
    }

    function displaySpotlight() {
        container.innerHTML = '';

        for (let i = 0; i < 4; i++) {
            const index = (currentIndex + i) % resourcesData.length;
            const item = resourcesData[index];

            const card = document.createElement('article');
            card.classList.add('resource-card'); // 🔥 CORRECTO

            let link = "resources.html";
            if (item.type === "Hospital" || item.type === "Nutrition Clinic") {
                link = "#";
            }

            card.innerHTML = `
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                <h3>${item.name}</h3>
                <p>${item.type}</p>
                <p>${item.location}</p>
                <a href="${link}" class="btn">More Info</a>
            `;

            container.appendChild(card);
        }
    }

    function startRotation() {
        setInterval(() => {
            currentIndex = (currentIndex + 4) % resourcesData.length;
            displaySpotlight();
        }, 5000);
    }

    loadResources();
}
