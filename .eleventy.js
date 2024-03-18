module.exports = function (eleventyConfig) {
  // Create cards collection
  // Note: See the _cards/11tydata .js file in the _cards directory
  // Current best practice appears to be setting 'permalink: false' there
  // Yet, having settings for that collection in two places feels strange
  eleventyConfig.addCollection('cards', function (collectionApi) {
    return collectionApi.getFilteredByGlob('src/_cards/*.md');
  });

  eleventyConfig.addCollection('coverLetters', function (collectionApi) {
    return collectionApi.getFilteredByGlob('./src/_cover-letters/*.md');
  });

  // Make Liquid capable of rendering "partials"
  eleventyConfig.setLiquidOptions({
    dynamicPartials: false,
  });

  // Explicity use .eleventyignore, not .gitignore
  eleventyConfig.setUseGitIgnore(false);

  // Passthrough static items
  eleventyConfig.addPassthroughCopy({ './src/css/resume.css': './css/resume.css' });
  eleventyConfig.addPassthroughCopy({ './src/static': '.' });
  eleventyConfig.addPassthroughCopy('./src/images');
  eleventyConfig.addPassthroughCopy('./src/js');

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