// const element = document.getElementById("element")
// element.className = "habeeb"  //adding a class on java
// const names = document.querySelectorAll(".habeeb")
// names.forEach(function(name){
//     name.style.color = "red"
// })
// const element = document.querySelector(".good")
// element.classList.add("habeeb")
// element.classList.add("tsa")
// element.classList.remove("habeeb")
// element.classList.toggle("habeeb") //will add if element doesn't exist
// console.log(element.classList.contains("habeeb"));  //will return true if element is found

// const text = document.createTextNode("Hello word")
// const element = document.createElement("p") // to create a p tag
// const container = document.createElement("div") // to create a div
// element.appendChild(text) // to add to the p tag
// container.appendChild(element) //to add to the div
// document.body.appendChild(container) //to add to the body

// const image = document.createElement("img")
// image.classList.add(".godwin")
// image.src = //put your image link
// document.body.appendChild(image)
// image.style.width = "200px"
// image.style.height = "200px"

// const container = document.querySelector("#container")
// const child = document.querySelector("#child")
// container.remove(child)

// const heading = document.createElement("h2")
// heading.setAttribute("id","habeeb")
// heading.setAttribute("class","lucas")
// heading.removeAttribute("id")  //to remove an attribute
// console.log(heading);

// const container = document.createElement("div")
// container.innerHTML = "<p>I love js</p>"
// document.body.appendChild(container)

const products = [
    {
        name: "bag",
        price: 5000,
        description: "lorem ipsm dologsg"
    },
    {
        name: "shoe",
        price: 10000,
        description: "lorem ipsm dologsg"
    },
    {
        name: "phone",
        price: 50000,
        description: "lorem ipsm dologsg"
    },
    {
        name: "wrist watch",
        price: 2000,
        description: "lorem ipsm dologsg"
    }
]
let displayProduct = ""
for(let i = 0; i<products.length; i++){
    displayProduct +=`
    <div id="contain">
            <h2>${products[i].name}</h2>
            <strong>${products[i].price}</strong>
            <p>${products[i].description}</p>

        </div>
    `
}
const parent = document.getElementById("parent")
parent.innerHTML = displayProduct
 