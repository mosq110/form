$(document).ready(function() {
	$('.submit-button').click(function() {
		$('.form-field').addClass('active');
	});
	$('.reset-button').click(function(){
		$('.form-field').removeClass('active');
	});
});