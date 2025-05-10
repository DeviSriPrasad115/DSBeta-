const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownMenu = document.getElementById("dropdownMenu");
const dropdownItems = document.querySelectorAll(".dropdown-item");
const selectedValue = document.getElementById("selectedValue");

// Toggle dropdown menu
dropdownBtn.addEventListener("click", () => {
  dropdownMenu.classList.toggle("open");
});

// Update selected value
dropdownItems.forEach(item => {
  item.addEventListener("click", () => {
    const value = item.getAttribute("data-value");
    selectedValue.textContent = `Selected: ${value}`;
    dropdownMenu.classList.remove("open");
    dropdownBtn.textContent = value;
    dropdownBtn.appendChild(document.createElement("span")).className = "arrow";
    dropdownBtn.querySelector(".arrow").textContent = "▼";
  });
});

// Close dropdown if clicked outside
document.addEventListener("click", e => {
  if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.remove("open");
  }
});
