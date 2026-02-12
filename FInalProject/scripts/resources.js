// resources.js
document.addEventListener("DOMContentLoaded", () => {
  const cardsContainer = document.getElementById("cards-container");
  const gridBtn = document.getElementById("gridBtn");
  const listBtn = document.getElementById("listBtn");

  // Fetch JSON
  fetch("data/resources.json")
    .then((res) => res.json())
    .then((data) => {
      window.resourcesData = data.resources; // Guardar globalmente para filtros
      displayCards(data.resources);
    })
    .catch((err) => console.error("Error loading JSON:", err));

  // Display cards
  function displayCards(resources) {
    cardsContainer.innerHTML = "";
    resources.forEach((resource, index) => {
      const card = document.createElement("div");
      card.classList.add("resource-card");
      card.style.opacity = 0; // para animación

      card.innerHTML = `
        <img src="${resource.image}" alt="${resource.name}">
        <div class="card-content">
          <p class="type">${resource.type}</p>
          <h3>${resource.name}</h3>
          <p>📧 ${resource.email}</p>
          <p>☎️ ${resource.phone}</p>
          <p>📍 ${resource.location}</p>
        </div>
      `;

      cardsContainer.appendChild(card);

      // Animación suave
      setTimeout(() => {
        card.style.opacity = 1;
        card.style.transition = "opacity 0.5s ease, transform 0.3s ease";
        card.style.transform = "translateY(0)";
      }, 50 * index);
    });
  }

  // Grid/List toggle
  gridBtn.addEventListener("click", () => {
    cardsContainer.classList.remove("cards-list");
    cardsContainer.classList.add("cards-grid");
  });

  listBtn.addEventListener("click", () => {
    cardsContainer.classList.remove("cards-grid");
    cardsContainer.classList.add("cards-list");
  });

  // FILTER BY TYPE
  const types = [...new Set(window.resourcesData?.map(r => r.type))];
  if (types.length) {
    const filterContainer = document.createElement("div");
    filterContainer.classList.add("filter-buttons");
    types.forEach((type) => {
      const btn = document.createElement("button");
      btn.textContent = type;
      btn.addEventListener("click", () => {
        const filtered = window.resourcesData.filter(r => r.type === type);
        displayCards(filtered);
      });
      filterContainer.appendChild(btn);
    });

    document.querySelector("#resources-page .resources-section").prepend(filterContainer);
  }
});
