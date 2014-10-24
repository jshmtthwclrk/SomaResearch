//2014 futureofcarsharing.com

$(document).ready(function logoAnimation() {
    $("#soma-logo-kids").bind('mouseover', function(){
      //console.log("spinning");
    	$(this).animate({rotate:'+=7deg'},1500);
    });
});


// /// BEGIN - V ALIGN /// //

$(document).ready(function bikeBind(){        
    var $bike_mask = $('#bike_mask');
	$(window).bind('scroll', function() {
		$bike_mask.css('top', 576-$(window).scrollTop() + 'px');
		});
	});
   

// /// END - V ALIGN /// //


//Sunshine rotation//

$(document).ready(function sunAnimation() {
    $("#sun-middle").animate({rotate:'+=1deg'},100, sunAnimation);
    $("#sun-front").animate({rotate:'-=1deg'},100,sunAnimation);
    
});

// CAR BUBBLE CONTENT ANIMATION
$(document).ready(function bikeBubbleAnimation() {
    
    $(document).delay(6000),
    $("#bike-bubble-text").
      animate({opacity:0},400,'linear').
      delay(1600).
      animate({opacity:1},400,'linear'),
    $("#bike-keyboard").
      delay(2400).
      animate({opacity:0},400,'linear').
      delay(2400).
      animate({opacity:1},400,'linear',bikeBubbleAnimation);     
});

// CAR KEYBOARD ANIMATION
$(document).ready(function bikeKeyboardAnimation() {
    $("#bike-keyboard-left").
      animate({opacity:1},100,'linear').
      animate({opacity:0},100,'linear'),
    $("#bike-keyboard-right").
      delay(200).
      animate({opacity:1},100,'linear').
      animate({opacity:0},100,'linear',bikeKeyboardAnimation);   
});



// /// BEGIN - EXECUTE SCROLL ANIMATIONS /// //

$(document).ready(function scrollAnimations(){
	
	// SCROLL CAR BUBBLE
    $(document).ready(function() {
	    $(window).bind('scroll', function() {
		    scrollAnimationBikeBubble( $(window).scrollLeft() > 600 );
	    });    
        function scrollAnimationBikeBubble() {
          if($(window).scrollLeft() > 300)
            if( $("#bike-bubble-wrapper").css('opacity') == 1) 
        	$("#bike-bubble-wrapper").animate({ opacity:0},200);
        }
    });

    });