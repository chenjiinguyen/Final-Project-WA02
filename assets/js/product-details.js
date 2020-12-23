const urlParams = new URLSearchParams(window.location.search);

let id_product = urlParams.get("id")
if (id_product != null && id_product.length > 0) {
    let product = null;
    for (let i = 0; i < products.length; i++) {
        if(products[i].id == id_product){
            product = products[i];
            break;
        }
        
    }
    if(product != null){
        document.getElementById("price").innerHTML = product.price + " VND"
        document.getElementById("game-name").innerHTML = product.name;
        document.getElementById("gameVideo").setAttribute("src","https://www.youtube.com/embed/" + product.youtube_id);  
        document.getElementById("gameInfo").innerHTML = product.infomation;  
    }else{
        window.location="/"; 
    }
}else{
    window.location="/";
}