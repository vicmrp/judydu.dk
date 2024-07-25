document.addEventListener("DOMContentLoaded", function() {

    fetch("carousel.html").then(response => response.text()).then(data => {
        document.getElementById('carousel').innerHTML = data;
    });
    fetch("about-us.html").then(response => response.text()).then(data => {
        document.getElementById('about-us-section').innerHTML = data;
    });
});