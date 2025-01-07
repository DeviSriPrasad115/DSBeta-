const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
const totalSlides = dots.length;

function updateSlider(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function autoPlay() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider(currentIndex);
}

dots.forEach(dot => {
    dot.addEventListener('click', () => {
    currentIndex = parseInt(dot.dataset.index);
    updateSlider(currentIndex);
});
});

updateSlider(currentIndex); // Initialize
setInterval(autoPlay, 3000); // Auto-play every 3 seconds