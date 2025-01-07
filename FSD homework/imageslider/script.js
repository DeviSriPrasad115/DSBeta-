const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;
let interval;

function updateSlider(index) {
  const offset = -index * 100;
  slides.style.transform = `translateX(${offset}%)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

function goToSlide(index) {
  currentIndex = index;
  updateSlider(index);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % dots.length;
  updateSlider(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + dots.length) % dots.length;
  updateSlider(currentIndex);
}

function startAutoPlay() {
  interval = setInterval(nextSlide, 3000);
}

function stopAutoPlay() {
  clearInterval(interval);
}

// Dot click event
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const index = parseInt(dot.getAttribute('data-index'));
    goToSlide(index);
  });
});

// Navigation button events
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Autoplay functionality
startAutoPlay();

// Stop autoplay on hover
const slider = document.querySelector('.slider');
slider.addEventListener('mouseenter', stopAutoPlay);
slider.addEventListener('mouseleave', startAutoPlay);
