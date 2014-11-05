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
		$trike_mask.css('top', 540-$(window).scrollTop() + 'px');
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


 $(document).ready(function playSounds(){

        ion.sound({
            sounds: [
                {name: "beer_can_opening"},
                {name: "bell_ring"}
            ],
            path: "javascript/sounds/",
            preload: true,
            volume: 1.0
        });

        $("#flower1").bind("mouseover", function(){
            ion.sound.play("beer_can_opening");
        });
        $("#flower2").bind("mouseover", function(){
            ion.sound.play("bell_ring");
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

//animations for clouds moving
// $(document).ready(function cloudAnimation(){
//   $("#cloud1")
//       .animate({left: '+=-100px', opacity: 0.0}, 28000)
//       .animate({left: '+=100px'}, 0)
//       .animate({opacity: 0.8}, 4000);
// }

// CLOUDS ANIMATION
$(document).ready(function cloudsAnimation() {
    $(".cloud1").
      animate({left:'+=-600px', opacity:0.0},28000).
      animate({left:'+=600px'},0).
      animate({opacity:0.8},4000),
     $(".cloud2").
      animate({left:'+=-300px', opacity:0.0},35000).
      animate({left:'+=300px'},0).
      animate({opacity:0.8},4000),
     $(".cloud3").
      animate({left:'+=-200px', opacity:0.0},40000).
      animate({left:'+=200px'},0).
      animate({opacity:0.8},4000),
     $(".cloud4").
      animate({left:'+=-150px', opacity:0.0},28000).
      animate({left:'+=150px'},0).
      animate({opacity:0.8},4000),
     $(".cloud5").
      animate({left:'+=-200px', opacity:0.0},14000).
      animate({left:'+=200px'},0).
      animate({opacity:0.8},4000),
     $(".cloud6").
      animate({left:'+=-250px', opacity:0.0},28000).
      animate({left:'+=250px'},0).
      animate({opacity:0.8},4000),
     $(".cloud7").
      animate({left:'+=-300px', opacity:0.0},50000).
      animate({left:'+=300px'},0).
      animate({opacity:0.8},4000),
    $(".cloud8").
      animate({left:'+=-400px', opacity:0.0},12000).
      animate({left:'+=400px'},0).
      animate({opacity:0.8},4000, cloudsAnimation);   
});



/* http://tympanus.net/codrops/2010/06/02/smooth-vertical-or-horizontal-page-scrolling-with-jquery/ */