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

    // Spotlight effect code
    const heroImageForSpotlight = document.querySelector('.hero-image');
    const landingImageForSpotlight = document.querySelector('.hero-image img');
    const spotlightOverlay = document.getElementById('spotlight-overlay');
    const spotlightRadius = 120; // Radius of the spotlight effect - DOUBLED

    if (heroImageForSpotlight && landingImageForSpotlight && spotlightOverlay) {
        const updateSpotlight = (e) => {
            // New gradient for a softer "beam of light"
            spotlightOverlay.style.background = 
                `radial-gradient(circle ${spotlightRadius}px at ${e.clientX}px ${e.clientY}px, 
                rgba(0,0,0,0) 0%, /* Fully transparent at the center */
                rgba(0,0,0,0.85) ${spotlightRadius * 0.7}px, /* Fades to mostly dark */
                rgba(0,0,0,0.95) ${spotlightRadius}px)`; /* Full overlay darkness at radius edge */
        };

        landingImageForSpotlight.addEventListener('mouseenter', () => {
            spotlightOverlay.classList.add('active');
            // heroImageForSpotlight.classList.add('spotlight-active'); // REMOVED - hero image is now also under the overlay
            
            setTimeout(() => {
              document.addEventListener('mousemove', updateSpotlight);
            }, 50); 
        });

        landingImageForSpotlight.addEventListener('mouseleave', () => {
            spotlightOverlay.classList.remove('active');
            // heroImageForSpotlight.classList.remove('spotlight-active'); // REMOVED
            document.removeEventListener('mousemove', updateSpotlight);
            spotlightOverlay.style.background = 'rgba(0,0,0,0)'; // Reset background immediately
        });
    }

    // Home icon hover effect
    const homeIconImage = document.getElementById('home-icon-img');
    if (homeIconImage) {
        const originalHomeIconSrc = '/assets/img/home.png'; 
        const hoverHomeIconSrc = '/assets/img/home-open.png';

        const preloadHoverHomeIcon = new Image();
        preloadHoverHomeIcon.src = hoverHomeIconSrc;

        homeIconImage.addEventListener('mouseenter', function() {
            this.src = hoverHomeIconSrc;
        });
        homeIconImage.addEventListener('mouseleave', function() {
            this.src = originalHomeIconSrc;
        });
    }

    // Blogs icon hover effect
    const blogsIconImage = document.getElementById('blogs-icon-img');
    if (blogsIconImage) {
        const originalBlogsIconSrc = '/assets/img/blog.png'; 
        const hoverBlogsIconSrc = '/assets/img/blog-open.png';

        const preloadHoverBlogsIcon = new Image();
        preloadHoverBlogsIcon.src = hoverBlogsIconSrc;

        blogsIconImage.addEventListener('mouseenter', function() {
            this.src = hoverBlogsIconSrc;
        });
        blogsIconImage.addEventListener('mouseleave', function() {
            this.src = originalBlogsIconSrc;
        });
    }

    // Lore icon hover effect
    const loreIconImage = document.getElementById('lore-icon-img');
    if (loreIconImage) {
        const originalLoreIconSrc = '/assets/img/me.png'; // Path to your original lore icon
        const hoverLoreIconSrc = '/assets/img/me-2.png';    // Path to your hover lore icon (me-2.png)

        // Preload the hover image
        const preloadHoverLoreIcon = new Image();
        preloadHoverLoreIcon.src = hoverLoreIconSrc;

        loreIconImage.addEventListener('mouseenter', function() {
            this.src = hoverLoreIconSrc;
        });

        loreIconImage.addEventListener('mouseleave', function() {
            this.src = originalLoreIconSrc;
        });
    }

    // Contact icon hover effect
    const contactIconImage = document.getElementById('contact-icon-img');
    if (contactIconImage) {
        const originalContactIconSrc = '/assets/img/contact.png'; 
        const hoverContactIconSrc = '/assets/img/contact-open.png';

        const preloadHoverContactIcon = new Image();
        preloadHoverContactIcon.src = hoverContactIconSrc;

        contactIconImage.addEventListener('mouseenter', function() {
            this.src = hoverContactIconSrc;
        });
        contactIconImage.addEventListener('mouseleave', function() {
            this.src = originalContactIconSrc;
        });
    }

    // Projects icon hover effect
    const projectsIconImage = document.getElementById('projects-icon-img');
    if (projectsIconImage) {
        const originalProjectsIconSrc = '/assets/img/blog.png'; // Placeholder
        const hoverProjectsIconSrc = '/assets/img/blog-open.png';    // Placeholder for hover state

        // Preload the hover image
        const preloadHoverProjectsIcon = new Image();
        preloadHoverProjectsIcon.src = hoverProjectsIconSrc;

        projectsIconImage.addEventListener('mouseenter', function() {
            this.src = hoverProjectsIconSrc;
        });

        projectsIconImage.addEventListener('mouseleave', function() {
            this.src = originalProjectsIconSrc;
        });
    }

    // --- Carousel Logic ---
    const carouselTrack = document.querySelector('.carousel-track');
    if (carouselTrack) {
        const items = Array.from(carouselTrack.children);
        const nextButton = document.querySelector('.carousel-button.next');
        const prevButton = document.querySelector('.carousel-button.prev');
        let currentIndex = 0;

        // Set the width of the track based on the number of items
        // This assumes each item takes 100% of the container width
        // carouselTrack.style.width = items.length * 100 + '%';

        function updateCarousel() {
            carouselTrack.style.transform = 'translateX(-' + currentIndex * 100 + '%)';
            // Optional: Disable/enable buttons at ends
            if (prevButton) prevButton.disabled = currentIndex === 0;
            if (nextButton) nextButton.disabled = currentIndex === items.length - 1;
        }

        if (nextButton) {
            nextButton.addEventListener('click', () => {
                if (currentIndex < items.length - 1) {
                    currentIndex++;
                    updateCarousel();
                }
            });
        }

        if (prevButton) {
            prevButton.addEventListener('click', () => {
                if (currentIndex > 0) {
                    currentIndex--;
                    updateCarousel();
                }
            });
        }
        
        // Initialize
        if(items.length > 0) {
             updateCarousel(); // Set initial position and button states
        } else {
            // Hide buttons if no items
            if(nextButton) nextButton.style.display = 'none';
            if(prevButton) prevButton.style.display = 'none';
        }
    }
});
