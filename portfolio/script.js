document.addEventListener("DOMContentLoaded", function() {
    adjustCarouselHeight();
    window.addEventListener('resize', adjustCarouselHeight);
});

function adjustCarouselHeight() {
    // Get the main container height
    var mainHeight = document.querySelector('main').clientHeight;

    // Get the height of the About Us section
    var aboutUsHeight = document.getElementById('about-us-section').clientHeight;

    // Calculate the new height for the carousel
    var carouselHeight = mainHeight - aboutUsHeight;

    // Set the height of the carousel
    var carousel = document.querySelector('.carousel-inner');
    if (carousel) {
        carousel.style.height = `${carouselHeight}px`;
    }
}
