const courses = [
    { title: "WDD231 - Web Frontend Development I", completed: false, credits: 2, category: "wdd" },
    { title: "WDD131 - Dynamic Web Fundamentals", completed: true, credits: 2, category: "wdd" },
    { title: "WDD130 - Web fundamental", completed: true, credits: 2, category: "wdd" },
    { title: "CSE110 - Introduction to Programming", completed: true, credits: 2, category: "cse" },
    { title: "CSE111 - Programming with Functions", completed: true, credits: 2, category: "cse" },
    { title: "CSE210 - Programming with Classes", completed: false, credits: 2, category: "cse" }
];

const coursesContainer = document.getElementById("courses");
const totalCreditsElement = document.getElementById("total-credits");
const filterButtons = document.querySelectorAll(".filter-btn");

function displayCourses(filter = "all") {
    coursesContainer.innerHTML = "";
    let filteredCourses = courses;

    if (filter !== "all") {
        filteredCourses = courses.filter(course => course.category === filter);
    }

    filteredCourses.sort((a, b) => a.title.localeCompare(b.title));

    filteredCourses.forEach(course => {
        const card = document.createElement("div");
        card.classList.add("course-card");
        if (course.completed) card.classList.add("completed");
        card.innerHTML = `
            <h3>${course.title}</h3>
            <p>Credits: ${course.credits}</p>
            <p>Status: ${course.completed ? "Completed" : "Pending"}</p>
        `;
        coursesContainer.appendChild(card);
    });

    // Calcular el total de créditos de los cursos visibles
    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    totalCreditsElement.textContent = `Total Credits: ${totalCredits}`;
}

// Mostrar todos los cursos al cargar
displayCourses();

// Configurar los botones de filtro
filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        displayCourses(btn.dataset.filter);
    });
});
