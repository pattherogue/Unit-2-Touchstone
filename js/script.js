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

// Event listener for clearing the cart
document.getElementById('clearCartBtn').addEventListener('click', function() {
    if (isCartEmpty()) {
        alert('No items to clear');
    } else {
        clearCart();
        alert('Cart cleared');
    }
});

// Event listener for processing the order
document.getElementById('processOrderBtn').addEventListener('click', function() {
    if (isCartEmpty()) {
        alert('Cart is empty');
    } else {
        processOrder();
        alert('Thank you for your order');
    }
});

// Function to add item to cart
function addItemToCart(item) {
    cart.push(item);
}

// Function to clear the cart
function clearCart() {
    cart = []; // Clear the cart
}

// Function to check if cart is empty
function isCartEmpty() {
    return cart.length === 0;
}

// Function to process the order
function processOrder() {
    // Implement the logic to process the order here
    // For example, you can send the cart data to a server-side script for further processing
    // After processing, you can clear the cart or perform any other necessary actions
}

// Web Form Alert (About Us/Contact Page)
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    alert('Thank you for your message');
});

