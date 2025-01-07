// Get modal elements
const modal = document.getElementById('myModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const closeModalBtn2 = document.getElementById('closeModalBtn2');

// Open modal when the button is clicked
openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
  modal.style.opacity = 1;  // Ensure opacity is set to 1 for transition effect
});

// Close modal when the user clicks the "x" (span) or close button
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when the second close button is clicked
closeModalBtn2.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close the modal if the user clicks anywhere outside the modal content
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
