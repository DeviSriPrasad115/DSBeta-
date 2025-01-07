function filterSelection(category) {
    const items = document.querySelectorAll('.gallery-item');
    
    if (category === 'all') {
        items.forEach(item => item.style.display = 'block');
    } else {
        items.forEach(item => {
            if (item.classList.contains(category)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    const buttons = document.querySelectorAll('.filter-buttons button');
    buttons.forEach(button => button.classList.remove('active'));

    const activeButton = Array.from(buttons).find(button => button.textContent.toLowerCase().includes(category));
    if (activeButton) activeButton.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    filterSelection('all'); 
});