(function(){
	
	$(document).ready(function(){
		$(document).foundation();
		var windowHeight = $(window).height();
		$(".fullHeight").css({"height" : windowHeight});
		$(".halfHeight").css({"height" : (windowHeight/2)});

		$(".toggle-menu").on("click", function(){
			$("#menu").toggleClass("is-open");
			$(".wrapper").toggleClass("blure");
		});

		setTimeout(function(){
			$(".landing-text").removeClass("slide-in-text");
		}, 500);

		$('.pie_progress').asPieProgress({
	        namespace: 'pie_progress'
		});
		$('.pie_progress').asPieProgress('start');
	});

})();