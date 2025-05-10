// Initialize variables
const formSteps = document.querySelectorAll('.form-step');
const nextButtons = document.querySelectorAll('.next-btn');
const prevButtons = document.querySelectorAll('.prev-btn');
const progressBar = document.getElementById('progress-bar');
const multiStepForm = document.getElementById('multiStepForm');
let currentStep = 0;

// Display the first step
showStep(currentStep);

// Function to show the current step
function showStep(step) {
  formSteps.forEach((formStep, index) => {
    if (index === step) {
      formStep.style.display = 'block';
    } else {
      formStep.style.display = 'none';
    }
  });
  
  // Update progress bar
  const progress = ((step + 1) / formSteps.length) * 100;
  progressBar.style.width = `${progress}%`;
  
  // Enable/Disable next button
  if (step === formSteps.length - 1) {
    document.querySelector('.next-btn').disabled = true;
  } else {
    document.querySelector('.next-btn').disabled = false;
  }
}

// Handle Next Button Click
nextButtons.forEach(button => {
  button.addEventListener('click', () => {
    currentStep++;
    showStep(currentStep);
  });
});

// Handle Previous Button Click
prevButtons.forEach(button => {
  button.addEventListener('click', () => {
    currentStep--;
    showStep(currentStep);
  });
});

// Handle Form Submission
multiStepForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Form Submitted Successfully!');
  // Reset form after submission
  multiStepForm.reset();
  currentStep = 0;
  showStep(currentStep);
});
