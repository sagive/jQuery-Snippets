jQuery(document).ready(function($) {

	// ANIMATED SCROLL TO DIV BY ID
	if($('.scroll').length > 0) {
		$('.scroll').click(function() {
			var scrollto 	= '#' + $(this).attr('scrollto'); 
			$("html, body").animate({ scrollTop: $(scrollto).offset().top}, 1000);
			window.location.hash = $(this).attr('scrollto');	
		});
	}

	// CHANGE EXAMPLE: IF YOU NEED PLAY WITH POSITION, GREAT IF YOU HAVE A FIXED TOP MENU
	// $("html, body").animate({ scrollTop: $(scrollto).offset().top - 125 + 'px' }, 1000);
	
	
	// USAGE EXAMPLE: <div class="scroll" scrollto="div-id"></div>
});