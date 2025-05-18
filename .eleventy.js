const { DateTime } = require("luxon");
const readingTime = require('eleventy-plugin-reading-time');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

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