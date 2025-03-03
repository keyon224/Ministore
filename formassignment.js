const form = document.getElementById("form")
const nameClass1 = document.getElementsByClassName("nameClass1")
const nameClass2 = document.getElementsByClassName("nameClass2")
const nameClass3 = document.getElementsByClassName("nameClass3")
const nameClass4 = document.getElementsByClassName("nameClass4")
const nameClass5 = document.getElementsByClassName("nameClass5")
const blue = document.getElementsByClassName("blue")
const output = document.querySelector(".output")
form.addEventListener("submit",handleFormValidation())

function handleFormValidation(){
        
        if(nameClass1.value.length ===1 0){
            output.innerText = "Fill in name"
        }
}alert("signed up successfully")

