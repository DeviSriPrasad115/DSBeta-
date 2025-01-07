let currentStep = 1;
const totalSteps = 3;

function showStep(step) {
  const steps = document.querySelectorAll('.form-step');
  steps.forEach(s => s.classList.remove('active'));
  document.getElementById(`step-${step}`).classList.add('active');
  
  // Update progress bar
  const progress = (step - 1) / (totalSteps - 1) * 100;
  document.getElementById('progress-bar').style.width = progress + '%';
}

function nextStep(step) {
  if (step < totalSteps) {
    currentStep++;
    showStep(currentStep);
  }
}

function prevStep(step) {
  if (step > 1) {
    currentStep--;
    showStep(currentStep);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  showStep(currentStep);
});
