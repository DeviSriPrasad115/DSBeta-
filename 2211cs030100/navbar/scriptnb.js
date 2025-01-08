function switchTab(event, tabId) {
    // Deactivate all tabs
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach((tab) => tab.classList.remove('active'));
  
    // Hide all tab panes
    const panes = document.querySelectorAll('.tab-pane');
    panes.forEach((pane) => {
      pane.classList.remove('active');
      setTimeout(() => (pane.style.display = 'none'), 500); // Delay for animation
    });
  
    // Activate clicked tab
    event.target.classList.add('active');
  
    // Show associated tab pane
    const activePane = document.getElementById(tabId);
    activePane.style.display = 'block';
    setTimeout(() => activePane.classList.add('active'), 50); // Delay for animation
  }
  