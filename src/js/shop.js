import productImgPath from "/images/product.jpg"

export async function fetchProducts(){
    const productRequest = await fetch("/public/products.json");
    return productRequest.json();
}

const buildProductHtml = async (limit) =>{
    const productData = await fetchProducts();
    return productData.map((product, i) => !limit || (limit && i < limit) ? `
        <a href="/sub-page/product.html?id=${product.id}" class="product">
            <img src = "${productImgPath}" alt="product image">
            <div class="product-Name">
                ${product.productName}
            </div>
            <div class = "product-price">
                ${product.price / 100}€
            </div>
            <div class="icons">
                <img src="../icon/Kaffee Bohnen.png" alt="Kaffee Bohnen">
                <img src="../icon/French Press.png" alt="French Press">
                <img src="../icon/Kaffee Schaufel.png" alt="Kaffee Schaufel"> 
            </div>
        </a>    
    `: "").join("");
}

const shop = async () => {
    const currentPage = window.location.pathname;
    const limit = currentPage === "/sub-page/product.html" && 4;
    console.log(currentPage);
    const productHtml = await buildProductHtml(limit);

    const productContainer = document.querySelector(".product-container");
    productContainer.innerHTML = productHtml;
}
shop();
