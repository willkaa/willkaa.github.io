function showMessage() {
    const message = document.getElementById("message");
    message.style.display = message.style.display === "block" ? "none" : "block";
}

// Menambahkan elemen gelembung secara dinamis
window.onload = function() {
    createBubbles();
    createStars();
};

function createBubbles() {
    const bubbleContainer = document.body;
    
    // Membuat gelembung kecil, sedang, dan besar
    for (let i = 0; i < 5; i++) {
        const bubble = document.createElement("div");
        bubble.classList.add("bubble", i % 2 === 0 ? "bubble-small" : i % 3 === 0 ? "bubble-medium" : "bubble-large");
        bubbleContainer.appendChild(bubble);
    }
}

function createStars() {
    const starContainer = document.body;
    
    // Membuat bintang bergerak di latar belakang
    for (let i = 0; i < 20; i++) {
        const star = document.createElement("div");
        star.classList.add("star-background");
        starContainer.appendChild(star);
    }
}
