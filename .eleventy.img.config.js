const Image = require('@11ty/eleventy-img');
const path = require('path');

// This script pre-optimizes specific images that can't use the shortcode directly
// because they need to maintain direct <img> tag behavior (e.g., for hover effects)

(async () => {
  // List of images to optimize
  const imagesToOptimize = [
    'assets/img/clean.jpeg',
    'assets/img/messy.jpeg'
  ];

  // Loop through each image and optimize it
  for (const imgPath of imagesToOptimize) {
    try {
      console.log(`Optimizing ${imgPath}...`);
      
      // Get the file extension and basename
      const extension = path.extname(imgPath);
      const basename = path.basename(imgPath, extension);
      
      // Generate optimized versions
      await Image(imgPath, {
        widths: [800, 1200, 'auto'], // Use appropriate widths for hero images
        formats: ['webp', 'jpeg'],
        outputDir: '_site/assets/img/', // Output to the same directory structure
        urlPath: '/assets/img/',
        filenameFormat: function (id, src, width, format) {
          // Keep the original filename for the original format at original size
          // This ensures the hover effect JavaScript still works with the same paths
          if (format === 'jpeg' && width === 'auto') {
            return basename + extension;
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