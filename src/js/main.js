/* global imagesLoaded Isotope */
function ready(fn) {
  if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function() {
  const filterBarButtons = document.querySelectorAll('a.js-filter');
  const filterBarHeight = document.getElementById('filter-bar').offsetHeight;
  const cards = document.getElementById('allcards');
  const loading = document.getElementById('loading');
  const hash = location.hash;
  const hashToFilter = location.hash.replace('#', '.');
  let iso;

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
    });

    // Fade in cards
    loading.classList.add('opacity-0');
    loading.classList.remove('opacity-100');
    cards.classList.add('opacity-100');
    loading.classList.add('hidden');

    // Hello you glorious recruiters
    // Handle resizing error edge case
    // Cause: IsoTope does not support flexbox
    window.addEventListener('resize', resizeContent);
    let count = 0;
    function resizeContent() {
      if (count < 1) {
        count++;
        console.log('%cHello you glorious recruiter!', 'font-size:1.25rem');
        console.log('Thanks for testing to see if resizing adjusts the layout.');
        console.log('It does, except on xs screen sizes. It\'s a limitation of the plugin I use, which does not support flexbox.');
        console.log('I look forward to discussing why I still think it\'s a good fit for this personal site 😉');
      }
    }
  });

  // Isotope - filter items on click
  filterBarButtons.forEach(filter => {
    // Adjust filter bar button styling if needed
    if (hash && hashToFilter === filter.dataset.filter) {
      filter.classList.add('current');
    }
    if (hash && hashToFilter !== filter.dataset.filter) {
      filter.classList.remove('current');
    }
    // The way Isotope handles filters requires one final scenario
    if (hash && hash === '#all' && filter.dataset.filter === '*') {
      filter.classList.add('current');
    }

    // Handle filter bar button clicks
    filter.addEventListener('click', (e) => {
      const filterValue = e.target.dataset.filter;

      // Create new Isotope layout
      iso.arrange({ 'filter': filterValue });

      // If user is below filter bar, reset scroll position
      scrollToFilter();

      // Highlight current subnav link
      filterBarButtons.forEach(el => {
        el.classList.remove('current');
      });
      e.target.classList.add('current');

      // Handle 'All' button clicks
      // 'All' button has no href - see 'index.html'
      if (filterValue === '*') {
        location.hash = '#all';
      }
    });
  });

  function scrollToFilter() {
    const focusAnchor = document.getElementById('filter-focus');
    const focusAnchorPosition = focusAnchor.offsetTop;
    const currentScrollPosition = window.pageYOffset;
    if (currentScrollPosition > focusAnchorPosition) {
      window.scrollTo({
        'top': focusAnchorPosition - filterBarHeight,
        'left': 0,
        'behavior': 'auto',
      });
    }
  }
});
