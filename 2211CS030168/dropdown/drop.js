
const dropdownLinks = document.querySelectorAll('.dropdown-content a');
const selectedValueDiv = document.getElementById('selectedValue');

dropdownLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); 
        const selectedValue = e.target.getAttribute('data-value');
        selectedValueDiv.textContent = 'You selected: ' + selectedValue;
    });
});