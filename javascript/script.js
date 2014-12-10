//2014 futureofcarsharing.com


/** ============== LOGO ANIMATION =============== **/

$(document).ready(function logoAnimation() {
    $("#soma-logo-kids").bind('mouseover', function(){
      //console.log("spinning");
    	$(this).animate({rotate:'+=7deg'},1500);
    });
});


/** ============== PLAYGROUND AND CHILDREN ANIMATIONS =============== **/

//rock playground horses back and forth
$(document).ready(function playgroundHorseAnimation() {
    $("#horse1").bind('mouseover', function(){
      console.log("mousover");
      $(this).animate({rotate:'+=1deg'},500);
      $(this).animate({rotate: '-=1deg'},1000);    
      $(this).animate({rotate: '+=1deg'},500);
      
    });
    $("#horse2").bind('mouseover', function(){
      console.log("mousover");
      $(this).animate({rotate:'+=1deg'},500);
      $(this).animate({rotate: '-=1deg'},1000);   
      $(this).animate({rotate: '+=1deg'},500);
      
    });
});

//children on hover interactions
$(document).ready(function slideAnimation() {
    $('.playground-slide-container').bind('mouseover', function(){
      console.log("mouseover");
      $('.playground-slide-boy').animate({left:'-=90px', top:'+=70px'},700)
      $('.playground-slide-boy').animate({opacity: 0});
      $('.playground-slide-boy').animate({left: '75px', top:'42px'});
      $('.playground-slide-boy').animate({opacity: 1});
    });
  });

$(document).ready(function ringAnimation() {
    $('.playground-ring-containter').bind('mouseover', function(){
       $('.playground-ring-girl').animate({left:'+=25px'},400);
       $('.playground-ring-girl').animate({left: '+=25px'},400);
       $('.playground-ring-girl').animate({left: '+=25px'},400);
       $('.playground-ring-girl').animate({opacity: 0});
       $('.playground-ring-girl').animate({left: '78px'});
       $('.playground-ring-girl').animate({opacity: 1});
    });
  });


/** ============== BIKE ANIMATIONS AND CONTROLS =============== **/

$(document).ready(function trikeBind(){        
    var $trike_mask = $('#trike_mask');
	$(window).bind('scroll', function() {
		$trike_mask.css('top', 540-$(window).scrollTop() + 'px');
		});
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


//SCROLL ANIMATIONS
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

//Code that changes the direction the trike picture is facing based off of the arrow keys.
$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
         $('#tricycle').addClass('toggled');
        break;

        case 38: // up
        break;

        case 39: // right
        $('#tricycle').removeClass('toggled');

        break;

        case 40: // down
        break;

        default: return; // exit this handler for other keys
    }
  
});


/** ============== GARDEN ANIMATIONS =============== **/


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



/** ============== SOUND FUNCTIONALITY FOR TREES =============== **/

//All Sounds functionality
 $(document).ready(function playSounds(){

        ion.sound({
            sounds: [
                {name: "wind"},
                {name: "SunnyDay"}
            ],
            path: "javascript/sounds/",
            preload: true,
            volume: 1.0
        });

        $(".tree1").bind("mouseover", function(){
            console.log("mousover1");
            ion.sound.play("wind");
        });
        $(".tree7").bind("mouseover", function(){
            console.log("mouseover2");
            ion.sound.play("SunnyDay");
        });
        $(".tree5").bind("mouseover", function(){
                      console.log("mousover4");

            ion.sound.play("wind");
        });
        $(".tree6").bind("mouseover", function(){
                      console.log("mousover6");

            ion.sound.play("SunnyDay");
        });
        $(".tree9").bind("mouseover", function(){
                      console.log("mousover9");

            ion.sound.play("wind");
        });

    });

/** ============== SKY ANIMATIONS =============== **/


//Sunshine rotation//
$(document).ready(function sunAnimation() {
    $("#sun-front").animate({rotate:'+=1deg'},100, sunAnimation);
    $("#sun-middle").animate({rotate:'+=1deg'},100,sunAnimation);
    
});


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


/** ============== RAINCLOUD ANIMATION =============== **/

$(document).ready(function rainCloudArrowAnimation(){
  $(".raincloud-leftArrow").animate({top:'-=15px'},1200),
  $(".raincloud-rightArrow").animate({top:'-=15px'},1200),
  $(".raincloud-middleArrow").animate({top:'+=35px'},1200),
  $(".raincloud-leftArrow").animate({top:'+=15px'},1200),
  $(".raincloud-rightArrow").animate({top:'+=15px'},1200),
  $(".raincloud-middleArrow").animate({top:'-=35px'},1200,rainCloudArrowAnimation);

  });




/* http://tympanus.net/codrops/2010/06/02/smooth-vertical-or-horizontal-page-scrolling-with-jquery/ */