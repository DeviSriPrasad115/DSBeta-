// Get references to the form and input elements
const form = document.getElementById('signup-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailValidationMessage = document.getElementById('email-validation-message');
const passwordValidationMessage = document.getElementById('password-validation-message');

// Regular expressions for validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum 8 characters, at least one letter and one number

// Function to validate email
function validateEmail() {
  const email = emailInput.value;
  if (!emailRegex.test(email)) {
    emailValidationMessage.textContent = 'Please enter a valid email address.';
    emailValidationMessage.classList.add('error');
    emailValidationMessage.classList.remove('success');
    return false;
  }
  emailValidationMessage.textContent = 'Email is valid!';
  emailValidationMessage.classList.add('success');
  emailValidationMessage.classList.remove('error');
  return true;
}

// Function to validate password
function validatePassword() {
  const password = passwordInput.value;
  if (!passwordRegex.test(password)) {
    passwordValidationMessage.textContent = 'Password must be at least 8 characters, including one letter and one number.';
    passwordValidationMessage.classList.add('error');
    passwordValidationMessage.classList.remove('success');
    return false;
  }
  passwordValidationMessage.textContent = 'Password is strong!';
  passwordValidationMessage.classList.add('success');
  passwordValidationMessage.classList.remove('error');
  return true;
}

// Handle real-time validation
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);

// Handle form submission
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();

  if (isEmailValid && isPasswordValid) {
    alert('Form submitted successfully!');
    form.reset();  // Clear the form after successful submission
  }
});