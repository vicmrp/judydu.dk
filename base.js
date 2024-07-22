console.log("Base script loaded successfully");



$(document).ready(function() {
    const includeHTML = (selector, url) => {
        $(selector).load(url, function(response, status, xhr) {
            if (status == "success") {
                $(document).trigger('includeContentLoaded');
            }
        });
    };

    includeHTML("head", "/head.html");
    includeHTML("header", "/header.html");
    includeHTML("footer", "/footer.html");
});
