// JavaScript for handling the accordion functionality
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');

    header.addEventListener('click', () => {
        // Toggle the active class on the current item
        item.classList.toggle('active');

        // Update the arrow icon
        const arrow = header.querySelector('.arrow');
        arrow.textContent = item.classList.contains('active') ? '-' : '+';
    });
});
