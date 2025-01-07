document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".content");
  
    tabs.forEach(tab => {
      tab.addEventListener("click", function () {
        const targetTab = this.getAttribute("data-tab");
  
        // Remove active classes from tabs and contents
        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));
  
        // Add active class to the clicked tab and corresponding content
        this.classList.add("active");
        document.querySelector(`.content[data-tab="${targetTab}"]`).classList.add("active");
      });
    });
  
    // Activate the first tab by default
    tabs[0].classList.add("active");
    contents[0].classList.add("active");
  });
  