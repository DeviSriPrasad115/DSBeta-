const flipCard = document.getElementById('flipCard');
const flipBackBtn = document.getElementById('flipBackBtn');

document.querySelector('.card-front .info-btn').addEventListener('click', () => {
  flipCard.classList.add('flipped');
});

flipBackBtn.addEventListener('click', () => {
  flipCard.classList.remove('flipped');
});
