function toggleDropdown() {
    document.getElementById("dropdown-content").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function updateSelected() {
    const checkboxes = document.querySelectorAll('.dropdown-content input[type=checkbox]');
    const selectedItems = [];
    
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            selectedItems.push(checkbox.value);
        }
    });

    document.querySelector('.selected-items').innerText = 'Selected: ' + selectedItems.join(', ') || 'None';
}
