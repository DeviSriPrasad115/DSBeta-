const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');

    header.addEventListener('click', () => {
        item.classList.toggle('active');
        const arrow = header.querySelector('.arrow');
        arrow.textContent = item.classList.contains('active') ? '-' : '+';
    });
});