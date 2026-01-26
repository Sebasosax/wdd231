const membersContainer = document.getElementById('members');
const gridBtn = document.getElementById('gridView');
const listBtn = document.getElementById('listView');

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

const url = 'data/members.json';

/* =============================
   FETCH MEMBERS (ASYNC/AWAIT)
============================= */
async function getMembers() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data);
  } catch (error) {
    console.error('Error loading members:', error);
  }
}

/* =============================
   DISPLAY MEMBERS
============================= */
function displayMembers(members) {
  membersContainer.innerHTML = '';

  members.forEach(member => {
    const card = document.createElement('div');
    card.classList.add('member-card');

    let imageHTML = '';
    if (member.image) {
      imageHTML = `<img src="images/${member.image}" alt="${member.name} logo">`;
    }

    card.innerHTML = `
      ${imageHTML}
      <h3>${member.name}</h3>
      <p>📍 ${member.address}</p>
      <p>📞 ${member.phone}</p>
      <p>✉️ ${member.email}</p>
      <a href="${member.website}" target="_blank">🌐 Website</a>
    `;

    membersContainer.appendChild(card);
  });
}

/* =============================
   GRID / LIST TOGGLE
============================= */
gridBtn.addEventListener('click', () => {
  membersContainer.classList.remove('list-view');
});

listBtn.addEventListener('click', () => {
  membersContainer.classList.add('list-view');
});

/* =============================
   HAMBURGER MENU
============================= */
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

/* =============================
   INIT
============================= */
getMembers();
