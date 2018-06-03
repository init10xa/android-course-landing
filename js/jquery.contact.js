(function($) { 
	"use strict";
	
jQuery(document).ready(function(){
	$('#cform').submit(function(){

		var action = $(this).attr('action');

		$("#message").slideUp(750,function() {
		$('#message').hide();

 		$('#submit')
			.before('<img src="images/ajax-loader.gif" class="contact-loader" />')
			.attr('disabled','disabled');

	
		});

		return false;

	});

});

}(jQuery));