const formTag = document.getElementById("form")
const fullnameTag = document.getElementById("Fullname")
const usernameTag = document.getElementById("Username")
const dobTag = document.getElementById("DOB")
const countryTag = document.getElementById("Country")
const stateTag = document.getElementById("State")
const emailTag = document.getElementById("Email")
const passTag = document.getElementById("Password")


formTag.addEventListener("submit",ValidateSignup)

function ValidateSignup(e){
    e.preventDefault();
    if(fullnameTag.value.length == 0){
        alert("Please fill in names")
        return "Full name required"
    }else if(usernameTag.value.length == 0){
        alert("Fill in username")
        return "Fill in username"
    }else if(dobTag.value.length = 0){
        alert("Date of birth can't be empty")
        return "DOB required"
    }else if(countryTag.value.length ==0){
        alert("Fill in country")
        return "Country required"
    }else if(stateTag.value.length ==0){
        alert("Fill in state")
        return "State can't be empty"
    }else if(emailTag.value.length == 0){
        alert ("Fill in email address")
        emailTag.style.color = "red"
        return "Please fill in email address"
    }else if(passTag.value.length < 8){
        alert("Password must be 8 or above characters")
        return "password can't be less than 8 characters"
    }else{
        localStorage.setItem("Fullname",fullnameTag.value)
        localStorage.setItem("Username",usernameTag.value)
        localStorage.setItem("DOB",dobTag.value)
        localStorage.setItem("Country",countryTag.value)
        localStorage.setItem("Stae",stateTag.value)
        localStorage.setItem("Email",emailTag.value)
        localStorage.setItem("Password",passTag.value)
        fullnameTag.value =""
        usernameTag.value =""
        dobTag.value =""
        countryTag.value =""
        stateTag.value =""
        emailTag.value =""
        passTag.value =""
        alert("Signup completed")
    }
}