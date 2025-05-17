document.addEventListener('DOMContentLoaded', function() {
    const landingImage = document.querySelector('.landing-hero img');

    if (landingImage) {
        const originalSrc = '/assets/img/clean.jpeg'; // Path to your original image
        const hoverSrc = '/assets/img/messy.jpeg';   // Path to your hover image

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

    // Typing effect code
    const typedTextSpan = document.getElementById('job-title-typed');
    const cursorSpan = document.querySelector('.typed-cursor');

    if (typedTextSpan && cursorSpan) {
        const textArray = ["Software Engineer", "Teacher", "Human", "INFJ", "STEM '19", "Penn '23", "Rarely Shuts Up", "ex-Perfectionist"];
        const typingDelay = 100;
        const erasingDelay = 50;
        const newTextDelay = 2000; // Delay before starting to type next text
        let textArrayIndex = 0;
        let charIndex = 0;

        function type() {
            if (charIndex < textArray[textArrayIndex].length) {
                typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingDelay);
            } else {
                setTimeout(erase, newTextDelay);
            }
        }

        function erase() {
            if (charIndex > 0) {
                typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, erasingDelay);
            } else {
                textArrayIndex++;
                if (textArrayIndex >= textArray.length) textArrayIndex = 0;
                setTimeout(type, typingDelay + 500); // Slight delay before typing new text
            }
        }

        // Start the typing effect if on the home page and elements exist
        setTimeout(type, newTextDelay / 2);
    }
});
