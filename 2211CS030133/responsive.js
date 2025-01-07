const card = document.getElementById('card');
const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', () => {
    card.classList.toggle('flipped');
});
