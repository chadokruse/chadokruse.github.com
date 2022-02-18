module.exports = function(eleventyConfig) {
  // Make Liquid capable of rendering "partials"
  eleventyConfig.setLiquidOptions({
    dynamicPartials: false,
  });

  // Passthrough static items
  eleventyConfig.addPassthroughCopy('favicon.ico');
  eleventyConfig.addPassthroughCopy('images');

  
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