const product = [
    {
        Image: "https://themewagon.github.io/MiniStore/images/product-item6.jpg",
        name: "PINK WATCH",
        price: 870
    },
    {
        Image: "https://themewagon.github.io/MiniStore/images/product-item7.jpg",
        name: "HEAVY WATCH",
        price: 680
    },
    {
        Image: "https://themewagon.github.io/MiniStore/images/product-item8.jpg",
        name: "SPOTTED WATCH",
        price: 750
    },
    {
        Image: "https://themewagon.github.io/MiniStore/images/product-item9.jpg",
        name: "BLACK WATCH",
        price: 650
    },
]
let dizplay = ""
for (let i = 0; i < product.length; i++){
    dizplay += `
    <div class="card" style="width: 18rem;">
        <img src="${product[i].Image}" class="card-img-top" alt="${product[i].Image}">
        <div class="card-body">
          <h5 class="card-title">${product[i].name}</h5>
          <p class="card-text">$${product[i].price}</p>
          <button class="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Add to cart</button>
        </div>
      </div>
    `
}
const contain = document.getElementById("contain")
contain.innerHTML = dizplay

