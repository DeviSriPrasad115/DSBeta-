// Select DOM elements
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');
const modal = document.getElementById('modal');

// Open modal function
openModalBtn.addEventListener('click', () => {
    modal.classList.add('show');
});

// Close modal function
closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('show');
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});
