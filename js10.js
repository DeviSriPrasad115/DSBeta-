// Select DOM elements
const dropdown = document.getElementById('dropdown');
const selectedElement = document.querySelector('.dropdown-selected');
const menu = document.querySelector('.dropdown-menu');
const items = document.querySelectorAll('.dropdown-item');
const selectedValueDisplay = document.getElementById('selected-value');

// Toggle dropdown visibility
dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('show');
});

// Close dropdown when clicking outside
window.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('show');
    }
});

// Handle item selection
items.forEach(item => {
    item.addEventListener('click', () => {
        const value = item.getAttribute('data-value');
        selectedElement.textContent = value;
        selectedValueDisplay.textContent = `Selected: ${value}`;
        dropdown.classList.remove('show');
    });
});
