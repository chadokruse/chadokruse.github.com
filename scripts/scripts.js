$(document).ready(function() {

    // Sticky Nav (filter bar sticks to top when reaches top)
    $('#navdiv').scrollToFixed();

    // Active state for filter bar
    // Active state for subnav
    $(function(){
        $('a[data-pathname="' + window.location.pathname + '"]').addClass('current');
    });
 
    // Filter AJAX Call
    $('a.filter').on('click', function(event) {
        var elem = $("#allposts");
        var url = $(this).attr('href');
         $.ajax({
            type: "GET",
            url: url,
            dataType: 'html',
            success: function(data) {
                //elem.replaceWith(data); // Works, but does not allow for fadeOut of existing div
                $(elem).fadeOut('fast', function() {
                    $(elem).html(data);
                    $(elem).fadeIn('slow');
                });                          
             }       
         });    
         event.preventDefault();
         event.stopPropagation();
    });

    // Hover gray-out effect TODO: Why is this js? Convert to CSS
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

     // Fade effect after grid-a-licious calculates layout
     
   $(".eachpost").css({opacity: 0});
   $(".eachpost").fadeTo("slow", 1);

}); 