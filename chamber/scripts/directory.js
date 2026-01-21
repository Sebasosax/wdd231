const membersContainer = document.getElementById('members');
const gridBtn = document.getElementById('gridView');
const listBtn = document.getElementById('listView');

const url = 'data/members.json';

async function getMembers() {
  const response = await fetch(url);
  const data = await response.json();

  displayMembers(data);
}

function displayMembers(members) {
  membersContainer.innerHTML = '';

  members.forEach(member => {
    const card = document.createElement('div');
    card.classList.add('member-card');

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;

    membersContainer.appendChild(card);
  });
}

// Cambiar vista
gridBtn.addEventListener('click', () => {
  membersContainer.classList.remove('list-view');
});

listBtn.addEventListener('click', () => {
  membersContainer.classList.add('list-view');
});

// Ejecutar
getMembers();
