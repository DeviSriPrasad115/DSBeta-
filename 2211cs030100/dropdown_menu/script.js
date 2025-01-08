function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown');
    const options = document.getElementById('dropdownOptions');
    dropdown.classList.toggle('open');
  }
  
  function selectOption(value) {
    const selectedValue = document.getElementById('selectedValue');
    const dropdown = document.querySelector('.dropdown');
    const options = document.getElementById('dropdownOptions');
  
    // Set selected value
    selectedValue.textContent = value;
  
    // Close dropdown
    dropdown.classList.remove('open');
  }
  