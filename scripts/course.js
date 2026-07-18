
// Course Array
const courses = [
  {
    subject: "CSE",
    number: 110,
    title: "Introduction to Programming",
    credits: 2,
    certificate: "Web and Computer Programming",
    description: "Basic programming concepts using variables, selection, loops, and functions.",
    technology: ["Python"],
    completed: true
  },
  {
    subject: "WDD",
    number: 130,
    title: "Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description: "HTML and CSS fundamentals.",
    technology: ["HTML", "CSS"],
    completed: true
  },
  {
    subject: "CSE",
    number: 111,
    title: "Programming with Functions",
    credits: 2,
    certificate: "Web and Computer Programming",
    description: "Functions, modules, and problem solving.",
    technology: ["Python"],
    completed: true
  },
  {
    subject: "WDD",
    number: 131,
    title: "Dynamic Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description: "JavaScript, DOM, responsive design.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: true
  },
  {
    subject: "CSE",
    number: 210,
    title: "Programming with Classes",
    credits: 2,
    certificate: "Web and Computer Programming",
    description: "Object-Oriented Programming.",
    technology: ["C#"],
    completed: false
  },
  {
    subject: "WDD",
    number: 231,
    title: "Frontend Web Development I",
    credits: 2,
    certificate: "Web and Computer Programming",
    description: "Modern responsive web development.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: false
  }
];
// HTML References
const courseContainer = document.querySelector("#course-container");
const totalCredits = document.querySelector("#credits");
const allButton = document.querySelector("#all");
const cseButton = document.querySelector("#cse");
const wddButton = document.querySelector("#wdd");

// Display Courses
function displayCourses(courseList) {
    courseContainer.innerHTML = "";
    courseList.forEach(course => {
        const card = document.createElement("div");
        card.className = course.completed ? "course completed" : "course";
        card.innerHTML = `
            <h3>${course.subject} ${course.number}</h3>
            <h4>${course.title}</h4>
            <p><strong>Credits:</strong> ${course.credits}</p>
            <p>${course.description}</p>
            <p><strong>Technology:</strong> ${course.technology.join(", ")}</p>
            <span class="status">
                ${course.completed ? "✔ Completed" : "In Progress"}
            </span>
        `;
        courseContainer.appendChild(card);
    });
    calculateCredits(courseList);
}
// Calculate Credits
function calculateCredits(courseList){
    const credits = courseList.reduce(
        (total, course) => total + course.credits,
        0
   );
    totalCredits.textContent = credits;
}
// Button Events
allButton.addEventListener("click", () => {
    displayCourses(courses);
});
wddButton.addEventListener("click", () => {
    const filtered = courses.filter(course =>
        course.subject === "WDD"
    );
    displayCourses(filtered);
});
cseButton.addEventListener("click", () => {
    const filtered = courses.filter(course =>
        course.subject === "CSE"
    );
    displayCourses(filtered);
});
// Initial Page Load
displayCourses(courses);