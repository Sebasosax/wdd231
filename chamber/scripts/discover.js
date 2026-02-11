// Import the 8 points of interest from the module
import { places } from '../data/discover.mjs';

document.addEventListener('DOMContentLoaded', () => {

  // ===============================
  // CONTAINERS
  // ===============================
  const visitMessage = document.getElementById('visit-message');
  const cardsContainer = document.querySelector('.discover-cards');

  // ===============================
  // VISIT MESSAGE USING LOCALSTORAGE
  // ===============================
  const lastVisit = localStorage.getItem('lastVisit');
  const now = Date.now();

  if (!lastVisit) {
    visitMessage.textContent =
      "Welcome! If you have any questions, let us know.";
  } else {
    const diffDays = Math.floor(
      (now - Number(lastVisit)) / (1000 * 60 * 60 * 24)
    );

    if (diffDays === 0) {
      visitMessage.textContent = "Back so soon! Awesome!";
    } else if (diffDays === 1) {
      visitMessage.textContent = "Your last visit was 1 day ago.";
    } else {
      visitMessage.textContent =
        `Your last visit was ${diffDays} days ago.`;
    }
  }

  // Update last visit timestamp
  localStorage.setItem('lastVisit', now);

  // ===============================
  // CREATE CARDS FROM JSON DATA
  // ===============================
  places.forEach(item => {

    const card = document.createElement('div');
    card.classList.add('discover-card');

    // Title
    const h2 = document.createElement('h2');
    h2.textContent = item.name;
    card.appendChild(h2);

    // Image
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.name;
    img.loading = "lazy"; // ✅ Required for lazy loading
    figure.appendChild(img);
    card.appendChild(figure);

    // Address
    const address = document.createElement('address');
    address.classList.add('discover-address');
    address.textContent = item.address;
    card.appendChild(address);

    // Description
    const description = document.createElement('p');
    description.textContent = item.description;
    card.appendChild(description);

    // Button
    const button = document.createElement('button');
    button.textContent = "Learn More";
    button.addEventListener('click', () => {
      alert(`More information about: ${item.name}`);
    });
    card.appendChild(button);

    // Append card
    cardsContainer.appendChild(card);
  });

});
