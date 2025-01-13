// urban-script.js

const products = [
    { id: 1, name: "Emperor Varsity Jacket", price: 5000, image: "https://via.placeholder.com/200" },
    { id: 2, name: "Never Outgunned T-Shirt", price: 1500, image: "https://via.placeholder.com/200" },
    { id: 3, name: "Gunner T-Shirt", price: 1500, image: "https://via.placeholder.com/200" },
    { id: 4, name: "Iron Horse T-Shirt", price: 1250, image: "https://via.placeholder.com/200" },
];

let cart = [];

// Render Products
function renderProducts(filteredProducts = products) {
    const grid = document.getElementById("product-grid");
    grid.innerHTML = "";
    filteredProducts.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        grid.appendChild(card);
    });
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartCount();
}

// Update Cart Count
function updateCartCount() {
    document.getElementById("cart-count").textContent = cart.length;
}

// Search Functionality
document.getElementById("search").addEventListener("input", function (e) {
    const query = e.target.value.toLowerCase();
    const filteredProducts = products.filter(p => p.name.toLowerCase().includes(query));
    renderProducts(filteredProducts);
});

// Render Cart
function renderCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        total += item.price;
        const itemDiv = document.createElement("div");
        itemDiv.textContent = `${item.name} - ₹${item.price}`;
        cartItems.appendChild(itemDiv);
    });

    cartTotal.textContent = total;
}

// Open Cart
document.getElementById("cart-button").addEventListener("click", () => {
    renderCart();
    document.getElementById("cart-modal").style.display = "flex";
});

// Close Cart
document.getElementById("close-cart").addEventListener("click", () => {
    document.getElementById("cart-modal").style.display = "none";
});

// Initialize
renderProducts();
