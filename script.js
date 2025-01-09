const sections = document.querySelectorAll('.content > div');
const buttons = document.querySelectorAll('.nav-btn');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        sections.forEach(section => section.style.display = 'none');
        sections[index].style.display = 'block';
    });
});
document.querySelector('.close-btn').addEventListener('click', () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = sidebar.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('aboutBtn').addEventListener('click', () => switchSection('about'));
document.getElementById('educationBtn').addEventListener('click', () => switchSection('education'));
document.getElementById('skillsBtn').addEventListener('click', () => switchSection('skills'));
document.getElementById('contactBtn').addEventListener('click', () => switchSection('contact'));

function switchSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.add('hidden'));
    document.getElementById(sectionId).classList.remove('hidden');
}

document.querySelector('.close-btn').addEventListener('click', () => {
    document.querySelector('.sidebar').style.display = 'none';
});


function setActive(element) {
    const buttons = document.querySelectorAll('.left-section button');
    buttons.forEach(button => button.classList.remove('active')); // Remove 'active' from all buttons
    element.classList.add('active'); // Add 'active' to the clicked button
}

// Adding double-click event to all buttons
document.querySelectorAll('.left-section button').forEach(button => {
    button.addEventListener('dblclick', function() {
        setActive(this); // Call setActive function on double-click
    });
});