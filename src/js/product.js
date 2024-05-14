import { fetchProducts } from "./shop";
import productImgPath from "/images/product.jpg"


const product = async() => {
    const productData = await fetchProducts();
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productId = urlParams.get("id");
    const productExist = productData.find( 
        (singleProduct) => singleProduct.id === parseInt(productId,10));
console.log(productExist);
    const productHtml =
        // const productData = await product();
            `<div class="product-choosed">
                <img id="cofe-foto" src = "${productImgPath}" alt="product image">
                <div class="product-container-info">
                    <div class="product-Name">
                        <h1>${productExist.productName}</h1>
                    </div>
                    <div class = "product-price">
                        <p>${productExist.price / 100}€</p>
                    </div>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sit omnis totam? Modi id in distinctio eius quod hic fugiat?</p>
                    <a class="add-korb" href=""> warenkorb </a>
                    <div class="icons">
                        <div class="icon-info">
                            <img src="../icon/Icon Kaffee Bohnen.jpg" alt="Kaffee Bohnen">
                            <p> Mild </p>
                        </div>
                        <div class="icon-info">
                            <img src="../icon/Icon French Press.jpg" alt="French Press">
                            <p> Für <br> Filterkaffee </p>
                        </div>
                        <div class="icon-info">
                        <img src="../icon/Icon Kaffee Schaufel.jpg" alt="Kaffee Schaufel"> 
                            <p> gemahlen </p>
                        </div>   
                    </div>
                </div>
            </div> 
            <div class="description-Maya">
                <h1> Beschreibung</h1>
                <div class = "product-desc">
                <p>${productExist.description}</p>
            </div> 
        </div>
  
        `;
        const productContainer = document.querySelector(".product-detail");
        productContainer.innerHTML = productHtml;
}
product();