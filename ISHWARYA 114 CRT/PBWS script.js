let currentStep = 1;
const totalSteps = 3;

function showStep(step) {
    const steps = document.querySelectorAll('.step');
    steps.forEach((s) => s.classList.remove('active'));
    document.getElementById(`step-${step}`).classList.add('active');
    updateProgressBar(step);
}

function nextStep(step) {
    if (step < totalSteps) {
        currentStep = step + 1;
        showStep(currentStep);
    }
}

function prevStep(step) {
    if (step > 1) {
        currentStep = step - 1;
        showStep(currentStep);
    }
}

function submitForm() {
    alert("Your order has been placed successfully!");
    
}

function updateProgressBar(step) {
    const progress = document.querySelector('.progress');
    const percentage = (step / totalSteps) * 100;
    progress.style.width = `${percentage}%`;
}

// Initialize form
document.addEventListener('DOMContentLoaded', () => {
    showStep(currentStep);
});
