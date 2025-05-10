const slider = document.getElementById("slider");
const dotsContainer = document.getElementById("dots");
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;
let autoPlayInterval;

// Create navigation dots
slides.forEach((_, index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (index === 0) dot.classList.add("active");
  dot.addEventListener("click", () => {
    goToSlide(index);
  });
  dotsContainer.appendChild(dot);
});

// Move to a specific slide
function goToSlide(index) {
  currentIndex = index;
  updateSlider();
  resetAutoPlay();
}

// Update slider and dots
function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  document.querySelectorAll(".dot").forEach((dot, idx) => {
    dot.classList.toggle("active", idx === currentIndex);
  });
}

// Auto-play functionality
function autoPlay() {
  autoPlayInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  }, 3000);
}

// Reset auto-play timer
function resetAutoPlay() {
  clearInterval(autoPlayInterval);
  autoPlay();
}

// Start auto-play on page load
autoPlay();
