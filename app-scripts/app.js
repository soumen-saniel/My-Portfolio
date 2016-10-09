(function(){
	// var ua = navigator.userAgent,
	// isMobileWebkit = /WebKit/.test(ua) && /Mobile/.test(ua);

	// $(function(){
	// 	var iScrollInstance;

	// 	if (isMobileWebkit) {
	// 		iScrollInstance = new iScroll('scroller');

	// 		$('#scroller').stellar({
	// 			scrollProperty: 'transform',
	// 			positionProperty: 'transform',
	// 			horizontalScrolling: false
	// 		});
	// 	} else {
			$(window).stellar({
				horizontalScrolling: false,
			});
	// 	}
	// });
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