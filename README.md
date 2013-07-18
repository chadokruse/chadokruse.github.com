##A Jekyll-Powered Portfolio Site##
This is the source code used to power my personal site [chadkruse.com](http://www.chadkruse.com). It's based on Grid-a-licious, a js plugin that I'd call a precursor to the tile layout made popular by Pinterest (Grid-a-licious was first dammit!).

You may find this project useful for visually showcasing past work history to complement your LinkedIn profile or resume. Might work for photography and design portfolios as well.

*Note: All of the usual blog templates/functionality have been gutted, so if it's a blog you seek, this might not be the right sample project for you.*

###Usage###
1. I'm assuming you already know how to get a Jekyll site up and running (I'll add a more detailed tutorial here shortly).
2. I do things differently than most Jekyll templates because I wanted to control the order of the tiles (there are many ways to do this…I happen to choose this method). 
3. All of the tiles are _includes (see `_includes/tiles`). Create your tiles there.
3. Your main landing page is `index.html`. In it you'll find a reference to the `filtered-pages` folder. This folder contains three pages, which correspond to the three filter links in the subnav. In my case, they are `All`, `Social Ventures`, and `Technology Ventures`. Clicking on any of those makes an AJAX call to refresh the tiles without refreshing the whole page. A slightly better user experience IMHO. You can have as many filter tabs as you want.
4. Create your grid of tiles by listing the appropriate include:  
`{% include tiles/about.html %}` in the order you want them to appear.
5. Update the href's in the filter bar (`_includes/header.html`) to match the naming convention in your `filtered-pages` folder. Example: `<li><a class="filter" href="/technology-ventures/">Tech Ventures</a></li>`
5. Replace my Google Analytics ID with your own in `_includes/body-scripts.html`
6. Delete the `CNAME` file. If you want a custom domain, follow [the instructions](https://help.github.com/articles/setting-up-a-custom-domain-with-pages) to do so. If you get stuck, read Github's [troubleshooting](suggestions).
7. Update `robots.txt` if you care about such things.

This section is under development, so stay tuned for more detailed instructions.


##License##

The following directories and their contents are Copyright Chad Kruse. You may not reuse anything therein without my permission:

* _posts/
* tiles/
* images/

All other directories and files are MIT Licensed. Feel free to use the HTML and CSS as you please.