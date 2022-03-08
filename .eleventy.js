module.exports = function(eleventyConfig) {
  // Create cards collection
  // Note: See the _cards/11tydata .js file in the _cards directory
  // Current best practice appears to be setting 'permalink: false' there
  // Yet, having settings for that collection in two places feels strange
  eleventyConfig.addCollection('cards', function(collectionApi) {
    return collectionApi.getFilteredByGlob('src/_cards/*.md');
  });

  // Make Liquid capable of rendering "partials"
  eleventyConfig.setLiquidOptions({
    dynamicPartials: false,
  });

  // Passthrough static items
  eleventyConfig.addPassthroughCopy('./src/safari-pinned-tab.svg');
  eleventyConfig.addPassthroughCopy('./src/apple-touch-icon.png');
  eleventyConfig.addPassthroughCopy('./src/favicon-32x32.png');
  eleventyConfig.addPassthroughCopy('./src/favicon-16x16.png');
  eleventyConfig.addPassthroughCopy('./src/favicon.ico');
  eleventyConfig.addPassthroughCopy('./src/robots.txt');
  eleventyConfig.addPassthroughCopy('./src/images');
  eleventyConfig.addPassthroughCopy('./src/js');
  eleventyConfig.addPassthroughCopy('./CNAME');
  eleventyConfig.addPassthroughCopy({ './node_modules/flowbite/dist/flowbite.js': './js/flowbite.js' });
  eleventyConfig.addPassthroughCopy({ './src/css/resume.css': './css/resume.css' });

  // Watch for css and config changes
  eleventyConfig.addWatchTarget('./tailwind.config.js');
  eleventyConfig.addWatchTarget('./src/css/main.css');
  eleventyConfig.addWatchTarget('./src/css/resume.css');

  return {
    dir: {
      input: 'src',
      output: 'dist',
      layouts: '_layouts'
    }
  }
};