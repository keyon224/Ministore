// const names = ["habeeb", "ajayi"]
// localStorage.setItem("name", "Habeeb")
// localStorage.setItem("names",JSON.stringify(names)) //to convert array or object to string

// const value = localStorage.getItem("name") //you use the key to get item
// const values = JSON.parse(localStorage.getItem("names")) //to convert back to array or object

// localStorage.removeItem("name")
// localStorage.removeItem("names")
// localStorage.clear() //to clear the whole item

const allButtons = document.querySelectorAll(".filter-button")
const allItems = document.querySelectorAll(".filter-item")
allButtons.forEach(function(button){
    button.addEventListener("click",handleFilter)
    function handleFilter(){
        const buttonValue = button.dataset.filter
        allItems.forEach(function(item){
            const itemValue = item.dataset.filter
            if(buttonValue == itemValue || buttonValue == "all"){
                item.classList.remove("hide")
            }else{
                item.classList.add("hide")
            }
        })
    }
})