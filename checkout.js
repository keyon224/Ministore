const checkoutTag = document.getElementById("checkout");

checkoutTag.addEventListener("click",ValidateCheckout);

function ValidateCheckout(){
    localStorage.clear()
    alert("Checkout successfull")
}