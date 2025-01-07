const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
let slideInterval;

// Function to go to a specific slide
function goToSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        dots[i].classList.toggle('active', i === index);
    });
    currentIndex = index;
}

// Function to go to the next slide
function nextSlide() {
    const nextIndex = (currentIndex + 1) % slides.length;
    goToSlide(nextIndex);
}

// Function to handle dot click
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        goToSlide(index);
        resetAutoplay();
    });
});

// Autoplay functionality
function startAutoplay() {
    slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

function resetAutoplay() {
    clearInterval(slideInterval);
    startAutoplay();
}

// Initialize slider
goToSlide(0);
startAutoplay();
