document.addEventListener("DOMContentLoaded", () => {
  const dropdownButton = document.getElementById("dropdownButton");
  const dropdownMenu = document.getElementById("dropdownMenu");
  const dropdownItems = document.querySelectorAll(".dropdown-item");

  // Toggle dropdown menu visibility
  dropdownButton.addEventListener("click", () => {
    dropdownMenu.classList.toggle("show");
  });

  // Change theme dynamically
  dropdownItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      const selectedTheme = event.target.getAttribute("data-theme");
      document.body.className = selectedTheme; // Apply the theme to the body
      dropdownButton.textContent = event.target.textContent; // Update button text
      dropdownMenu.classList.remove("show"); // Close the dropdown
    });
  });

  // Close dropdown if clicked outside
  document.addEventListener("click", (event) => {
    if (!dropdownMenu.contains(event.target) && !dropdownButton.contains(event.target)) {
      dropdownMenu.classList.remove("show");
    }
  });
});
