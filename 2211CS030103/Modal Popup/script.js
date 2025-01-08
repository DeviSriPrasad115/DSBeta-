const modal = document.getElementById('modal');
const open = document.getElementById('openBtn');
const close = document.getElementById('closeBtn');

open.onclick = function () {
    modal.style.display = "block";
}

close.onclick = function() {
    modal.style.display = "none";
}