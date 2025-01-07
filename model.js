// Get DOM elements
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');

// Open modal
openModalBtn.addEventListener('click', () => {
  modal.style.display = 'flex'; // Show modal with flex layout
});

// Close modal
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none'; // Hide modal
});

// Close modal when clicking outside of content
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});