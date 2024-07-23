console.log("Base script loaded successfully");



// $(document).ready(function() {
//     const includeHTML = (selector, url) => {
//         // Return a new Promise
//         return new Promise((resolve, reject) => {
//             $(selector).load(url, function(response, status, xhr) {
//                 if (status == "success") {
//                     $(document).trigger('includeContentLoaded');
//                     resolve(); // Resolve the promise on success
//                 } else {
//                     reject(xhr.statusText); // Reject the promise on failure
//                 }
//             });
//         });
//     };

//     // Chain the calls with .then()
//     includeHTML("header", "/header.html")
//         .then(() => includeHTML("footer", "/footer.html"))
//         .catch(error => console.error("Failed to load HTML:", error)); // Catch any error
// });