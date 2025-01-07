const navLinks = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('section');
function handleScroll() {
    const scrollY = window.scrollY;

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            section.classList.add('active');
            navLinks[index].classList.add('active');
        } else {
            section.classList.remove('active');
            navLinks[index].classList.remove('active');
        }
    });
}

window.addEventListener('scroll', handleScroll);