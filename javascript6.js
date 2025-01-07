// Get elements
const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownContent = document.getElementById('dropdownContent');
const dropdownItems = dropdownContent.getElementsByTagName('a');

// Function to display selected value dynamically
function updateSelectedValue(value) {
  dropdownBtn.textContent = value;
  dropdownContent.style.display = 'none'; // Close dropdown when selection is made
}

// Add event listener to dropdown items
for (let item of dropdownItems) {
  item.addEventListener('click', function(event) {
    event.preventDefault();
    updateSelectedValue(item.getAttribute('data-value'));
  });
}

// Show the dropdown when the button is clicked
dropdownBtn.addEventListener('click', function() {
  dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
});
