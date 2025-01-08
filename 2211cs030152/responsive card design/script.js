const toggleButton = document.getElementById('toggle-btn');
const card = document.getElementById('card');

toggleButton.addEventListener('click', () => {
  card.classList.toggle('flipped');
});
