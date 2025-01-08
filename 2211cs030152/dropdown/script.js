let select = document.getElementById("options");
let output = document.getElementById("output")
select.addEventListener("change",(e)=>{
    output.textContent = e.target.value
})