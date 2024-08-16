document.addEventListener('DOMContentLoaded', function() {
    // Contact Form Submission Handling
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Message sent! We will get back to you soon.');

        // Clear the form fields after submission
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    });

    // Dynamic Loading of Additional Projects
    const loadMoreProjectsButton = document.getElementById('loadMoreProjects');
    loadMoreProjectsButton.addEventListener('click', function() {
        // Create a new project element
        const newProject = document.createElement('div');
        newProject.classList.add('project');
        newProject.innerHTML = `
            <h3>Project 3: Dynamic Content</h3>
            <p>This project demonstrates dynamically adding content to the page using JavaScript. More details will be available soon.</p>
        `;

        // Append the new project to the projects section
        document.getElementById('projects').appendChild(newProject);

        // Optional: Add animation to the new project
        newProject.style.animation = 'fadeInUp 0.8s ease-in-out';

        // Hide the button after loading more projects
        loadMoreProjectsButton.style.display = 'none';
    });

    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Sticky Header on Scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // Dark Mode Toggle (Optional Feature)
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle Dark Mode';
    toggleButton.style.position = 'fixed';
    toggleButton.style.bottom = '20px';
    toggleButton.style.right = '20px';
    toggleButton.style.backgroundColor = '#333';
    toggleButton.style.color = '#fff';
    toggleButton.style.padding = '10px 20px';
    toggleButton.style.border = 'none';
    toggleButton.style.borderRadius = '5px';
    toggleButton.style.cursor = 'pointer';
    toggleButton.style.zIndex = '1000';

    document.body.appendChild(toggleButton);

    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains('dark-mode')) {
            toggleButton.textContent = 'Toggle Light Mode';
        } else {
            toggleButton.textContent = 'Toggle Dark Mode';
        }
    });

    // CSS for Dark Mode (to be added in the CSS file)
    /*
    .dark-mode {
        background-color: #121212;
        color: #ffffff;
    }

    .dark-mode header {
        background-color: #1e1e1e;
        color: #ffffff;
    }

    .dark-mode main {
        background-color: #1e1e1e;
        color: #ffffff;
    }

    .dark-mode footer {
        background-color: #1e1e1e;
        color: #ffffff;
    }

    .dark-mode nav ul li a {
        color: #ffffff;
    }
    */
});
