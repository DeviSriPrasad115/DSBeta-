let currentIndex = 0; // Current slide index
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
            dots[i].classList.add('active');
        }
    });
    
    // Move the slides container to show the current slide
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}

// Function to set the current slide based on dot click
function currentSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
}

// Auto-play functionality
function autoPlay() {
    currentIndex = (currentIndex + 1) % slides.length; // Loop back to first slide
    showSlide(currentIndex);
}

// Set interval for auto-play every 3 seconds
setInterval(autoPlay, 3000);

// Initial display of the first slide
showSlide(currentIndex);
