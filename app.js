
function getData(){
    fetch('https://fakestoreapi.com/products/20')
    .then(res=>res.json())
    .then(json=>console.log(json))
}

console.log(getData())