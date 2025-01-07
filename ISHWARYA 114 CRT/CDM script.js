const dropdown = document.querySelector('.dropdown');
const btn = dropdown.querySelector('.dropbtn');
const content = dropdown.querySelector('.dropdown-content');
const selectedValue = document.getElementById('selectedValue');

btn.addEventListener('click', () => {
  content.classList.toggle('show');
});

content.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    btn.textContent = event.target.textContent;
    selectedValue.textContent = `Selected Value: ${event.target.textContent}`;
    content.classList.remove('show');
  }
});