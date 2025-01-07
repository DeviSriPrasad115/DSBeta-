document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelector(".slides");
    const dots = document.querySelectorAll(".dot");
    const slideCount = dots.length;
    let currentIndex = 0;
  
    // Function to update the active slide and dot
    const updateSlider = (index) => {
      slides.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach(dot => dot.classList.remove("active"));
      dots[index].classList.add("active");
    };
  
    // Auto-play functionality
    const autoPlay = () => {
      currentIndex = (currentIndex + 1) % slideCount;
      updateSlider(currentIndex);
    };
  
    let autoPlayInterval = setInterval(autoPlay, 3000);
  
    // Add click event to dots
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        clearInterval(autoPlayInterval); // Stop auto-play on manual navigation
        currentIndex = index;
        updateSlider(currentIndex);
        autoPlayInterval = setInterval(autoPlay, 3000); // Restart auto-play
      });
    });
  
    // Initialize slider
    updateSlider(currentIndex);
  });
  