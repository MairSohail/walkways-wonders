document.addEventListener('DOMContentLoaded', function () {
    const cartCountElement = document.getElementById('cart-count');
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    let cartCount = 0;
    let cartTotal = 0;
    function addToCart(event) {
        const button = event.target.closest('.add-to-cart');
        if (button) {
            const productCard = button.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = parseFloat(productCard.querySelector('p').textContent.replace(/[^\d.]/g, ''));
            alert(`Added "${productName}" to your cart for PKR:${productPrice.toFixed(2)}.`);
            cartCount += 1;
            cartTotal += productPrice;
            cartCountElement.textContent = cartCount;
            cartTotalElement.textContent = `Total: PKR:${cartTotal.toFixed(2)}`;
            const cartItem = document.createElement('div');
            cartItem.textContent = `${productName} - PKR${productPrice.toFixed(2)}`;
            cartItemsElement.appendChild(cartItem);
        }
    }
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
    document.getElementById('checkout-btn').addEventListener('click', function () {
        if (cartCount > 0) {
            alert(`Thank you for your order! Your shoes are getting ready to walk your way.😊😊 PKR${cartTotal.toFixed(2)}.`);
            cartCount = 0;
            cartTotal = 0;
            cartCountElement.textContent = cartCount;
            cartTotalElement.textContent = `Total: PKR:${cartTotal.toFixed(2)}`;
            cartItemsElement.innerHTML = '';
        } else {
            alert("Your cart is waiting! Complete your purchase now before your items are gone!");
        }
    });
});
