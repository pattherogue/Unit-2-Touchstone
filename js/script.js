// Initialize cart array to store items
let cart = [];

// Subscribe Feature Alert (Footer of Every Web Page)
document.querySelectorAll('form').forEach(function(form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        if (form.id === 'contactForm') {
            saveToLocalStorage();
            alert('Thank you for your message');
        } else {
            alert('Thank you for subscribing');
        }
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
        updateSessionStorage();
    });
});

// View Cart
document.querySelector('.view-cart-btn').addEventListener('click', function() {
    displayCart();
});

// Event listener for clearing the cart
document.getElementById('clearCartBtn').addEventListener('click', function() {
    clearCart();
    alert('Cart cleared');
    updateSessionStorage();
});

// Event listener for processing the order
document.getElementById('processOrderBtn').addEventListener('click', function() {
    processOrder();
    alert('Thank you for your order');
    clearCart();
    updateSessionStorage();
});

// Function to add item to cart
function addItemToCart(item) {
    cart.push(item);
}

// Function to update sessionStorage
function updateSessionStorage() {
    sessionStorage.setItem('cart', JSON.stringify(cart));
}

// Function to display cart
function displayCart() {
    const cartItems = JSON.parse(sessionStorage.getItem('cart')) || [];
    if (cartItems.length === 0) {
        alert('Your cart is empty');
    } else {
        let message = 'Your cart contains: \n';
        cartItems.forEach(item => {
            message += `${item.name} - $${item.price}\n`;
        });
        alert(message);
    }
}

// Function to clear the cart
function clearCart() {
    cart = []; // Clear the cart
    sessionStorage.removeItem('cart');
}

// Function to process the order
function processOrder() {
    // Implement the logic to process the order here
    // Optionally, send the cart data to a server-side script for further processing
}

// Function to save form data to localStorage
function saveToLocalStorage() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const formData = {
        name: name,
        email: email,
        message: message
    };

    localStorage.setItem('contactForm', JSON.stringify(formData));
}
