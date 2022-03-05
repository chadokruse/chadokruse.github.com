/* global imagesLoaded Isotope */
function ready(fn) {
  if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function() {
  const filterButtons = document.querySelectorAll('a[data-filter]');
  const filterBarHeight = document.getElementById('filter-bar').offsetHeight;
  const cards = document.getElementById('allcards');
  const loading = document.getElementById('loading');
  const hash = location.hash;
  const hashToFilter = location.hash.replace('#', '.');
  let iso;

  // Adjust filter button styling based on presence of url hash on page load
  if (hash) {
    // Reset default active state
    document.getElementById('all').classList.remove('active');

    // Prevent auto scroll to anchor tag if hash exists
    // This allows a new user following a link to view the hero
    window.addEventListener('onbeforeunload', (e) => {
      e.preventDefault();
    });
  } else {
    // Add styling to 'All' filter button to mimic default :target handling
    document.getElementById('all').classList.add('active');
  }

  // Isotope - initial layout
  imagesLoaded(cards, function() {
    /**
     * IsoTope uses its sister 'imagesLoaded' plugin
     * Allows IsoTope to wait until all images are loaded before initializing
     * Lighthouse speeds are perfect, but can easlily refactor to eliminate
     *
     * @param { Element } cards - The wrapper element for the portfolio cards
     */

    // Init Isotope now that all images have loaded
    iso = new Isotope(cards, {
      layoutMode: 'packery',
      itemSelector: '.eachcard',
      percentPosition: true,
      filter: hash && hash !== '#all' ? hashToFilter : '*',
      transitionDuration: '0.4s',
      hiddenStyle: {
        opacity: 0,
        transform: 'scale(0.001)',
      },
      visibleStyle: {
        opacity: 1,
        transform: 'scale(1)',
      },
    });

    // Fade in cards
    loading.classList.add('opacity-0');
    loading.classList.remove('opacity-100');
    cards.classList.add('opacity-100');
    loading.classList.add('hidden');
  });

  // Isotope - filter items on click
  filterButtons.forEach(filter => {
    filter.addEventListener('click', (e) => {
      const filterValue = e.target.dataset.filter;

      // Remove default active class added to 'All' button
      document.getElementById('all').classList.remove('active');

      // Create new Isotope layout
      iso.arrange({ 'filter': filterValue });

      // If user is below filter bar, reset scroll position
      // Note: This works in combination with:
      // 1) Anchor tag IDs set in the filter bar HTML
      // 2) Use of the :target pseudo element (for highlighting based on url hash)
      scrollToFilter();
    });
  });

  function scrollToFilter() {
    // Note: the :target pseudo element causes the initial jump when filter bar is not yet fixed to top
    const focusAnchor = document.getElementById('filter-focus');
    if (window.scrollY > focusAnchor.offsetTop) {
      window.scrollTo({
        top: focusAnchor.offsetTop - filterBarHeight,
        left: 0,
        behavior: 'auto',
      });
    }
  }
});
