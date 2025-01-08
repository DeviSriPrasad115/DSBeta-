let modal = document.querySelector(".model");
let openButton = document.querySelector(".click");
let closeButton = document.querySelector(".close");
let divbutton = document.querySelector(".button-class");
openButton.addEventListener("click", () => {
  modal.classList.add("show");
    divbutton.classList.remove("bgwhite");
    divbutton.classList.add("bgblack");
});

closeButton.addEventListener("click", () => {
    modal.classList.remove("show");
    divbutton.classList.remove("bgblack");
    divbutton.classList.add("bgwhite");
});
