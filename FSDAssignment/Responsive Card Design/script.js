function flipCard() {
    const cardInner = document.getElementById('cardInner');
    
    // Check if the card is currently flipped
    if (cardInner.style.transform === 'rotateY(180deg)') {
        cardInner.style.transform = 'rotateY(0deg)'; // Rotate back to the front
    } else {
        cardInner.style.transform = 'rotateY(180deg)'; // Rotate to the back
    }
}
