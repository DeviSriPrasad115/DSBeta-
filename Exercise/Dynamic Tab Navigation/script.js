// Dynamic Tab Navigation Functionality
document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");
    const tabPanes = document.querySelectorAll(".tab-pane");
  
    // Function to show a specific tab pane
    function showTabPane(tabId) {
      tabPanes.forEach((pane) => {
        pane.classList.toggle("active", pane.id === tabId);
      });
    }
  
    // Function to show a specific tab
    function showTab(tab) {
      tabs.forEach((t) => {
        t.classList.toggle("active", t === tab);
      });
    }
  
    // Event listeners for tabs
    tabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        const tabId = tab.getAttribute("data-tab");
        showTabPane(tabId);
        showTab(tab);
      });
    });
  });