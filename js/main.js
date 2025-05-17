document.addEventListener('DOMContentLoaded', function() {
    const landingImage = document.querySelector('.landing-hero img');

    if (landingImage) {
        const originalSrc = '/assets/img/messy.jpeg'; // Path to your original image
        const hoverSrc = '/assets/img/clean.jpeg';   // Path to your hover image

        // Preload the hover image to prevent flicker on first hover
        const preloadHoverImage = new Image();
        preloadHoverImage.src = hoverSrc;

        landingImage.addEventListener('mouseenter', function() {
            this.src = hoverSrc;
        });

        landingImage.addEventListener('mouseleave', function() {
            this.src = originalSrc;
        });
    }
});
