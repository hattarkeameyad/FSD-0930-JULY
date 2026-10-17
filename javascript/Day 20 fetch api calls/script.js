//Basic fetching

document.getElementById("fetch").addEventListener('click', () => {

    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))

})


//ends here 
//accessing the data from the returned api.
let accessdata = (data) => {
    data.forEach(element => {
        console.log("Itemname : ", element.title)

    });
}

document.getElementById("fetch_access").addEventListener('click', () => {
    console.log("accesss initiated")
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => { accessdata(data) })
})