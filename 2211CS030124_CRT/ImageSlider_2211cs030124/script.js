let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  if (index >= slides.length) index = 0;
  if (index < 0) index = slides.length - 1;

  document.querySelector('.slider').style.transform = `translateX(-${index * 100}%)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');

  currentIndex = index;
}

function autoPlay() {
  setInterval(() => {
    showSlide(currentIndex + 1);
  }, 3000); // Change image every 3 seconds
}

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const index = parseInt(dot.dataset.index);
    showSlide(index);
  });
});

showSlide(currentIndex);
autoPlay();
