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

		$.asPieProgress.setDefaults({
			speed : 50,
			barcolor: 'rgba(255,0,0,0.7)',
			barsize: '8',
			trackcolor: 'rgba(255,255,255,0.5)',
		});
		$('.pie_progress').asPieProgress({
	        namespace: 'pie_progress'
		});
		$('.pie_progress').asPieProgress('start');
	});

})();