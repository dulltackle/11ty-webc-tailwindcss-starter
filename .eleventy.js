const pluginWebc = require("@11ty/eleventy-plugin-webc");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginWebc, {
    components: "src/_includes/webc/**/*.webc",
  });

  eleventyConfig.setServerOptions({
    domDiff: false,
  });

  eleventyConfig.addPassthroughCopy("src/style.css");

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
