/**
 * Grid-A-Licious(tm)
 * Copyright (c) 2008 Suprb - info(at)suprb(dot)com
 *
 * License Agreement: By downloading Grid-A-Licious(tm),
 * you agree to the following: The copyright information 
 * must remain intact in the product.
 *
 * The product may be used for personal use only, no 
 * commercial projects. You are not free to remove the 
 * copyright information (anywhere).
 * 
 * You are not free to use or copy any of the 
 * "grid-a-licious.js" (this file) code on your own products
 * without asking for permission.
 * 
 * Thanks for understanding.
 */

	var MIN_COLS = 4; // Default was 5
	var COL_WIDTH = 220;
	var GAP = 20; 
	
	var offx, offy = 0;
	maxy = new Array();
	
	// on site load (DOM READY)
	$(function() { 
		offy = $('#allposts').offset().top;
		offx = $('#allposts').offset().left;
		arrange(); 
	});
	
	// on window resize, call again
	$(window).resize( function() { arrange(); } );
	
	arrange();
	
	function arrange() {
	
		// how many columns fits here?
		var columns = Math.max(MIN_COLS, parseInt($('body').innerWidth() / (COL_WIDTH+GAP)));
		$('.eachpost').css('width',COL_WIDTH  + 'px');
		$('.twocols').css('width', COL_WIDTH*2 + GAP  );
		$('.threecols').css('width', COL_WIDTH*3 + GAP*2);

		for (x=0; x < columns; x++) {
			maxy[x] = 0;
		}
		
		// lets iterate over all posts
		$('.eachpost').each(function(i) {

			var pos, cursor, w , altura= 0;
	
			w = (Math.floor($(this).outerWidth() / COL_WIDTH));
			cursor = 0;

			if (w>1) {
				for (x=0; x < columns-(w-1); x++) {
					cursor = maxy[x] < maxy[cursor] ? x : cursor;
				}
				pos = cursor;
				
				for (var x=0; x<w; x++) {
					altura = Math.max(altura, maxy[pos+x]);
				}
				for (var x=0; x<w; x++) 
					maxy[pos+x] = parseInt($(this).outerHeight()) + GAP + altura;
					
				$(this).css('left', pos*(COL_WIDTH+GAP) + offx).css('top',altura + offy);
			}
			else {
			
				for (x=0; x < columns; x++) {
					cursor = maxy[x] < maxy[cursor] ? x : cursor;
				}

				$(this).css('left', cursor*(COL_WIDTH+GAP) + offx).css('top',maxy[cursor] + offy);
				maxy[cursor] += $(this).outerHeight() + GAP;
			}
		});
	
		
	}
