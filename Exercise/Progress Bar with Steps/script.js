// Progress Bar with Steps Functionality
document.addEventListener("DOMContentLoaded", function () {
    const formSteps = document.querySelectorAll(".form-step");
    const progressBar = document.getElementById("progress");
    const nextButtons = document.querySelectorAll(".next-btn");
    const prevButtons = document.querySelectorAll(".prev-btn");
    const steps = document.querySelectorAll(".step");
    let currentStep = 0;
  
    // Function to update the progress bar and steps
    function updateProgress() {
      // Update progress bar width
      const progressPercentage = (currentStep / (formSteps.length - 1)) * 100;
      progressBar.style.width = `${progressPercentage}%`;
  
      // Update step indicators
      steps.forEach((step, index) => {
        if (index <= currentStep) {
          step.classList.add("active");
        } else {
          step.classList.remove("active");
        }
      });
    }
  
    // Function to show the current step
    function showStep(stepIndex) {
      formSteps.forEach((step, index) => {
        if (index === stepIndex) {
          step.classList.add("active");
        } else {
          step.classList.remove("active");
        }
      });
    }
  
    // Next button functionality
    nextButtons.forEach((button) => {
      button.addEventListener("click", function () {
        if (currentStep < formSteps.length - 1) {
          currentStep++;
          showStep(currentStep);
          updateProgress();
        }
      });
    });
  
    // Previous button functionality
    prevButtons.forEach((button) => {
      button.addEventListener("click", function () {
        if (currentStep > 0) {
          currentStep--;
          showStep(currentStep);
          updateProgress();
        }
      });
    });
  
    // Submit button functionality
    const form = document.getElementById("multiStepForm");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Form submitted successfully!");
    });
  
    // Initialize the first step
    showStep(currentStep);
    updateProgress();
  });