let content1button = document.getElementById("content1");
let content2button = document.getElementById("content2");
let content3button = document.getElementById("content3");
let content4button = document.getElementById("content4");
let content = document.getElementById("content");
content1button.addEventListener("click", function() {
    content.textContent = "content1";
    content.style.backgroundColor="yellow";
});
content2button.addEventListener("click", function() {
    content.textContent = "content2";
    content.style.backgroundColor="pink";
});
content3button.addEventListener("click", function() {
    content.textContent = "content3";
    content.style.backgroundColor="blue";
});
content4button.addEventListener("click", function() {
    content.textContent = "content4";   
    content.style.backgroundColor="gray";
});
let buttons = [content1button,content2button,content3button,content4button];
let trackbuttons = -1;
document.addEventListener('keydown',(e)=>{
    e.preventDefault();
    trackbuttons = (trackbuttons + 1) % buttons.length;
    let currentbutton = buttons[trackbuttons];
    if(e.key==="Tab"){
        currentbutton.focus();
        currentbutton.click();
    }
})