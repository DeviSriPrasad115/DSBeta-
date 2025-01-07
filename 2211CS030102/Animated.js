document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".section");
  
    const highlightNav = () => {
      let scrollPos = window.scrollY;
  
      sections.forEach((section, index) => {
        if (
          scrollPos >= section.offsetTop - section.offsetHeight * 0.3 &&
          scrollPos < section.offsetTop + section.offsetHeight * 0.7
        ) {
          navLinks.forEach(link => link.classList.remove("active"));
          navLinks[index].classList.add("active");
        }
      });
    };
  
    window.addEventListener("scroll", highlightNav);
  });
  