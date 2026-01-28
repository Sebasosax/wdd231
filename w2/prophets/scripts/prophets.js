// URL del JSON
const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

// Selecciona el div donde se mostrarán las tarjetas
const cards = document.querySelector('#cards');

// Función para obtener datos
async function getProphetData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets); // ver datos en consola
    displayProphets(data.prophets); // enviar solo la matriz de profetas
  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
}

// Función para mostrar los profetas en tarjetas
const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    // Crear sección tarjeta
    const card = document.createElement('section');
    card.classList.add('card');

    // Crear h2 con nombre completo
    const fullName = document.createElement('h2');
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;

    // Crear imagen
    const portrait = document.createElement('img');
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '250');
    portrait.setAttribute('height', '300');

    // Agregar nombre e imagen a la tarjeta
    card.appendChild(fullName);

    // Agregar fecha y lugar de nacimiento
    const birthInfo = document.createElement('p');
    birthInfo.textContent = `Born: ${prophet.birthdate} in ${prophet.birthplace}`;
    card.appendChild(birthInfo);

    card.appendChild(portrait);

    // Agregar tarjeta al div
    cards.appendChild(card);
  });
}

// Llamar la función principal
getProphetData();
