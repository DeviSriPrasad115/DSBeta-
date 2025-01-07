// Exercise 1: Animated Navigation Bar
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(link => link.classList.remove('active'));
    link.classList.add('active');
  });
});

// Exercise 2: Image Slider with Dots
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelector('#dots');

slides.forEach((_, index) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  dot.addEventListener('click', () => goToSlide(index));
  dots.appendChild(dot);
});

function goToSlide(index) {
  if (index >= slides.length) currentSlide = 0;
  else if (index < 0) currentSlide = slides.length - 1;
  else currentSlide = index;

  document.querySelector('.slider').style.transform = `translateX(-${currentSlide * 100}%)`;
  const allDots = document.querySelectorAll('.dot');
  allDots.forEach(dot => dot.classList.remove('active'));
  allDots[currentSlide].classList.add('active');
}

setInterval(() => goToSlide(currentSlide + 1), 3000);

// Exercise 3: Custom Dropdown Menu
const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownMenu = document.getElementById('dropdownMenu');
const selectedValue = document.getElementById('selectedValue');

dropdownBtn.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
});

dropdownMenu.addEventListener('click', (e) => {
  if (e.target.classList.contains('dropdown-item')) {
    const value = e.target.dataset.value;
    selectedValue.textContent = `Selected: ${value}`;
    dropdownMenu.classList.remove('show');
  }
});

// Exercise 4: Multi-Step Form with Progress Bar
const steps = document.querySelectorAll('.form-step');
const nextBtns = document.querySelectorAll('.next-btn');
const prevBtns = document.querySelectorAll('.prev-btn');
const progress = document.getElementById('progress');
const form = document.getElementById('multiStepForm');
const successMessage = document.getElementById('successMessage');

let currentStep = 0;

nextBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (currentStep < steps.length - 1) {
      steps[currentStep].classList.remove('active');
      currentStep++;
      steps[currentStep].classList.add('active');
      updateProgress();
    }
  });
});

prevBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (currentStep > 0) {
      steps[currentStep].classList.remove('active');
      currentStep--;
      steps[currentStep].classList.add('active');
      updateProgress();
    }
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.style.display = 'none';
  successMessage.style.display = 'block';
});

function updateProgress() {
  progress.style.width = `${(currentStep / (steps.length - 1)) * 100}%`;
  document.querySelectorAll('.step').forEach((step, index) => {
    if (index <= currentStep) step.classList.add('active');
    else step.classList.remove('active');
  });
}

