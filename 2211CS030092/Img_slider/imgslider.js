const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;
const totalSlides = dots.length;

// Function to update the slider
function updateSlider(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;

  // Update active dot
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

// Function to cycle through slides
function cycleSlides() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider(currentIndex);
}

// Add click events to dots
dots.forEach(dot => {
  dot.addEventListener("click", () => {
    currentIndex = parseInt(dot.dataset.index);
    updateSlider(currentIndex);
  });
});

// Auto-play slider
let autoPlay = setInterval(cycleSlides, 3000);

// Pause auto-play on hover
const slider = document.querySelector(".slider");
slider.addEventListener("mouseenter", () => clearInterval(autoPlay));
slider.addEventListener("mouseleave", () => autoPlay = setInterval(cycleSlides, 3000));
