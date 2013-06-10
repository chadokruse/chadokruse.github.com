$(document).ready(function() {

    // Sticky Nav (filter bar sticks to top when reaches top)
    $('#navdiv').scrollToFixed();
 
    // Filter AJAX Call
    $('a.filter').on('click', function(event) {

        // Highlight current subnav link
        $('a.filter').removeClass('current'); // Remove current class from all subnav links
        $(this).addClass('current'); // Add "current" class to clicked subnav link
        $('body,html').animate({ // Scroll and focus on subnav at top TODO: still a bit jumpy when scrolls from bottom
                scrollTop: 280
            }, 'slow');
        // Call new grid
        var elem = $("#allposts");
        var url = $(this).attr('href');
         $.ajax({
            type: "GET",
            url: url,
            dataType: 'html',
            success: function(data) {
                
                $(elem).replaceWith(data);
                arrange(); // Call grid-a-licious to calculate new layout 
                 
                $(".eachpost").css({opacity: 0});
                $(".eachpost").fadeTo("slow", 1);                                     
             },
         }); 
         event.preventDefault();
         //event.stopPropagation();
    });

    // Hover gray-out effect
    /* Unhide if you want to addback the effect

    $(".eachpost").jFade({
        trigger: "mouseover",
        property: 'background',
        start: 'ffffff',
        end: 'cccccc',
        steps: 8,
        duration: 8
    }).jFade({
        trigger: "mouseout",
        property: 'background',
        start: 'cccccc',
        end: 'ffffff',
        steps: 8,
        duration: 8
    });

    $(".eachpost twocols").jFade({
        trigger: "mouseover",
        property: 'background',
        start: 'ffffff',
        end: 'cccccc',
        steps: 8,
        duration: 8
    }).jFade({
        trigger: "mouseout",
        property: 'background',
        start: 'cccccc',
        end: 'ffffff',
        steps: 8,
        duration: 8
    });

    End of hover gray-out effect comment */

     // Fade effect after grid-a-licious calculates layout TODO: Is it possible to DRY this up? See also AJAX call
     $(".eachpost").css({opacity: 0});
     $(".eachpost").fadeTo("slow", 1);
   
}); 