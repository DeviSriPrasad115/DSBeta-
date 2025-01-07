document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-link");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Remove active class from all tabs
      tabs.forEach((t) => t.classList.remove("active"));
      // Add active class to the clicked tab
      tab.classList.add("active");

      // Hide all content sections
      contents.forEach((content) => content.classList.add("hidden"));
      // Show the content for the clicked tab
      const targetTab = tab.getAttribute("data-tab");
      document.getElementById(targetTab).classList.remove("hidden");
    });
  });
});
