// Get all accordion headers
const accordionHeaders = document.querySelectorAll('.accordion-header');

// Add click event listener to each accordion header
accordionHeaders.forEach(header => {
  header.addEventListener('click', function() {
    // Toggle the active class on the clicked header and content
    const content = this.nextElementSibling;
    const arrow = this.querySelector('.arrow');

    // Close other sections when one is opened
    document.querySelectorAll('.accordion-content').forEach(otherContent => {
      if (otherContent !== content) {
        otherContent.classList.remove('active');
      }
    });

    // Toggle the active class on the clicked content
    content.classList.toggle('active');
    // Toggle the arrow direction
    arrow.classList.toggle('active');
  });
});
