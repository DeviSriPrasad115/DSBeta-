
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');

// Real-time password validation
const passwordInput = document.getElementById('password');
const passwordError = document.getElementById('password-error');

const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

function validateEmail() {
  const emailValue = emailInput.value.trim();
  if (emailValue === '') {
    emailError.textContent = 'Email is required.';
    emailError.style.visibility = 'visible';
    emailInput.classList.add('error');
    emailInput.classList.remove('success');
  } else if (!emailPattern.test(emailValue)) {
    emailError.textContent = 'Please enter a valid email address.';
    emailError.style.visibility = 'visible';
    emailInput.classList.add('error');
    emailInput.classList.remove('success');
  } else {
    emailError.style.visibility = 'hidden';
    emailInput.classList.add('success');
    emailInput.classList.remove('error');
  }
}


function validatePassword() {
  const passwordValue = passwordInput.value.trim();
  if (passwordValue === '') {
    passwordError.textContent = 'Password is required.';
    passwordError.style.visibility = 'visible';
    passwordInput.classList.add('error');
    passwordInput.classList.remove('success');
  } else if (passwordValue.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters.';
    passwordError.style.visibility = 'visible';
    passwordInput.classList.add('error');
    passwordInput.classList.remove('success');
  } else {
    passwordError.style.visibility = 'hidden';
    passwordInput.classList.add('success');
    passwordInput.classList.remove('error');
  }
}


emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);

const form = document.getElementById('validation-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  validateEmail();
  validatePassword();
  if (!emailError.style.visibility && !passwordError.style.visibility) {
    alert('Form Submitted Successfully!');
  } else {
    alert('Please fix the errors before submitting.');
  }
});
