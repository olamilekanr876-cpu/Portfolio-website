

    const projectBtn = document.getElementById("projectBtn");

projectBtn.addEventListener("click", function () {

    const projectsSection = document.getElementById("projects");

    projectsSection.scrollIntoView({
        behavior: "smooth"
    });

});

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");


menuBtn.addEventListener("click", function(){

    navLinks.classList.toggle("active");

});



const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const message = document.getElementById("message").value;

    if(name === "" || email === "" || message === ""){

        alert("Please fill in all fields.");

    }else{

        alert("Message sent successfully!");

        contactForm.reset();

    }

});
const projects = [
    {
        title: "Calculator",
        description: "Built with HTML, CSS and JavaScript",
        image: "images/calculator.png",
        demo: "#",
        link: "https://github.com/olamilekanr876-cpu/Portfolio-website"
    },

    {
        title: "Todo App",
        description: "Task management application built with HTML, CSS and JavaScript.",
        image: "images/todo.png",
        demo: "https://olamilekanr876-cpu.github.io/Todo-App/",
        link: "https://github.com/olamilekanr876-cpu/Todo-App"
    },

    {
        title: "Weather App",
        description: "Uses Fetch API to display weather",
        image: "images/weather.png",
        demo: "#",
        link: "https://github.com/olamilekanr876-cpu/Portfolio-website"
    }
];

const projectContainer = document.getElementById("projectContainer");



for (let i = 0; i < projects.length; i++) {
projectContainer.innerHTML += `
<div class="project-card">

    <img src="${projects[i].image}" alt="${projects[i].title}" class="project-image">

    <h3>${projects[i].title}</h3>

    <p>${projects[i].description}</p>

    <div class="project-buttons">
        <a href="${projects[i].demo}" target="_blank" class="project-btn">
            Live Demo
        </a>

        <a href="${projects[i].link}" target="_blank" class="project-btn">
            View Code
        </a>
    </div>

</div>
`;
}

const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Git",
    "GitHub"
];


const skillsContainer = document.getElementById("skillsContainer");


for(let i = 0; i < skills.length; i++){

    skillsContainer.innerHTML += `

        <div class="skill-card">
            ${skills[i]}
        </div>

    `;

}

