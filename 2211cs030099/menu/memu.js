document.addEventListener('DOMContentLoaded', function () {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const content = this.nextElementSibling;
            const arrow = this.querySelector('.arrow');
            const isOpen = content.classList.contains('open');

            // Close all other accordion items
            document.querySelectorAll('.accordion-content').forEach(item => {
                if (item !== content) {
                    item.classList.remove('open');
                }
            });

            // Reset all arrow icons
            document.querySelectorAll('.accordion-header .arrow').forEach(icon => {
                if (icon !== arrow) {
                    icon.style.transform = 'rotate(0deg)';
                }
            });

            // Toggle the clicked item
            if (!isOpen) {
                content.classList.add('open');
                arrow.style.transform = 'rotate(180deg)';
            } else {
                content.classList.remove('open');
                arrow.style.transform = 'rotate(0deg)';
            }
        });
    });
});