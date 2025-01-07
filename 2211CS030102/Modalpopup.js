document.addEventListener("DOMContentLoaded", () => {
    const openModalBtn = document.querySelector(".open-modal-btn");
    const modalOverlay = document.getElementById("modalOverlay");
    const closeModalBtn = document.querySelector(".close-modal-btn");
  
    // Open Modal
    openModalBtn.addEventListener("click", () => {
      modalOverlay.classList.add("active");
    });
  
    // Close Modal
    closeModalBtn.addEventListener("click", () => {
      modalOverlay.classList.remove("active");
    });
  
    // Close Modal on Overlay Click
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove("active");
      }
    });
  });
  