const form = document. getElementById("myForm")
const firstNameTag = document.getElementById("firstname")
const lastNameTag = document.getElementById("lastname")
const emailTag = document.getElementById("email")
const phoneTag = document.getElementById("phone")
const passwordTag = document.getElementById("password")
const output = document.querySelector(".output")
form.addEventListener("submit",handleFormValidation)

function handleFormValidation(e){
    e.preventDefault()
    if(firstNameTag.value.length == 0){
        output.innerText = "First name field cannot be empty"
        output.style.color = "red"
    }else if(lastNameTag.value.length == 0){
        output.innerText = "last name field cannot be empty"
        output.style.color = "red"
    }else if(emailTag.Value.length == 0){
        output.innerText = "email field cannot be empty"
        output.style.color = "red"
    }else if(passwordTag.Value.length == 0){
        output.innerText = "phone field cannot be empty"
        output.style.color = "red"
    }else if(passwordTag.Value.length <= 6){
        output.innerText = "password is too short"
        output.style.color = "red"
    }else{
        output.innerText = ""
        firstNameTag.value = ""
        lastNameTag.value = ""
        emailTag.value = ""
        phoneTag.value = ""
        passwordTag.value = ""
    }
}alert("signed up successfully")
