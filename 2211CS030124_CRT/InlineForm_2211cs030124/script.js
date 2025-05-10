document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
  
    // Validate email
    emailInput.addEventListener('input', function () {
      const emailValue = emailInput.value;
      if (emailValue.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
        emailInput.classList.remove('error');
        emailInput.classList.add('success');
        emailError.textContent = ''; // Clear error
      } else {
        emailInput.classList.remove('success');
        emailInput.classList.add('error');
        emailError.textContent = 'Invalid email address';
      }
    });
  
    // Validate password
    passwordInput.addEventListener('input', function () {
      const passwordValue = passwordInput.value;
      if (passwordValue.length >= 6) {
        passwordInput.classList.remove('error');
        passwordInput.classList.add('success');
        passwordError.textContent = ''; // Clear error
      } else {
        passwordInput.classList.remove('success');
        passwordInput.classList.add('error');
        passwordError.textContent = 'Password must be at least 6 characters';
      }
    });
  
    // Optional: Form submit validation
    document.getElementById('myForm').addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent actual form submission for this example
      // You can add a final check here to ensure everything is valid before submitting
    });
  });
  