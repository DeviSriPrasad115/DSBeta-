const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const emailSuccess = document.getElementById('emailSuccess');
const passwordSuccess = document.getElementById('passwordSuccess');

emailInput.addEventListener('input', () => {
    const email = emailInput.value;
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailInput.classList.remove('error-border');
        emailInput.classList.add('success-border');
        emailError.style.display = 'none';
        emailSuccess.style.display = 'block';
    } else {
        emailInput.classList.add('error-border');
        emailInput.classList.remove('success-border');
        emailError.style.display = 'block';
        emailSuccess.style.display = 'none';
    }
});

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    if (password.length >= 6) {
        passwordInput.classList.remove('error-border');
        passwordInput.classList.add('success-border');
        passwordError.style.display = 'none';
        passwordSuccess.style.display = 'block';
    } else {
        passwordInput.classList.add('error-border');
        passwordInput.classList.remove('success-border');
        passwordError.style.display = 'block';
        passwordSuccess.style.display = 'none';
    }
});

const form = document.getElementById('loginForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
});