document.addEventListener("DOMContentLoaded", () => {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const form = document.getElementById("loginForm");

    const successMessage = document.getElementById("successMessage");
    const errorMessage = document.getElementById("errorMessage");

    // Real-time validation for email field
    emailInput.addEventListener("input", () => {
        if (emailInput.validity.valid) {
            emailInput.classList.remove("is-invalid");
            emailInput.classList.add("is-valid");
            errorMessage.innerHTML = ""; // Clear error message
        } else {
            emailInput.classList.remove("is-valid");
            emailInput.classList.add("is-invalid");
            errorMessage.innerHTML = "Please enter a valid email address.";
        }
    });

    // Real-time validation for password field
    passwordInput.addEventListener("input", () => {
        if (passwordInput.value.length >= 6) {
            passwordInput.classList.remove("is-invalid");
            passwordInput.classList.add("is-valid");
            successMessage.innerHTML = "Password looks good!";
        } else {
            passwordInput.classList.remove("is-valid");
            passwordInput.classList.add("is-invalid");
            successMessage.innerHTML = "";
        }
    });

    // Handle form submission
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (emailInput.validity.valid && passwordInput.value.length >= 6) {
            successMessage.innerHTML = "Form submitted successfully!";
            successMessage.style.color = "green";
            errorMessage.innerHTML = "";
        } else {
            successMessage.innerHTML = "";
            errorMessage.innerHTML = "Please fill out the form correctly!";
        }
    });
});
