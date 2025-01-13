

document.getElementById("search-button").addEventListener("click", function () {
    const searchQuery = document.getElementById("search-input").value.trim();
    if (searchQuery) {
        alert(`You searched for: ${searchQuery}`);
        // Replace with functionality to filter products
    } else {
        alert("Please enter a search term.");
    }
});

// Optional: Add responsiveness for menu or other features
window.addEventListener("resize", function () {
    console.log(`Window width: ${window.innerWidth}px`);
});
