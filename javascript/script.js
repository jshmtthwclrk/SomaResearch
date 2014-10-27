//2014 futureofcarsharing.com

$(document).ready(function logoAnimation() {
    $("#soma-logo-kids").bind('mouseover', function(){
      //console.log("spinning");
    	$(this).animate({rotate:'+=7deg'},1500);
    });
});


// /// BEGIN - V ALIGN /// //

$(document).ready(function trikeBind(){        
    var $trike_mask = $('#trike_mask');
	$(window).bind('scroll', function() {
		$trike_mask.css('top', 581-$(window).scrollTop() + 'px');
		});
	});
   

// /// END - V ALIGN /// //


////Garden Flower interaction////
$(document).ready(function logoAnimation() {
    $(".flower").bind('mouseover', function(){
      //console.log("spinning");
      $(this).animate({bottom: '+=10px'},200);
    });
    $(".flower").bind('mouseout', function(){
      //console.log("spinning");
      $(this).animate({bottom: '-=10px'},200);
    });
});

//Sunshine rotation//

$(document).ready(function sunAnimation() {
    $("#sun-middle").animate({rotate:'+=1deg'},100, sunAnimation);
    $("#sun-back").animate({rotate:'-=1deg'},100,sunAnimation);
    
});

// TRIKE BUBBLE CONTENT ANIMATION
$(document).ready(function trikeBubbleAnimation() {
    
    $(document).delay(6000),
    $("#trike-bubble-text").
      animate({opacity:0},400,'linear').
      delay(1600).
      animate({opacity:1},400,'linear'),
    $("#trike-keyboard").
      delay(2400).
      animate({opacity:0},400,'linear').
      delay(2400).
      animate({opacity:1},400,'linear',trikeBubbleAnimation);     
});

// TRIKE KEYBOARD ANIMATION
$(document).ready(function trikeKeyboardAnimation() {
    $("#trike-keyboard-left").
      animate({opacity:1},100,'linear').
      animate({opacity:0},100,'linear'),
    $("#trike-keyboard-right").
      delay(200).
      animate({opacity:1},100,'linear').
      animate({opacity:0},100,'linear',trikeKeyboardAnimation);   
});



// /// BEGIN - EXECUTE SCROLL ANIMATIONS /// //

$(document).ready(function scrollAnimations(){
	
	// SCROLL TRIKE BUBBLE
    $(document).ready(function() {
	    $(window).bind('scroll', function() {
		    scrollAnimationTrikeBubble( $(window).scrollLeft() > 600 );
	    });    
        function scrollAnimationTrikeBubble() {
          if($(window).scrollLeft() > 300)
            if( $("#trike-bubble-wrapper").css('opacity') == 1) 
        	$("#trike-bubble-wrapper").animate({ opacity:0},200);
        }
    });

    });

/* http://tympanus.net/codrops/2010/06/02/smooth-vertical-or-horizontal-page-scrolling-with-jquery/ */