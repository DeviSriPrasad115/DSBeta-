// Get all the options in the dropdown
const options = document.querySelectorAll('.dropdown-content a');

// Get the button where the selected value will be displayed
const selectedValueDisplay = document.getElementById('selected-value');

// Loop through each option and add an event listener to update the displayed value
options.forEach(option => {
    option.addEventListener('click', function() {
        const selectedValue = this.getAttribute('data-value');
        selectedValueDisplay.textContent = selectedValue;
    });
});
