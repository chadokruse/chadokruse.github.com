$(document).ready(function() {

    // Sticky Nav (filter bar sticks to top when reaches top)
    $('#navdiv').scrollToFixed();
 
    // Filter AJAX Call
    $('a.filter').on('click', function(event) {

        var scrollToFilter = function(){  // Define Scroll-to-filter animation
            $('body,html').animate({
                //scrollTop: 0
                scrollTop: $('#filter-focus').offset().top
                }, "fast"); 
        };
        var elem = $("#allposts");
        var url = $(this).attr('href');

        // Highlight current subnav link
        $('a.filter').removeClass('current');
        $(this).addClass('current');

        // Call new grid
         $.ajax({
            type: "GET",
            url: url,
            dataType: 'html',
            beforeSend: function(){
                $("#allposts").fadeOut("slow");
                scrollToFilter(); 
            },
            success: function(data) {
                $(elem).replaceWith(function() {
                    return $(data).hide().fadeIn();
                });
                //$(elem).replaceWith(data).delay(2000);
                arrange(); // Call grid-a-licious to calculate new layout                                   
             },
             complete: function(){
                $("#allposts").css({opacity: 0});
                $("#allposts").fadeTo("slow", 1);  
             },
         }); 
         event.preventDefault();
         event.stopPropagation();
    });

    // Hover gray-out effect
    /* Unhide if you want to addback the effect...remnant from the original grid-a-licious js

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