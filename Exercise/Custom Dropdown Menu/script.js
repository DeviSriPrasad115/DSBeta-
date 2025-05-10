// Custom Dropdown Functionality
document.addEventListener("DOMContentLoaded", function () {
    const dropdownHeader = document.getElementById("dropdownHeader");
    const dropdownList = document.getElementById("dropdownList");
    const selectedValue = document.getElementById("selectedValue");
  
    // Toggle dropdown visibility
    dropdownHeader.addEventListener("click", function () {
      dropdownHeader.parentElement.classList.toggle("active");
    });
  
    // Handle option selection
    dropdownList.addEventListener("click", function (e) {
      if (e.target.tagName === "LI") {
        // Update selected value
        selectedValue.textContent = e.target.textContent;
  
        // Update dropdown header
        dropdownHeader.querySelector("span").textContent = e.target.textContent;
  
        // Close dropdown
        dropdownHeader.parentElement.classList.remove("active");
      }
    });
  
    // Close dropdown when clicking outside
    document.addEventListener("click", function (e) {
      if (!dropdownHeader.contains(e.target) && !dropdownList.contains(e.target)) {
        dropdownHeader.parentElement.classList.remove("active");
      }
    });
  });