
let domcreation = (products) => {
    console.log(products)
    products.forEach(element => {
        // flow of creation
        console.log(element.title)
        let div_container = document.getElementById("mastercontainer")
        let prod_card = document.createElement("div");
        let img_holder = document.createElement('div')
        let img = document.createElement("img");
        let product_details = document.createElement('div')
        let api_title = document.createElement("span")
        let t_label = document.createElement("label")
        let price_span = document.createElement("span")
        let lbl_price = document.createElement("label")
        let btn = document.createElement("button")


        //flow of addition
        prod_card.classList.add("product");
        div_container.append(prod_card);
        img_holder.classList.add("imgholder")
        prod_card.append(img_holder)
        img.src = element.image;
        img_holder.append(img);
        product_details.classList.add("productdetails")
        prod_card.append(product_details)
        api_title.classList.add("title")
        product_details.append(api_title)
        t_label.id = "lbl_titlename"
        let maxLength=15;
        let protitle=element.title;
        protitle=protitle.length > maxLength ? protitle.slice(0, maxLength).trim() + '...' : (protitle);
        t_label.innerText = protitle;
        api_title.append(t_label);
        price_span.classList.add("price")
        product_details.append(price_span)
        lbl_price.innerText = element.price
        price_span.append(lbl_price)
        btn.value = "Buy Now"
        btn.innerText="Buy Now"
        btn.id = "Buy"
        prod_card.append(btn);

    });

}

fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(result => { domcreation(result) })
    .error(error => console.log("failed to fetch the objects", error))