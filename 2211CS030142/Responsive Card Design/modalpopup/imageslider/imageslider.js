const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let currentSlide = 0;
const totalSlides = slides.length;

const goToSlide = (slideIndex) => {
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[slideIndex].classList.add('active');
};

const autoPlay = () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  goToSlide(currentSlide);
};

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    currentSlide = parseInt(dot.getAttribute('data-slide'));
    goToSlide(currentSlide);
  });
});

goToSlide(0);

let slideInterval = setInterval(autoPlay, 3000);
r
slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
slider.addEventListener('mouseleave', () => slideInterval = setInterval(autoPlay, 3000));
