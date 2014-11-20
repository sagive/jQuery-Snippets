jQuery(document).ready(function($) {

	// RESPONSIVE VIDEO
	if($('.resvid').length > 0) {
		$('.resvid').each(function() {
			var vidwidth	= $(this).width();
			var vidheight	= Math.round( ((vidwidth / 16) * 9) + 35 );
			$(this).animate({height:vidheight},500);
		});	
	}
	
	
	/* HTML EXAMPLE:
	
	<iframe width="100%" height="315" class="resvid" src="//www.youtube.com/embed/mz1kxwMZhS0?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
	
	*/	
	

});