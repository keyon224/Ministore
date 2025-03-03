const products = [
    {
        name: "shoe",
        price: 17000,
        description: "High quality"
    },
    {
        name: "bag",
        price: 17500,
        description: "High quality"
    },
    {
        name: "cloth",
        price: 20000,
        description: "High quality design"
    },
]
let display = ""
for (let i = 0; i <products.length; i++){
    display+=`
        <div id="contain">
             <img id="image" src="https://cdn.pixabay.com/photo/2025/02/22/17/45/food-9424463_1280.jpg" alt="">
            <h3>${products[i].name}</h3>
            <strong>${products[i].price}</strong>
            <p>${products[i].description}</p>
        </div>
`
}
const parent = document.getElementById("parent")
parent.innerHTML = display
 