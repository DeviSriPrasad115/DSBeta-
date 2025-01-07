// Select the card element
const card = document.querySelector('.card');

// Add a click event listener to the card
card.addEventListener('click', () => {
    const title = card.querySelector('h2').innerText;
    const description = card.querySelector('p').innerText;

    // Display a custom modal-like alert
    alert(`Card Title: ${title}\n\nDescription: ${description}`);
});

// Add hover feedback for a smooth animation
card.addEventListener('mouseenter', () => {
    card.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.4)";
    card.style.transition = "box-shadow 0.3s ease-in-out";
});

card.addEventListener('mouseleave', () => {
    card.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.3)";
});
