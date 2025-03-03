const Allbutton = document.querySelectorAll(".button")
console.log(Allbutton);

Allbutton.forEach(function(button){
    button.addEventListener("click",Addtocart)
    function Addtocart(){
    const price = button.previousElementSibling.textContent;
    const name = button.previousElementSibling.previousElementSibling.textContent;
    const image = button.parentElement.previousElementSibling.src
    
    const Getitemsincart = JSON.parse(localStorage.getItem("cart")) || []
    const Newitemsincart = [...Getitemsincart,{image,name,price}]
    localStorage.setItem("cart",JSON.stringify(Newitemsincart))
    
    
        
    }
})

const Modal = document.querySelector(".modal-body")
const Getitemsincart = JSON.parse(localStorage.getItem("cart"))

let dplay = ""
for (let i = 0; i < Getitemsincart.length; i++){
    dplay += `
    <div class="card border-0" style="width: 18rem;display:flex;flex-direction:row;align-items:center">
        <img id="img" src="${Getitemsincart[i].image}" class="card-img-top" alt="${Getitemsincart[i].image}">
        <div class="card-body">
          <h5 class="card-title">${Getitemsincart[i].name}</h5>
          <p class="card-text">$${Getitemsincart[i].price}</p>
        </div>
      </div>
    `
}
Modal.innerHTML = dplay

