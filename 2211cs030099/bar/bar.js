document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("multi-step-form");
    const steps = document.querySelectorAll(".step");
    const progress = document.getElementById("progress");
    const stepContents = document.querySelectorAll(".step-content");
    const nextButtons = document.querySelectorAll(".next-btn");
    const prevButtons = document.querySelectorAll(".prev-btn");

    let currentStep = 1;

    // Update the progress bar and display the current step
    function updateStep() {
        stepContents.forEach(content => {
            content.style.display = content.dataset.step == currentStep ? "block" : "none";
        });

        steps.forEach((step, index) => {
            if (index < currentStep) {
                step.classList.add("active");
            } else {
                step.classList.remove("active");
            }
        });

        const progressWidth = ((currentStep - 1) / (steps.length - 1)) * 100;
        progress.style.width = `${progressWidth}%`;
    }

    // Validate fields for the current step
    function validateStep() {
        const currentStepContent = document.querySelector(`.step-content[data-step="${currentStep}"]`);
        const inputs = currentStepContent.querySelectorAll("input[required]");

        for (const input of inputs) {
            if (!input.value.trim()) {
                alert("Please fill out all required fields.");
                input.focus();
                return false;
            }

            if (input.type === "email" && !/\S+@\S+\.\S+/.test(input.value)) {
                alert("Please enter a valid email address.");
                input.focus();
                return false;
            }

            if (input.type === "password" && input.value.length < 6) {
                alert("Password must be at least 6 characters long.");
                input.focus();
                return false;
            }
        }

        return true;
    }

    // Handle Next button clicks
    nextButtons.forEach(button => {
        button.addEventListener("click", () => {
            if (validateStep()) {
                currentStep++;
                if (currentStep > steps.length) currentStep = steps.length;
                updateStep();
            }
        });
    });

    // Handle Previous button clicks
    prevButtons.forEach(button => {
        button.addEventListener("click", () => {
            currentStep--;
            if (currentStep < 1) currentStep = 1;
            updateStep();
        });
    });

    // Handle form submission
    form.addEventListener("submit", (event) => {
        if (!validateStep()) {
            event.preventDefault();
        } else {
            alert("Form submitted successfully!");
        }
    });

    // Initialize the form
    updateStep();
});
