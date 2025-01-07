const progress = document.getElementById("progress");
const steps = document.querySelectorAll(".step");
const formSteps = document.querySelectorAll(".form-step");
const nextBtns = document.querySelectorAll(".next-btn");
const prevBtns = document.querySelectorAll(".prev-btn");
const multiStepForm = document.getElementById("multiStepForm");
const successMessage = document.getElementById("successMessage");

let currentStep = 0;

// Update Progress Bar and Form Steps
function updateSteps() {
  // Update progress bar width
  progress.style.width = `${(currentStep / (steps.length - 1)) * 100}%`;

  // Update step indicators
  steps.forEach((step, index) => {
    if (index <= currentStep) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });

  // Update form step visibility
  formSteps.forEach((formStep, index) => {
    formStep.classList.toggle("active", index === currentStep);
  });
}

// Handle Next Button
nextBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    currentStep = Math.min(currentStep + 1, steps.length - 1);
    updateSteps();
  });
});

// Handle Previous Button
prevBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    currentStep = Math.max(currentStep - 1, 0);
    updateSteps();
  });
});

// Handle Form Submission
multiStepForm.addEventListener("submit", e => {
  e.preventDefault(); // Prevent the default form submission behavior

  // Hide the form and show the success message
  multiStepForm.style.display = "none";
  successMessage.style.display = "block";
});

// Initialize the form
updateSteps();
