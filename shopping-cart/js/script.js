// Define UI elements
let addBtn = document.querySelectorAll('#addToCartBtn');
let removeCartBtn = document.querySelectorAll('.remove-btn');


// Define event listeners
// Event listener for add to cart button
addBtn.forEach(item => {
    let cartButton = item;
    cartButton.addEventListener('click', actionOfaddToCartButton);
});

// Event listener for remove button
removeCartBtn.forEach(item => {
    let removeBtn = item;
    removeBtn.addEventListener('click', removeProductFromCart);
});
 


// Define function for event listener
// Action of add to cart button product to the cart
function actionOfaddToCartButton(e) {
    let getCartButton = e.target;
    let getParentOfAddToCart = getCartButton.parentElement.parentElement;
    // select the first item (img) from the node list
    let productImage = getParentOfAddToCart.querySelectorAll('.product-img')[0].src;
    // select the first item (h5) from the node list
    let productTitle = getParentOfAddToCart.querySelectorAll('.product-title')[0].innerText;
    // select the first item (author) from the node list
    let author = getParentOfAddToCart.querySelectorAll('.card-text')[0].innerText;    

    // Add to cart function
    Cart.addProductToCart(productImage, productTitle, author); 
};


// remove product 
function removeProductFromCart(e) {
    e.target.parentElement.remove();    
};
