const modal = document.getElementById('myModal');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal')

openModalBtn.onclick = function() {
    modal.style.display = "block";
}

closeModalBtn.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
