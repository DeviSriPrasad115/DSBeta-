const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");
openModalBtn.addEventListener("click", () => {
  modal.classList.add("show");
});


closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});


window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("show");
  }
});
