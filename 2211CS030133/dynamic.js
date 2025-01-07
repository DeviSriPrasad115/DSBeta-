// Get all tab buttons and content sections
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

// Add click event listener to each tab
tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        // Remove active class from all tabs and contents
        tabs.forEach((t) => t.classList.remove("active"));
        contents.forEach((c) => c.classList.remove("active"));

        // Add active class to the clicked tab
        tab.classList.add("active");

        // Display the corresponding content
        const target = document.getElementById(tab.dataset.tab);
        target.classList.add("active");
    });
});
