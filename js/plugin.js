/*global $ */

$(function () {
	
	'use strict';
	
	$("html").niceScroll();
	
	$(window).scroll(function () {
		
	
		var navbar = $('.navbar');
		
		$(window).scrollTop() >= navbar.height() ? navbar.addClass('scrolled') : navbar.removeClass('scrolled');
		
	});
	
	$(".tab-switch li").click(function () {
		
		$(this).addClass("selected").siblings().removeClass("selected");
		
		$('.tabs-section .tabs-content > div').hide();
		
		$('.' + $(this).data('class')).show();
		
	});
	
// caching the scroll button up
	var scrollButton = $("#scroll-up");
	
	
	$(window).scroll(function () {
		
		
		if ($(this).scrollTop() >= 700) {

            scrollButton.show();
        } else {
            scrollButton.hide();
		}
	      	
	});
		//click on button to scroll top
	scrollButton.click(function () {
			
		$("body").animate({scrollTop: 0}, 800);
			
	});

});

// loading screen
$(window).on("load",
    function () {
	// loading elements
	    "use strict";
	
        $(".overlay-loading .spinner").fadeOut(1000,
	        function () {
		
		        $("body").css("overflow", "auto");
		
		        $(this).parent().fadeOut(1000,
				    function () {
			// show the scroll
			            $(this).remove();
		            });
	        });
    });

	
	


