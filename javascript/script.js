$(document).ready(function logoAnimation() {
    $("#soma-logo-kids").bind('mouseover', function(){
    	$(this).animate({rotate:'+=7deg'},1500);
    });
});

// /// BEGIN - V ALIGN /// //

$(document).ready(function bikeBind(){        
    var $bike_mask = $('#bike_mask');
	$(window).bind('scroll', function() {
		$bike_mask.css('top', 576-$(window).scrollTop() + 'px');
		// $(window).stopTime('initiate_bridge_fade').oneTime(100, 'initiate_bridge_fade', function() {
		// 	animateBridge( $(window).scrollLeft() > 1400 );
		});
	});
   

// /// END - V ALIGN /// //