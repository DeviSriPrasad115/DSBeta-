// Get the modal
var modal = document.getElementById("deleteModal");

// Get the button that opens the modal
var deleteBtn = document.getElementById("deleteButton");

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close")[0];

// Get the confirm and cancel buttons
var confirmDeleteBtn = document.getElementById("confirmDelete");
var cancelDeleteBtn = document.getElementById("cancelDelete");

// When the user clicks the delete button, open the modal 
deleteBtn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks on the cancel button, close the modal
cancelDeleteBtn.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks on the confirm button, perform the delete action
confirmDeleteBtn.onclick = function() {
    // Perform the delete action here
    alert("Item deleted!");
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}