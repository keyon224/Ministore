const products = [
    {
        Image: "https://themewagon.github.io/MiniStore/images/product-item1.jpg",
        name: "Iphone 10",
        price: 980
    },
    {
        Image: "https://themewagon.github.io/MiniStore/images/product-item2.jpg",
        name: "Iphone 11",
        price: 1100
    },
    {
        Image: "https://themewagon.github.io/MiniStore/images/product-item3.jpg",
        name: "Iphone 8",
        price: 780
    },
    {
        Image: "https://themewagon.github.io/MiniStore/images/product-item4.jpg",
        name: "Iphone 13",
        price: 1500
    },
]
let display = ""
for (let i = 0; i < products.length; i++){
    display += `
    <div class="card" style="width: 18rem;margin:10px">
        <img src="${products[i].Image}" class="card-img-top" alt="${products[i].Image}">
        <div class="card-body">
            <h5 class="card-title">${products[i].name}</h5>
            <p class="card-text1">$${products[i].price}</p>
            <button class="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Add to cart</button>
        </div>
      </div>
    `
}
const parent = document.getElementById("parent")
parent.innerHTML = display