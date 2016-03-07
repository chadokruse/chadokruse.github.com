$( function() {

  var $container = $('#allcards');

  $container.imagesLoaded( function(){
    //$container.fadeIn(1000).isotope({
    $('#loading').hide();
    $container.animate({opacity:1},1000).isotope({
      layoutMode: 'packery',
      itemSelector: '.eachcard'
    });
  });

  // Isotope - filter items on click
  $('a.js-filter').on( 'click', function() {

    //Sort cards
    var filterValue = $(this).attr('data-filter');
    $container.isotope({ filter: filterValue });

    //Scroll back to filter bar if user if below bar
    var scrollToFilter = function(){
      if ($(window).scrollTop() > 250) {
        $('body,html').animate({
            //scrollTop: 0
            scrollTop: $('#filter-focus').offset().top
            }, "fast");
      }
    };
    scrollToFilter();

    // Highlight current subnav link
    $('a.js-filter').removeClass('current');
    $(this).addClass('current');

  });

  // Sticky Nav (filter bar sticks to top when reaches top)
  $('#filter-bar').affix({
      offset: {
        top: $('.header-wrapper').height()
      }
  });

});
