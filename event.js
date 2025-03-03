const button = document.querySelector("#btn")
button.addEventListener("Click",doSomething)

function doSomething(){
    alert("You clicked me")
    button.classList.add("habbeb")
}

const image = document.getElementById("image")

image.addEventListener("mouseover",addStyle)
image.addEventListener("mouseout",removeStyle)
function addStyle(){
    image.classList.add("img")
}

function removeStyle(){
    image.classList.remove("img")
}



const form = document.getElementById("myForm")
const username = document.getElementById("username")
const password = document.getElementById("password")
form.addEventListener("submit",submit)

function submit(e){
    e.preventDefault()
    console.log(username.value);
    console.log(password.value);
    username.value = ""
    password.value = ""
}