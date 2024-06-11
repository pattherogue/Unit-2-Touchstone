// Initialize cart array to store items
let cart = [];

// Subscribe Feature Alert (Footer of Every Web Page)
document.querySelectorAll('form').forEach(function(form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        alert('Thank you for subscribing');
    });
});

// Add-to-Cart Feature Alerts (Gallery Page)
document.querySelectorAll('.add-to-cart-btn').forEach(function(button) {
    button.addEventListener('click', function() {
        const item = {
            id: button.dataset.itemId,
            name: button.dataset.itemName,
            price: button.dataset.itemPrice
        };
        addItemToCart(item);
        alert('Item added to the cart');
    });
});

// Function to add item to cart
function addItemToCart(item) {
    cart.push(item);
}

// Event listener for clearing the cart
document.getElementById('clearCartBtn').addEventListener('click', function() {
    if (isCartEmpty()) {
        alert('No items to clear');
    } else {
        cart = []; // Clear the cart
        alert('Cart cleared');
    }
});

// Event listener for processing the order
document.getElementById('processOrderBtn').addEventListener('click', function() {
    if (isCartEmpty()) {
        alert('Cart is empty');
    } else {
        alert('Thank you for your order');
    }
});

// Function to check if cart is empty
function isCartEmpty() {
    return cart.length === 0;
}

// Web Form Alert (About Us Page)
document.getElementById('submitBtn').addEventListener('click', function() {
    alert('Thank you for your message');
});
