jQuery(document).ready(function($) {

	// SHOW STUFF ON CLICK
	$('.clickshow').click(function() {
		var hidethis = '.' + $(this).attr('data-hidethis'); $(hidethis).slideUp(); 
		var showthis = '.' + $(this).attr('data-showthis'); $(showthis).slideToggle(); 
	});	
	
	/*
	HTML EXAMPLE:
	
	<div class="clickshow" data-showthis="hidden" data-hidethis="visible" >Click Me</div>
	
	<div class="hidden" style="display: none">
		i am some hidden text that would be showen when clickshow is clicked
	</div>
	
	<div class="visible">
		i am some visible text that would be hidden when clickshow is clicked
	</div>
	
	*/

});