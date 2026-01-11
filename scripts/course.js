const courses = [
    { title: "WDD231 - Web Frontend Development I", completed: false, credits: 2, category: "wdd" },
    { title: "WD131 - Dynamic Web Fundamentals", completed: true, credits: 2, category: "wdd" },
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
    
    const filteredCourses = filter === "all" 
        ? courses 
        : courses.filter(course => course.category === filter);

    filteredCourses.forEach(course => {
        const card = document.createElement("div");
        card.classList.add("course-card");
        if (course.completed) card.classList.add("completed");
        
        card.innerHTML = `
            <h3>${course.title}</h3>
            <p>Credits: ${course.credits}</p>
        `;
        coursesContainer.appendChild(card);
    });

   
    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    totalCreditsElement.textContent = `Total Credits: ${totalCredits}`;
}


filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        displayCourses(btn.dataset.filter);
    });
});


displayCourses();