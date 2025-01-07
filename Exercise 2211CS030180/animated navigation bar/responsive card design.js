const card = document.getElementById('card');
const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', () => {
card.classList.toggle('flipped');
});
