// Function to toggle details visibility for each anime
function toggleDetails(detailsId) {
    const details = document.getElementById(detailsId);
    details.style.display = details.style.display === 'block' ? 'none' : 'block';
}

// Function to open the trailer in a new window
function openWin(url) {
    window.open(url, "_blank", "top=100,left=250,height=400,width=600,channelmode=yes,fullscreen=yes,menubar=no,toolbar=no,location=no,status=no,scrollbars=no,noopener=no");
}
