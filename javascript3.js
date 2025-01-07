let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;


function showSlide(index) {
  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }
  const slideWidth = slides[0].clientWidth;
  document.querySelector('.slider').style.transform = `translateX(-${slideWidth * currentSlide}px)`;

  // Update active dot
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentSlide].classList.add('active');
}


dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index);
  });
});

// Auto-play function
function autoPlay() {
  setInterval(() => {
    showSlide(currentSlide + 1);
  }, 3000); // Change slide every 3 seconds
}

// Initialize first slide and start autoplay
showSlide(currentSlide);
autoPlay();
