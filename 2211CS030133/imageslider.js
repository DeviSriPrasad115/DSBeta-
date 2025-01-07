const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
let slideInterval;

// Function to show the current slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
    });

    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

// Auto-play functionality
function startAutoPlay() {
    slideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }, 3000); // Change slide every 3 seconds
}

// Stop auto-play when user interacts
function stopAutoPlay() {
    clearInterval(slideInterval);
}

// Event listeners for dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        stopAutoPlay(); // Stop auto-play on click
        currentIndex = index;
        showSlide(currentIndex);
        startAutoPlay(); // Restart auto-play
    });
});

// Initialize the slider
showSlide(currentIndex);
startAutoPlay();
