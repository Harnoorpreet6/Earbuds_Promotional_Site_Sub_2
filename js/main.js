document.addEventListener('DOMContentLoaded', function() {
    "use strict";

    // Get the video element
    let video = document.getElementById('videoPlayer');

    // Wait for the video metadata to load
    video.addEventListener('loadedmetadata', function() {
        // Play the video
        video.play();
    });
});


(() => {
    const menu = document.querySelector("#menu");
    const hamburger = document.querySelector("#hamburger");
    const closeButton = document.querySelector("#close");
    const menuLinks = document.querySelectorAll("#menu ul a");

    function toggleMenu() {
        menu.classList.toggle("open");
    }

    hamburger.addEventListener("click", toggleMenu);
    closeButton.addEventListener("click", toggleMenu)

    menuLinks.forEach(link=> {
        link.addEventListener("click", toggleMenu);

    })
    
})();