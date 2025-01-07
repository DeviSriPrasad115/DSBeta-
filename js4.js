// Select form elements
const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

// Regular expression for validating email
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

// Validate email
emailInput.addEventListener('input', () => {
    const emailValue = emailInput.value;
    if (!emailRegex.test(emailValue)) {
        emailInput.classList.add('error');
        emailInput.classList.remove('success');
        emailError.textContent = 'Please enter a valid email address.';
    } else {
        emailInput.classList.remove('error');
        emailInput.classList.add('success');
        emailError.textContent = 'Looks good!';
    }
});

// Validate password (simple check for length)
passwordInput.addEventListener('input', () => {
    const passwordValue = passwordInput.value;
    if (passwordValue.length < 6) {
        passwordInput.classList.add('error');
        passwordInput.classList.remove('success');
        passwordError.textContent = 'Password must be at least 6 characters long.';
    } else {
        passwordInput.classList.remove('error');
        passwordInput.classList.add('success');
        passwordError.textContent = 'Strong password!';
    }
});

// Optional: Prevent form submission if there are errors
form.addEventListener('submit', (e) => {
    if (!emailRegex.test(emailInput.value) || passwordInput.value.length < 6) {
        e.preventDefault();
        alert('Please correct the errors before submitting.');
    }
});
