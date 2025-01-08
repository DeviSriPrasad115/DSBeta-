let currentStep = 1;

function updateProgress() {
  const steps = document.querySelectorAll('.step');
  const progressBar = document.getElementById('progressBar');
  
  steps.forEach((step, index) => {
    if (index < currentStep) {
      step.classList.add('active');
    } else {
      step.classList.remove('active');
    }
  });

  const progressPercentage = ((currentStep - 1) / (steps.length - 1)) * 100;
  progressBar.style.width = progressPercentage + '%';
}

function nextStep() {
  const steps = document.querySelectorAll('.form-step');
  if (currentStep < steps.length) {
    steps[currentStep - 1].classList.remove('active');
    currentStep++;
    steps[currentStep - 1].classList.add('active');
    updateProgress();
  }
}

function prevStep() {
  const steps = document.querySelectorAll('.form-step');
  if (currentStep > 1) {
    steps[currentStep - 1].classList.remove('active');
    currentStep--;
    steps[currentStep - 1].classList.add('active');
    updateProgress();
  }
}
