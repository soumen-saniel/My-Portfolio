(function(){
	var ua = navigator.userAgent,
	isMobileWebkit = /WebKit/.test(ua) && /Mobile/.test(ua);

	if (isMobileWebkit) {
		$('html').addClass('mobile');
	}

	$(function(){
		var iScrollInstance;

		if (isMobileWebkit) {
			iScrollInstance = new iScroll('wrapper');

			$('#scroller').stellar({
				scrollProperty: 'transform',
				positionProperty: 'transform',
				horizontalScrolling: false,
				verticalOffset: 150
			});
		} else {
			$.stellar({
				horizontalScrolling: false,
				verticalOffset: 150
			});
		}
	});
	$(document).ready(function(){
		var windowHeight = $(window).height();
		$(".fullHeight").css({"height" : windowHeight});
		$(".halfHeight").css({"height" : (windowHeight/2)});

		$(".toggle-menu").on("click", function(){
			$("#menu").toggleClass("is-open");
			$(".wrapper").toggleClass("blure");
		});

		setTimeout(function(){
			$(".landing-text").removeClass("slide-in-text");
		}, 1000);
	});

})();