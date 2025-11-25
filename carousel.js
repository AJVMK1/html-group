// Initialize Bootstrap Carousel
document.addEventListener("DOMContentLoaded", function () {
    const myCarousel = document.querySelector("#demo");

    if (myCarousel) {
        new bootstrap.Carousel(myCarousel, {
            interval: 3000, // Auto-slide every 3 seconds
            ride: "carousel",
            pause: "hover",
            wrap: true
        });
    }
});
