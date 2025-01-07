function filterGallery(tag) {
    const galleryItems = document.querySelectorAll('.gallery-item');
  
    galleryItems.forEach((item) => {
      if (tag === 'all') {
        item.classList.remove('hidden');
      } else {
        if (item.classList.contains(tag)) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      }
    });
  }
  