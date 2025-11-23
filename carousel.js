// ====== CAROUSEL SCRIPT ======

// Get all carousel elements
const items = document.querySelectorAll(".carousel-item");
const indicators = document.querySelectorAll(".carousel-indicators button");
let currentIndex = 0;
let autoSlide;

// Show slide function
function showSlide(index) {
    // Wrap index
    if (index < 0) index = items.length - 1;
    if (index >= items.length) index = 0;

    // Remove active from all
    items.forEach(item => item.classList.remove("active"));
    indicators.forEach(dot => dot.classList.remove("active"));

    // Add active to selected
    items[index].classList.add("active");
    indicators[index].classList.add("active");

    currentIndex = index;
}

// Button controls
document.querySelector(".carousel-control-prev").addEventListener("click", () => {
    showSlide(currentIndex - 1);
    resetAutoSlide();
});

document.querySelector(".carousel-control-next").addEventListener("click", () => {
    showSlide(currentIndex + 1);
    resetAutoSlide();
});

// Indicator controls
indicators.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        showSlide(index);
        resetAutoSlide();
    });
});

// Auto-slide every 4 seconds
function startAutoSlide() {
    autoSlide = setInterval(() => {
        showSlide(currentIndex + 1);
    }, 4000);
}

function resetAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
}

// Start the automatic carousel
startAutoSlide();
