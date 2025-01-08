// Get all accordion headers
const accordionHeaders = document.querySelectorAll('.accordion-header');

// Add click event listener to each accordion header
accordionHeaders.forEach(header => {
  header.addEventListener('click', function() {
    // Get the parent accordion item of the clicked header
    const item = this.parentElement;

    // Toggle the 'active' class on the clicked item
    item.classList.toggle('active');
  });
});

