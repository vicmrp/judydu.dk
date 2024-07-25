document.addEventListener("DOMContentLoaded", function() {
    loadAboutUs();
    window.addEventListener('resize', adjustCarouselHeight);
});

function loadAboutUs() {
    fetch("about-us.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById('about-us-section').innerHTML = data;
            adjustCarouselHeight();  // Adjust height after content is loaded
        });
}

function adjustCarouselHeight() {
    var mainHeight = document.querySelector('main').clientHeight;
    var aboutUsHeight = document.getElementById('about-us-section').clientHeight;
    var carouselHeight = mainHeight - aboutUsHeight;

    var carousel = document.querySelector('.carousel-inner');
    if (carousel) {
        carousel.style.height = `${carouselHeight}px`;
    }
}