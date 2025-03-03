async function fetchApi() {
    const response = await fetch("https://fakestoreapi.com/products") //make request to the endpoint
    const data = await response.json()  //convert the response to json
    console.log(data);
}
fetchApi()