const form = document.getElementById("myform");
const emailTag = document.getElementById("email");
const passwordTag = document.getElementById("password");
const checkTag = document.getElementById("check");
const email = localStorage.getItem("Email")
const passwod = localStorage.getItem("Password")


form.addEventListener("submit",Validation);

function Validation(e){
    e.preventDefault();
    if(emailTag.value !== email){
        alert ("Wrong email address")
        emailTag.style.color = "red"
    }else if(passwordTag.value != passwod){
        alert("Incorrect password")
        passwordTag.style.color = "red"
        return "Check password"
    }else if(!checkTag.checked){
        alert ("password save")
        checkTag.style.color = "red"
        return "password saved"
    }else{
        emailTag.value = ""
        passwordTag.value = ""
        checkTag.checked = ""
        alert("Login successful")
    }
    
    }






