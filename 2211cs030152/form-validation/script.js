let passcontent = document.getElementById("pass");
let validator = document.getElementById("validator");
let submit = document.getElementById("submit");
let message1 = document.getElementById("message1");
let message2 = document.getElementById("message2");
let email = document.getElementById("email");
let weak = 9;
let medium = 12;
let strong = 14;
let containuppercase = (pass) =>{
    for(let i=0;i<pass.length;i++){
        if(pass.charCodeAt(i)>=65 && pass.charCodeAt(i)<=90){
            return true;
        }
    }
    return false;
}
let containspecial = (pass) =>{
    const special_characters = "~!@#$%^&*()_+"
    for(let i=0;i<pass.length;i++){
        for(let j=0;j<special_characters.length;j++){
            if(pass.charAt(i) === special_characters.charAt(j)){
                return true;
            }
        }
    }
    return false;
}
let containnums = (pass) =>{
    for(let i=0;i<pass.length;i++){
        if(pass.charCodeAt(i)>=48 && pass.charCodeAt(i)<=57){
            return true;
        }
    }
    return false;
}
passcontent.addEventListener('input',(e)=>{
    if (e.target.value.length < 8 && (!containuppercase(e.target.value) || !containnums(e.target.value)|| !containspecial(e.target.value))) {
        validator.style.width = `${weak}px`;
        validator.classList.remove("green");
        validator.classList.remove("yellow");
        validator.classList.add("red");
        message2.textContent = "password must be of length 8";
        
    } else if (e.target.value.length >= 8) {
        if (!containuppercase(e.target.value) || !containnums(e.target.value) || !containspecial(e.target.value)) {
            validator.style.width = `${medium}px`;
            validator.classList.remove("green");
            validator.classList.remove("red");
            validator.classList.add("yellow");
            message2.textContent = "password must contain uppercase, numbers and special characters";
            
        } else if (containuppercase(e.target.value) && containnums(e.target.value) && containspecial(e.target.value)) {
            validator.style.width = `${strong}px`;
        validator.classList.remove("yellow");
        validator.classList.remove("red");
        validator.classList.add("green");
        message2.textContent = "";
        }
    }
})
const containatanddot = (value) =>{
    let atsatisfied = false;
    let dotsatisfied = false;
    for(let i=0;i<value.length;i++){
        if(value.charAt(i) === "@"){
            atsatisfied = true;
        }
        if(value.charAt(i) === "."){
            dotsatisfied = true;
        }
        if(atsatisfied && dotsatisfied){
            return true;
        }
    }
    return false
}
email.addEventListener('input',(e)=>{
    if(e.target.value){
        if(!containatanddot(e.target.value)){
        message1.textContent= "invalid email";
        }
        else{
            message1.textContent = "";
        }
    }
    console.log(e.target.value)
})
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    
})

