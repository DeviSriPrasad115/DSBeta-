document.addEventListener("DOMContentLoaded", function () {
    const steps = document.querySelectorAll(".step");
    const progressBar = document.querySelector(".indicator");
    const progressListItems = document.querySelectorAll("#progressbar li");
    
    let currentStep = 0;

    function updateProgress() {
        const percent = (currentStep / (steps.length - 1)) * 100;
        progressBar.style.width = percent + "%";
        
        progressListItems.forEach((item, index) => {
            item.classList.toggle("active", index <= currentStep);
        });
        
        steps.forEach((step, index) => {
            step.classList.toggle("active", index === currentStep);
        });
        
        document.querySelector(".prev").disabled = currentStep === 0; // Disable previous button on first step
        document.querySelector(".next").disabled = currentStep === steps.length - 1; // Disable next button on last step
    }

    document.querySelectorAll(".next").forEach(button => {
        button.addEventListener("click", () => {
            if (currentStep < steps.length - 1) {
                currentStep++;
                updateProgress();
            }
        });
    });

    document.querySelectorAll(".prev").forEach(button => {
        button.addEventListener("click", () => {
            if (currentStep > 0) {
                currentStep--;
                updateProgress();
            }
        });
    });

    updateProgress(); // Initialize progress on load
});
