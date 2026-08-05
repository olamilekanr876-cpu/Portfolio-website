

    const projectBtn = document.getElementById("projectBtn");

if(projectBtn){
    projectBtn.addEventListener("click", function () {

        const projectsSection = document.getElementById("projects");

        projectsSection.scrollIntoView({
            behavior: "smooth"
        });

    });
}
const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");


if(menuBtn){
    menuBtn.addEventListener("click", function(){

        navLinks.classList.toggle("active");

    });
}



const contactForm = document.getElementById("contactForm");

if(contactForm){

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

}
const projects = [
   {
    title: "Calculator",
    description: "A responsive calculator built with HTML, CSS and JavaScript. Supports keyboard input and basic arithmetic operations.",
    image: "images/calculator.png",
    demo: "https://olamilekanr876-cpu.github.io/Calculator/",
    link: "https://github.com/olamilekanr876-cpu/Calculator"
},

    {
        title: "Todo App",
        description: "A task management application that allows users to add and delete tasks dynamically using JavaScript DOM manipulation.",
        image: "images/todo.png",
        demo: "https://olamilekanr876-cpu.github.io/Todo-App/",
        link: "https://github.com/olamilekanr876-cpu/Todo-App"
    },

    {
        title: "Weather App",
        description: "A weather application that uses the Fetch API to retrieve and display real-time weather information for any city.",
        image: "images/weather.png",
        demo: "https://olamilekanr876-cpu.github.io/Weather-App/",
        link: "https://github.com/olamilekanr876-cpu/Weather-App"
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
    {
        title: "Frontend",
        items: [
            "HTML5",
            "CSS3",
            "JavaScript (ES6)"
        ]
    },

    {
        title: "Version Control",
        items: [
            "Git",
            "GitHub"
        ]
    },

    {
        title: "Tools",
        items: [
            "VS Code",
            "Chrome DevTools"
        ]
    }
];

const skillsContainer = document.getElementById("skillsContainer");

skills.forEach(skill => {

    let items = "";

    skill.items.forEach(item => {
        items += `<li>${item}</li>`;
    });

//     skillsContainer.innerHTML += `
// <div style="background:red;color:white;padding:20px;margin:20px;">
//     TEST SKILL
// </div>
// `;

    skillsContainer.innerHTML += `
        <div class="skill-card">
            <h3>${skill.title}</h3>

            <ul>
                ${items}
            </ul>
        </div>
    `;

});
