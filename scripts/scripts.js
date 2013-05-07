$(document).ready(function() {

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