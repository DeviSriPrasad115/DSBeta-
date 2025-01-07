document.querySelector('.card-button').addEventListener('mouseover', () => {
  document.querySelector('.card').classList.add('flipped');
});

document.querySelector('.card-button').addEventListener('mouseout', () => {
  document.querySelector('.card').classList.remove('flipped');
});


const slider = document.querySelector('.slider');
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');

let currentIndex = 0;

function changeSlide() {
  // Calculate the width of the slider
  const slideWidth = slider.offsetWidth;

  // Update the transform property to shift to the next slide
  slides.style.transform = `translateX(${-slideWidth * currentIndex}px)`;

  // Increment the index
  currentIndex++;

  // Reset to the first slide if at the end
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
}

// Set an interval to change slides every 3 seconds
setInterval(changeSlide, 3000);




// Form Validation
const email = document.getElementById('email');
const password = document.getElementById('password');
email.addEventListener('input', () => {
  const emailError = document.getElementById('emailError');
  emailError.textContent = email.value.includes('@') ? '' : 'Invalid email';
});
password.addEventListener('input', () => {
  const passwordError = document.getElementById('passwordError');
  passwordError.textContent = password.value.length >= 6 ? '' : 'Password too short';
});


function toggleModal() {
  const modal = document.getElementById('modal');
  modal.classList.toggle('show');
}
