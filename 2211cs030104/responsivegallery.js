const filters = document.querySelectorAll('.filters button');
const images = document.querySelectorAll('.img-item');

filters.forEach(button => {
  button.addEventListener('click', () => {
    const filterValue = button.getAttribute('data-filter');

    filters.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    images.forEach(image => {
      if (filterValue === 'all') {
        image.style.display = 'block';
      } else {
        image.style.display = image.classList.contains(filterValue) ? 'block' : 'none';
      }
    });
  });
});