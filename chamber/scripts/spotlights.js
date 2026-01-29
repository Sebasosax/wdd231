// scripts/spotlights.js

const spotlightContainer = document.getElementById('spotlight-cards');
const membersUrl = 'data/members.json';

// Función para seleccionar N elementos aleatorios de un array
function getRandomElements(arr, n) {
  const shuffled = arr.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

// Función para mostrar los miembros destacados
async function displaySpotlights() {
  try {
    const response = await fetch(membersUrl);
    const data = await response.json();

    // Filtrar solo miembros Oro (3) o Plata (2)
    const eligibleMembers = data.filter(member => member.level === 2 || member.level === 3);

    // Seleccionar aleatoriamente 2 o 3 miembros
    const spotlightMembers = getRandomElements(eligibleMembers, 3);

    // Limpiar contenido previo
    spotlightContainer.innerHTML = '';

    // Crear tarjetas
    spotlightMembers.forEach(member => {
      const card = document.createElement('div');
      card.classList.add('member-card');

      card.innerHTML = `
        ${member.image ? `<img src="images/${member.image}" alt="${member.name} logo">` : ''}
        <h3>${member.name}</h3>
        <p>📍 ${member.address}</p>
        <p>📞 ${member.phone}</p>
        <a href="${member.website}" target="_blank">🌐 Website</a>
      `;

      spotlightContainer.appendChild(card);
    });

  } catch (error) {
    console.error('Error loading spotlight members:', error);
    spotlightContainer.textContent = "Unable to load spotlight members.";
  }
}

// Ejecutar al cargar
displaySpotlights();
