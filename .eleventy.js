module.exports = function(eleventyConfig) {
  // Make Liquid capable of rendering "partials"
  eleventyConfig.setLiquidOptions({
    dynamicPartials: false,
  });

  // Passthrough static items
  eleventyConfig.addPassthroughCopy('favicon.ico');
  eleventyConfig.addPassthroughCopy('images');
  // eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('js');
  eleventyConfig.addPassthroughCopy({'./node_modules/flowbite/dist/flowbite.js': './js/flowbite.js'});

  // Watch for css and config changes
  eleventyConfig.addWatchTarget('./tailwind.config.js');
  eleventyConfig.addWatchTarget('./css/tailwind.css');
  eleventyConfig.addWatchTarget('./css/main.css');

  
  eleventyConfig.addCollection('cards', function(collectionApi) {
    return collectionApi.getAll().filter(function(item) {
      // Side-step tags and do your own filtering
      return 'item_sort' in item.data;
    });
  });

  /* Works 
  eleventyConfig.addCollection("cards", function(collectionApi) {
    return collectionApi.getAll();
  });
  */
  

  /* Does not work
  eleventyConfig.addCollection('cards', collection => {
    return collection.getAll('cards');
  });
  */
  

  return {
    dir: {
      layouts: '_layouts'
    }
  }
};