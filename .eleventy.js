module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ public: "/" });
  eleventyConfig.addPassthroughCopy({ "assets/img": "assets/img" });

  return {
    dir: {
      input: "pages",
      output: "_site",
    },
  };
};
