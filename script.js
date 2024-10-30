document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const headerSection = document.querySelector('#header');
    const projectButtons = document.querySelectorAll('.details-button');
    const projectDetailsSection = document.querySelector('#project-details');
    const projectsSection = document.querySelector('#projects'); // Main Projects section

    // Hide all sections except the header on page load
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    // Show the header section by default
    headerSection.style.display = 'flex';

    // Navbar link click handler
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Hide all sections, then show the target section
            sections.forEach(section => section.classList.add('hidden'));
            targetSection.classList.remove('hidden');

            // Special case for header section display
            headerSection.style.display = targetSection.id === 'header' ? 'flex' : 'none';
        });
    });

    // Project Details button click handler
    projectButtons.forEach(button => {
        button.addEventListener('click', function () {
            const projectId = this.getAttribute('onclick').match(/'([^']+)'/)[1];

            // Hide all sections and show project details section
            sections.forEach(section => section.classList.add('hidden'));
            projectDetailsSection.classList.remove('hidden');
            headerSection.style.display = 'none';

            // Hide all project details and show only the selected project's details
            document.querySelectorAll('.project-details-content').forEach(detail => detail.classList.add('hidden'));
            document.querySelector(`#${projectId}-details`).classList.remove('hidden');
        });
    });

    // Hide project details and return to Projects section
    window.hideProjectDetails = function () {
        projectDetailsSection.classList.add('hidden'); // Hide the project details section
        projectsSection.classList.remove('hidden'); // Show the main Projects section
    };
});
