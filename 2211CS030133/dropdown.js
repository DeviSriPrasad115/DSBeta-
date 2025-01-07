// Get the dropdown button and content
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownContent = document.querySelector('.dropdown-content');
const selectedValueElement = document.querySelector('#selected-value span');

// Add event listener to dropdown options
const options = dropdownContent.querySelectorAll('a');
options.forEach(option => {
    option.addEventListener('click', function (e) {
        e.preventDefault();
        const selectedValue = this.textContent;  // Get the text of the selected option
        dropdownBtn.textContent = `Selected: ${selectedValue}`;  // Update button text
        selectedValueElement.textContent = selectedValue;  // Update displayed value
    });
});
