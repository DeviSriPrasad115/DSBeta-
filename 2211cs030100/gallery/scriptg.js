function filterGallery(tag) {
    const items = document.querySelectorAll('.gallery-item');
    const buttons = document.querySelectorAll('.filter-btn');
  
    // Update active button state
    buttons.forEach((btn) => btn.classList.remove('active'));
    document.querySelector(`.filter-btn[onclick="filterGallery('${tag}')"]`).classList.add('active');
  
    // Filter items
    items.forEach((item) => {
      if (tag === 'all' || item.classList.contains(tag)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
  