document.addEventListener("DOMContentLoaded", () => {
    // Automatically cycle through slides every 3 seconds
    const carousel = document.querySelector('#customCarousel');
    const carouselInstance = new bootstrap.Carousel(carousel, {
      interval: 3000, // 3 seconds
      ride: 'carousel'
    });
  
    // Optional: Add event listener for logging slide changes
    carousel.addEventListener('slide.bs.carousel', (e) => {
      console.log(`Slide changed to index: ${e.to}`);
    });
  });