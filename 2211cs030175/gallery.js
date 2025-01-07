const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterBtns.forEach(button => {
    button.addEventListener('click', (event) => {
        const filterValue = event.target.getAttribute('data-filter');
        filterGallery(filterValue);
    });
});

function filterGallery(filterValue) {
    galleryItems.forEach(item => {
        if (filterValue === 'all') {
            item.style.display = 'block';
        } else if (item.classList.contains(filterValue)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}