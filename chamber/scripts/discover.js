// Import the 8 points of interest
import { discoverData } from './data/discover.mjs';

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {

  // Main container where cards and visit message will be added
  const container = document.querySelector('.discover-container');
  
  // ===============================
  // VISIT MESSAGE USING LOCALSTORAGE
  // ===============================
  const visitDiv = document.createElement('div');
  visitDiv.classList.add('discover-visit');

  const lastVisit = localStorage.getItem('lastVisit');
  const now = Date.now();

  if (!lastVisit) {
    visitDiv.textContent = "Welcome! If you have any questions, let us know.";
  } else {
    const diffDays = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
    if (diffDays === 0) {
      visitDiv.textContent = "Back soon! Great!";
    } else if (diffDays === 1) {
      visitDiv.textContent = "Your last visit was 1 day ago";
    } else {
      visitDiv.textContent = `Your last visit was ${diffDays} days ago`;
    }
  }

  container.appendChild(visitDiv);

  // Update the last visit timestamp
  localStorage.setItem('lastVisit', now);

  // ===============================
  // CREATE CARDS FOR POINTS OF INTEREST
  // ===============================
  const cardsWrapper = document.createElement('div');
  cardsWrapper.classList.add('discover-cards');

  discoverData.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('discover-card');

    // TITLE
    const h2 = document.createElement('h2');
    h2.textContent = item.name;
    card.appendChild(h2);

    // IMAGE
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.name;
    figure.appendChild(img);
    card.appendChild(figure);

    // ADDRESS
    const address = document.createElement('address');
    address.classList.add('discover-address');
    address.textContent = item.address;
    card.appendChild(address);

    // DESCRIPTION
    const p = document.createElement('p');
    p.textContent = item.description;
    card.appendChild(p);

    // BUTTON
    const btn = document.createElement('button');
    btn.textContent = 'Learn More';
    btn.addEventListener('click', () => {
      alert(`More information about: ${item.name}`);
    });
    card.appendChild(btn);

    cardsWrapper.appendChild(card);
  });

  container.appendChild(cardsWrapper);
});
