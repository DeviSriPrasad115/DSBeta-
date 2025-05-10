document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-button");
    const galleryItems = document.querySelectorAll(".gallery-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            const filterValue = this.getAttribute("data-filter");

            galleryItems.forEach(item => {
                if (filterValue === "all") {
                    item.style.display = "block"; // Show all items
                } else if (item.classList.contains(filterValue)) {
                    item.style.display = "block"; // Show matched items
                } else {
                    item.style.display = "none"; // Hide unmatched items
                }
            });
        });
    });
});
