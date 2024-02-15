const signUPbtn = document.getElementById("signUPbtn");
const signInbtn = document.getElementById("signInbtn");
const NameField = document.getElementById("nameField");
const title = document.getElementById("title");


signInbtn.addEventListener("click",()=>{
    NameField.style.maxHeight = "0";
    title.innerHTML = "Sign In"
    signUPbtn.classList.add("disable");
    signInbtn.classList.remove("disable");
});

signUPbtn.addEventListener("click",()=>{
    NameField.style.maxHeight = "60px";
    title.innerHTML = "Sign Up"
    signUPbtn.classList.remove("disable");
    signInbtn.classList.add("disable");
});