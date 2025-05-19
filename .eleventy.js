const { DateTime } = require("luxon");
const readingTime = require('eleventy-plugin-reading-time');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const Image = require("@11ty/eleventy-img");

module.exports = function(eleventyConfig) {
  // Passthrough copy for static assets
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("assets");

  // Date filters
  eleventyConfig.addFilter("readableDate", dateObj => {
    // Check if dateObj is valid, if not, return a default or empty string
    if (!dateObj || !DateTime.fromJSDate(dateObj).isValid) {
      return ""; // Or some other placeholder like "Invalid Date"
    }
    return DateTime.fromJSDate(dateObj).toFormat("LLL dd, yyyy");
  });

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    // Check if dateObj is valid
    if (!dateObj || !DateTime.fromJSDate(dateObj).isValid) {
      return ""; // Or some other placeholder
    }
    return DateTime.fromJSDate(dateObj).toISODate();
  });

  // Manual reading time filter as a backup
  eleventyConfig.addFilter("readingTime", content => {
    const textOnly = content.replace(/(<([^>]+)>)/ig, '');
    const words = textOnly.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / 200); // Assuming average reading speed of 200 words/minute
    return minutes;
  });

  // Reading time plugin
  eleventyConfig.addPlugin(readingTime);

  // Syntax Highlighting Plugin
  eleventyConfig.addPlugin(syntaxHighlight);

  async function imageShortcode(src, alt, sizes = "(min-width: 1024px) 100vw, 50vw", classes = "") {
    if(alt === undefined) {
      // You ordered ALT TEXT? WE GOT ALT TEXT BRO.
      throw new Error(`Missing \`alt\` on image from: ${src}`);
    }

    let metadata = await Image(src, {
      widths: [300, 600, 900, 1200, "auto"], // "auto" will use the original width
      formats: ["webp", "jpeg"], // or png, avif, etc.
      outputDir: "_site/assets/img/optimized/", // where to write the new images
      urlPath: "/assets/img/optimized/", // path used in <img src> and <source srcset>

      // Optional: useful for remote images or when src is an absolute path
      // filenameFormat: function (id, src, width, format, options) {
      //   const extension = path.extname(src);
      //   const name = path.basename(src, extension);
      //   return `${name}-${width}w.${format}`;
      // }
    });

    let imageAttributes = {
      alt,
      sizes,
      loading: "lazy",
      decoding: "async",
    };
    if (classes) {
      imageAttributes.class = classes;
    }

    // You bet we throw an error on missing alt in `imageAttributes` (alt is humane)
    return Image.generateHTML(metadata, imageAttributes);
  }

  // Add the image shortcode
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addLiquidShortcode("image", imageShortcode);
  eleventyConfig.addJavaScriptFunction("image", imageShortcode);

  return {
    dir: {
      input: "pages",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
}; 