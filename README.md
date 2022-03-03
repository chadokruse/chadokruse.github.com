## An Eleventy and Tailwind-Powered Portfolio Site  
This is the source code used to power my personal site ([demo](http://www.chadkruse.com)). It takes advantage of Eleventy's Data Cascade and has two primary components:  

1. Isotope.js: Card-based layout with animated filtering  
2. JSON Resume: A liquid-based theme for the JSONResume spec.  

**Screenshots**  

![Screenshot](https://github.com/chadokruse/chadokruse.github.com/blob/main/src/images/screenshot.png?raw=true "Screenshot")

You may find this project useful for visually showcasing past work history to complement your LinkedIn profile or resume. Might work for photography and design portfolios as well.  

## Usage  
---   
I'm assuming you already know how to get an Eleventy site up and running with Tailwind. If not, Google will be your friend.

> Looking for the old Jekyll site? It's archived on the [old-jekyll](https://github.com/chadokruse/chadokruse.github.com/tree/old-jekyll) branch.

### Cards   
All portfolio 'cards' are located in the `_cards` folder and are written in Markdown as follows:

```markdown
---
name: someName  
image: someImage.jpg  
image_href: https://www.example.com  
header: Some Header  
tags:
  - FilterTag1
  - FilterTag2
  - FilterTag3
item_sort: 22
---
First body paragraph

Second body paragraph
```

The `tags` power Isotope's filter feature. You need to manually set up the filter bar, which can be found in the main `index.html` file. Change the `data-filter` attributes accordingly ([view docs](http://isotope.metafizzy.co/filtering.html#ui)), making sure not to forget the periods [`.`]. 

The `item_sort` option in the markdown files provides a mechanism to force a specific card order, if desired.  

Note: Tags have a special meaning in Eleventy if used a certain way. I do NOT use the Eleventy tags feature.

### Resume   
The resume is compatible with the [JSONResume](https://jsonresume.org/) spec and can be found in the `_data` folder. Simply replace the JSON file with your own.

If you change the name of the JSON file from `resume-public.json`, be sure to update `data_source` in `resume.html`'s YAML front matter.

*Note: The resume template is not yet uploaded to the JSON Resume template server, so you won't be able to use their cli tool to generate a PDF. As an interim fix, simply print the generated HTML page.*

### Google Analytics   
Please delete my Google Analytics ID in `_config.yml` and enter your own (or leave blank).

### Custom domain   
Delete the `CNAME` file if you don't need a custom domain. If you want a custom domain follow [these instructions](https://help.github.com/articles/setting-up-a-custom-domain-with-pages).

### Deploy   
I currently use Github Actions to deploy to Github Pages, but you can use any host.

### Robots.txt   
Update `robots.txt` if you care about such things.

## TODOs
---   
- [ ] Swap out imagesLoaded and Isotope plugins for native JS and CSS Grid
- [ ] Convert `resume.html` to use Tailwind (instead of the legacy Bootstrap 3(!) css)

## Licenses  
---   
### Content   
Except brand logos, all content is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).

### Code   
Isotope: [View license requirements](http://isotope.metafizzy.co/#license)

Everything else uses the MIT License (MIT):

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
