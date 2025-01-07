function showTab(index) {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');

    // Remove active class from all tabs and contents
    tabs.forEach(tab => tab.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));

    // Add active class to the clicked tab and corresponding content
    tabs[index].classList.add('active');
    contents[index].classList.add('active');
}

// Initialize by showing the first tab
showTab(0);
