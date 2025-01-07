document.addEventListener("DOMContentLoaded", () => {
    const openModalBtn = document.getElementById("openModalBtn");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const modal = document.getElementById("modal");

    openModalBtn.addEventListener("click", () => {
        modal.classList.add("active");
    });

    closeModalBtn.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.classList.remove("active");
        }
    });
});
