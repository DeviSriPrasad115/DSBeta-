const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');


window.addEventListener('scroll', () => {
  let currentSection = '';

  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 50) {
      currentSection = section.getAttribute('id');
    }
  });

  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(currentSection)) {
      link.classList.add('active');
    }
  });
});