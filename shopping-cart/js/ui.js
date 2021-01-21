class Cart{  
// Add products to the cart 
    static addProductToCart(productImage, productTitle, author) {    
    let newProduct = document.createElement('li');
    let emptyCart = document.querySelectorAll('.empty-cart')[0]; 
    let cartSubHeading = document.querySelector('.emtyMsg');
        
    // cartSubHeading.innerText = 'Product has been added in the cart';   
    // check if the product already exists in the cart
    let getCartProdTitle = emptyCart.querySelectorAll('.product-title-cart');   
    for (let i = 0; i < getCartProdTitle.length; i++) {
        if (getCartProdTitle[i].innerText === productTitle) {
            alert('Product exists in the cart');
            return;
        };
    };

    newProduct.innerHTML = `    
    <table class="table table-borderless">
        <tbody>
            <tr>
                <td class="calc"><img src="${productImage}" class="product-img-cart img-fluid img-thumbnail"
                        alt="product-img"></td>
                <td>
                    <li class="product-title-cart">${productTitle}</li> 
                    <li class="card-text"><small class="text-muted">${author}</small></li>
                </td>
            </tr>
        </tbody>
    </table>
    <a href="#" class="btn btn-outline-danger btn-sm remove-btn">Remove</a>
    <hr>
    `;
    emptyCart.appendChild(newProduct);    
    // Remove cart button new event listener for new HTML elemnts as it/they loaded later
    newProduct.querySelectorAll('.remove-btn')[0].addEventListener('click',removeProductFromCart);
};

}
