let product_result = document.getElementById("products");
const urlParams = new URLSearchParams(window.location.search);
const formatter = new Intl.NumberFormat('it-IT')

let search_keyword = urlParams.get("search")
if (search_keyword != null && search_keyword.length > 0) {
    result = document.getElementById("result")
    result.innerHTML = "<h2>Result for: " + search_keyword + "</h2>"
    product_result.innerHTML = "";
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        if (product.name.search(search_keyword) >= 0) {

            element_product = document.createElement('div');
            element_product.setAttribute("class", "product")
            element_product.innerHTML = ` <div class="thumbnail-product">
                                                <img src="${product.image}" />
                                            </div>
                                            <div class="info-product">
                                                <div class="product-center">
                                                    <h3>${product.name}</h3>
                                                </div>
                                                <div class="product-center">
                                                    <h3>${formatter.format(product.price)} VND</h3>
                                                </div>
                                                <div class="product-center">
                                                    <a href="/product.html?id=${product.id}" class="buybtn">Mua Ngay</a>
                                                </div>
    
                                            </div>`
            product_result.appendChild(element_product)
        }
    }
    if (product_result.innerHTML == "") {
        alert = document.createElement('h2');
        alert.innerHTML = "No result for: " + search_keyword
        alert.setAttribute("class", "center");
        product_result.appendChild(alert)
    }
}

