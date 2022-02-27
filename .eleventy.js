module.exports = function(eleventyConfig) {
  // Make Liquid capable of rendering "partials"
  eleventyConfig.setLiquidOptions({
    dynamicPartials: false,
  });

  // Passthrough static items
  eleventyConfig.addPassthroughCopy('./src/favicon.ico');
  eleventyConfig.addPassthroughCopy('./src/robots.txt');
  eleventyConfig.addPassthroughCopy('./src/images');
  eleventyConfig.addPassthroughCopy('./src/js');
  eleventyConfig.addPassthroughCopy({'./node_modules/flowbite/dist/flowbite.js': './js/flowbite.js'});

  // Watch for css and config changes
  eleventyConfig.addWatchTarget('./tailwind.config.js');
  eleventyConfig.addWatchTarget('./src/css/main.css');

  
  eleventyConfig.addCollection('cards', function(collectionApi) {
    return collectionApi.getAll().filter(function(item) {
      // Side-step tags and do your own filtering
      return 'item_sort' in item.data;
    });
  });  

  return {
    dir: {
      input: 'src',
      output: 'dist',
      layouts: '_layouts'
    }
  }
};