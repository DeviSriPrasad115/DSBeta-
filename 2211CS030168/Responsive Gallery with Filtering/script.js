document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const galleryItems = document.querySelectorAll(".gallery-item");
  
    filterButtons.forEach(button => {
      button.addEventListener("click", function () {
        const tag = this.getAttribute("data-tag");
  
        // Show all items if "All" is clicked, or filter by tag
        galleryItems.forEach(item => {
          if (tag === "all" || item.getAttribute("data-tags").includes(tag)) {
            item.classList.remove("hidden");
          } else {
            item.classList.add("hidden");
          }
        });
      });
    });
  
    // By default, show all items
    filterButtons.forEach(button => {
      if (button.getAttribute("data-tag") === "all") {
        button.classList.add("active");
      }
    });
  });
  