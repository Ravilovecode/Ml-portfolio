document.addEventListener('DOMContentLoaded', function() {
    const typingContainer = document.getElementById('typing-container');
    const texts = [
        "Welcome to my ML portfolio.",
        "I specialize in leveraging data and AI to solve complex problems.",
        "From enhancing predictive accuracy to deploying scalable solutions,",
        "I'm dedicated to pushing the boundaries of intelligent systems.",
        "Explore my projects to see AI innovation in action."
    ];

    let delay = 0;

    texts.forEach((text, index) => {
        const paragraph = document.createElement('p');
        typingContainer.appendChild(paragraph);

        for (let i = 0; i <= text.length; i++) {
            setTimeout(function() {
                paragraph.textContent = text.slice(0, i);
            }, delay);
            delay += 20; // Adjust typing speed here
        }
        delay += 500; // Delay between paragraphs
    });

    // Initialize Bootstrap Carousel manually
    var carousel = new bootstrap.Carousel(document.getElementById('projectCarousel'), {
        interval: false, // Disable auto-rotation
        wrap: true // Enable looping
    });

    // Example: Adding carousel items dynamically (replace with your actual data)
    var projectList = document.getElementById('project-list');

    // Sample data
    var projects = [
        { title: 'Project 1', description: 'Description of Project 1' },
        { title: 'Project 2', description: 'Description of Project 2' },
        { title: 'Project 3', description: 'Description of Project 3' },
        { title: 'Project 4', description: 'Description of Project 4' }
    ];

    projects.forEach((project, index) => {
        var carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');
        if (index === 0) {
            carouselItem.classList.add('active');
        }
        carouselItem.innerHTML = `
            <h4>${project.title}</h4>
            <p>${project.description}</p>
        `;
        projectList.appendChild(carouselItem);
    });

    var carousel = new bootstrap.Carousel(document.getElementById('projectCarousel'), {
        interval: 5000, // Adjust interval in milliseconds (e.g., 5000 for 5 seconds)
        wrap: true // Enable looping
    });
});
