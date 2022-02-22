/* global imagesLoaded Isotope */
function ready(fn) {
  if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function() {
  const cards = document.getElementById('allcards');
  const loading = document.getElementById('loading');
  let iso;

  // Isotope - initial layout
  imagesLoaded(cards, function() {
    // Hide loading element
    loading.style.display = 'none';

    // Init Isotope now that all images have loaded
    iso = new Isotope(cards, {
      layoutMode: 'packery',
      itemSelector: '.eachcard',
    });
    // Set initial Isotope layout
    // iso.layout();
    
    // Fade in all cards
    cards.style.transition = 'opacity 1s ease-in-out';
    cards.style.opacity = 1;
  });

  // Isotope - filter items on click
  const filters = document.querySelectorAll('a.js-filter');
  filters.forEach(filter => {
    filter.addEventListener('click', (e) => {
      const filterValue = e.target.dataset.filter;

      // Create new Isotope layout
      iso.arrange({ 'filter': filterValue });

      // If user below filter bar, reset scroll position
      function scrollToFilter() {
        const focusAnchor = document.getElementById('filter-focus');
        let scrollTop = window.pageYOffset;
        if (scrollTop > 250) {
          window.scrollTo({
            'top': focusAnchor.offsetTop,
            'left': 0,
            'behavior': 'auto',
          });
        }
      }
      scrollToFilter();

      // Highlight current subnav link
      filters.forEach(el => {
        el.classList.remove('current');
      });
      e.target.classList.add('current');
    });
  });

  // Sticky Filter Bar
  // Mimics Bootstrap v3 affix functionality
  const filterBar = document.getElementById('filter-bar');
  const headerWrapper = document.querySelector('.header-wrapper');
  window.addEventListener('scroll', e => {
    affix(e);
  });
 
  function affix() {
    const headerWrapperHeight = headerWrapper.offsetHeight;
    if (window.pageYOffset >= headerWrapperHeight) {
      filterBar.classList.add('affix');
    } else {
      filterBar.classList.remove('affix');
    }
  }
});
