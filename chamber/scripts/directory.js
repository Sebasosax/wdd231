const membersContainer = document.getElementById('members');
const gridBtn = document.getElementById('gridView');
const listBtn = document.getElementById('listView');

const url = 'data/members.json';

// Fetch members using async/await
async function getMembers() {
  const response = await fetch(url);
  const data = await response.json();
  displayMembers(data);
}

// Display members
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

// Grid/List toggle
gridBtn.addEventListener('click', () => {
  membersContainer.classList.remove('list-view');
});

listBtn.addEventListener('click', () => {
  membersContainer.classList.add('list-view');
});

// Hamburger menu toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Execute fetch
getMembers();
