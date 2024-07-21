document.querySelectorAll('.video-segment').forEach(video => {
    video.addEventListener('ended', function() {
        // Check if the viewport width is less than 768px
        if (window.matchMedia('(max-width: 767px)').matches) {
            // If true, do not replay the video. This is to ensure that on smaller screens,
            // where bandwidth might be limited or user interaction is different,
            // videos do not automatically replay, enhancing user experience and conserving data.
            console.log('Video will not replay due to viewport width being less than 768px.');
            setTimeout(() => {
                video.play();
            }, 10000);
            return; // Exit the function early
        }

        // If the viewport width is 768px or more, wait for 5 seconds before replaying the video
        setTimeout(() => {
            video.play();
        }, 5000);
    });
});