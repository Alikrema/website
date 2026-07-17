module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ public: "/" });

  return {
    dir: {
      input: "pages",
      output: "_site",
    },
  };
};
