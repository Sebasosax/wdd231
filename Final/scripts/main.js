// mains.js
document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav ul.main-nav');

    if (hamburger && nav) {
  
        hamburger.addEventListener('click', () => {
            const expanded = hamburger.getAttribute('aria-expanded') === 'true';
            hamburger.setAttribute('aria-expanded', !expanded);
            nav.classList.toggle('show');
        });
    }


    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !nav.contains(e.target) && nav.classList.contains('show')) {
            nav.classList.remove('show');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });

    const currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll('nav ul.main-nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.setAttribute('aria-current', 'page');
        } else {
            link.removeAttribute('aria-current');
        }
    });
});
