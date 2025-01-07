const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const steps = document.querySelectorAll('.step');

let currentStep = 1;

next.addEventListener('click', () => {
  currentStep++;
  if (currentStep > steps.length) {
    currentStep = steps.length;
  }
  updateProgress();
});

prev.addEventListener('click', () => {
  currentStep--;
  if (currentStep < 1) {
    currentStep = 1;
  }
  updateProgress();
});

function updateProgress() {
  steps.forEach((step, idx) => {
    if (idx < currentStep) {
      step.classList.add('active');
      step.classList.add('completed');
    } else {
      step.classList.remove('active');
      step.classList.remove('completed');
    }
  });

  progress.style.width =
    ((currentStep - 1) / (steps.length - 1)) * 100 + '%';

  prev.disabled = currentStep === 1;
  next.disabled = currentStep === steps.length;
}
