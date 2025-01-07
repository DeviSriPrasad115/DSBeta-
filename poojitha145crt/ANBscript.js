// Get all navigation links and sections
const navLinks = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('section');

// Function to handle active section highlighting on scroll
function handleScroll() {
    const scrollY = window.scrollY;

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        // If the section is in the viewport
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            // Add 'active' class to section
            section.classList.add('active');

            // Add 'active' class to corresponding navbar link
            navLinks[index].classList.add('active');
        } else {
            // Remove 'active' class from section and navbar link
            section.classList.remove('active');
            navLinks[index].classList.remove('active');
        }
    });
}

// Call the handleScroll function when the page scrolls
window.addEventListener('scroll', handleScroll);
