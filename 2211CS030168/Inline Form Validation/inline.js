    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const emailFeedback = document.getElementById("emailFeedback");
    const passwordFeedback = document.getElementById("passwordFeedback");
    const form = document.getElementById("form");

    email.addEventListener("input", () => {
      const emailValue = email.value.trim();
      if (!emailValue) {
        emailFeedback.textContent = "Email is required.";
        emailFeedback.className = "error";
      } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(emailValue)) {
        emailFeedback.textContent = "Please enter a valid email.";
        emailFeedback.className = "error";
      } else {
        emailFeedback.textContent = "Looks good!";
        emailFeedback.className = "success";
      }
    });

    password.addEventListener("input", () => {
      const passwordValue = password.value.trim();
      if (!passwordValue) {
        passwordFeedback.textContent = "Password is required.";
        passwordFeedback.className = "error";
      } else if (passwordValue.length < 6) {
        passwordFeedback.textContent = "Password must be at least 6 characters.";
        passwordFeedback.className = "error";
      } else {
        passwordFeedback.textContent = "Looks good!";
        passwordFeedback.className = "success";
      }
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (emailFeedback.className === "success" && passwordFeedback.className === "success") {
        alert("Form submitted successfully!");
      } else {
        alert("Please fix the errors before submitting.");
      }
    });
   