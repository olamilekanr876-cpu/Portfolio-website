

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
        image: "calculator.png",
        link: "https://github.com/yourusername/calculator"
    },

    {
        title: "Todo App",
        description: "Task management application",
        image: "todo.png",
        link: "https://github.com/yourusername/todo-app"
    },

    {
        title: "Weather App",
        description: "Uses Fetch API to display weather",
        image: "weather.png",
        link: "https://github.com/yourusername/weather-app"
    }
];



for (let i = 0; i < projects.length; i++) {

    projectContainer.innerHTML += `

    <div class="project-card">

        <img src="${projects[i].image}" alt="${projects[i].title}">

        <h3>${projects[i].title}</h3>

        <p>${projects[i].description}</p>

        <a href="${projects[i].link}" target="_blank">
            View Project
        </a>

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
i
    `;

}

