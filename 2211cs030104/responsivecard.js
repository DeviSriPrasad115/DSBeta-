const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const cardContainer = document.querySelector('.card-container');

let currentIndex = 0;

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = cardContainer.children.length - 1;
    }
    updateSliderPosition();
});

nextButton.addEventListener('click', () => {
    if (currentIndex < cardContainer.children.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSliderPosition();
});

function updateSliderPosition() {
    const offset = -currentIndex * cardContainer.children[0].clientWidth;
    cardContainer.style.transform = `translateX(${offset}px)`;
}
