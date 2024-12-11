// Select all navbar links
const navLinks = document.querySelectorAll('.navbar .nav-item a');

// Add hover effects using JavaScript
navLinks.forEach((link) => {
    // Add event listener for mouseenter (hover)
    link.addEventListener('mouseenter', () => {
        link.style.color = '#000'; // Change text color to black
        link.style.fontSize = '15px'; // Increase font size
        link.style.fontWeight = 'bold'; // Make text bold
    });

    // Add event listener for mouseleave (exit hover)
    link.addEventListener('mouseleave', () => {
        link.style.color = '#333'; // Revert text color to default
        link.style.fontSize = '16px'; // Revert font size to default
        link.style.fontWeight = 'normal'; // Revert text weight to default
    });
});