const Image = require('@11ty/eleventy-img');
const path = require('path');

// This script pre-optimizes specific images that can't use the shortcode directly
// because they need to maintain direct <img> tag behavior (e.g., for hover effects)

(async () => {
  // List of images to optimize
  const imagesToOptimize = [
    // Hero images with hover effect
    'assets/img/clean.jpeg',
    'assets/img/messy.jpeg',
    
    // Navigation bar images with hover effects
    'assets/img/home.png',
    'assets/img/home-open.png',
    'assets/img/me.png',
    'assets/img/me-2.png',
    'assets/img/blog.png',
    'assets/img/blog-open.png',
    'assets/img/contact.png',
    'assets/img/contact-open.png'
  ];

  // Loop through each image and optimize it
  for (const imgPath of imagesToOptimize) {
    try {
      console.log(`Optimizing ${imgPath}...`);
      
      // Get the file extension and basename
      const extension = path.extname(imgPath);
      const basename = path.basename(imgPath, extension);
      
      // Determine best widths based on image type
      let widths = [800, 1200, 'auto']; // Default for hero images
      
      // Navigation icons are smaller, so use smaller widths
      if (imgPath.includes('home.png') || 
          imgPath.includes('home-open.png') || 
          imgPath.includes('me.png') || 
          imgPath.includes('me-2.png') || 
          imgPath.includes('blog.png') || 
          imgPath.includes('blog-open.png') || 
          imgPath.includes('contact.png') || 
          imgPath.includes('contact-open.png')) {
        widths = [50, 100, 'auto']; // Navbar icons are displayed at 50px
      }
      
      // Determine output formats based on input format
      let formats = ['webp'];
      if (extension.toLowerCase() === '.png') {
        formats.push('png'); // Keep PNG format for transparency
      } else {
        formats.push('jpeg'); // Use JPEG for non-transparent images
      }
      
      // Generate optimized versions
      await Image(imgPath, {
        widths: widths,
        formats: formats,
        outputDir: '_site/assets/img/', // Output to the same directory structure
        urlPath: '/assets/img/',
        filenameFormat: function (id, src, width, format) {
          // Keep the original filename for the original format at original size
          // This ensures the hover effect JavaScript still works with the same paths
          if ((format === 'jpeg' && extension.toLowerCase() === '.jpeg') || 
              (format === 'png' && extension.toLowerCase() === '.png')) {
            if (width === 'auto') {
              return basename + extension;
            }
          }
          
          // For other sizes/formats, use a more descriptive filename
          return `${basename}-${width}w.${format}`;
        }
      });
      
      console.log(`✓ ${imgPath} optimized successfully.`);
    } catch (error) {
      console.error(`Error optimizing ${imgPath}:`, error);
    }
  }
})(); 