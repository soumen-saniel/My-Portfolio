$(document).foundation();
$(window).stellar();
$(document).ready(function(){

	$(".toggle-menu").on("click", function(){
		$("#menu").toggleClass("is-open");
		$(".wrapper").toggleClass("blure");
	});

	setTimeout(function(){
		$(".landing-text").removeClass("slide-in-text");
	}, 1000);

});