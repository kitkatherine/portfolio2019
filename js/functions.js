$(function (){ // document ready
    
  // Wrap every letter in a span
$('.ml3').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: false})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 350,
    delay: function(el, i) {
      return 100 * (i+1)
    }
  });
    
    
$('.toggle1').on({
        'click':function(){
          $('.text1').fadeOut();
        $('.skills1').fadeIn();
		}
	});

$('.back1').on({
'click':function(){
		$('.skills1').fadeOut();
    $('.text1').fadeIn();
		}
 });

$('.toggle2').on({
        'click':function(){
          $('.text2').fadeOut();
        $('.skills2').fadeIn();
		}
	});

$('.back2').on({
'click':function(){
		$('.skills2').fadeOut();
    $('.text2').fadeIn();
		}
 });

$('.toggle3').on({
        'click':function(){
          $('.text3').fadeOut();
        $('.skills3').fadeIn();
		}
	});

$('.back3').on({
'click':function(){
		$('.skills3').fadeOut();
    $('.text3').fadeIn();
		}
 });
    
    
    
     
  $(".item-5").click(function(){
  $("#fpl").slideToggle();
  });
    
  $(".fplClose").click(function(){
  $("#fpl").slideToggle();
  });
    
  $(".fplPrevious").click(function(){
  $("#fpl").hide();
  $("#centermark").show();
  });
    
  $(".fplNext").click(function(){
  $("#fpl").hide();
  $("#salesforce").show();
  });
    
  $(".item-3").click(function(){
  $("#salesforce").slideToggle();
  });
    
  $(".salesforceClose").click(function(){
  $("#salesforce").slideToggle();
  });
    
  $(".salesforcePrevious").click(function(){
  $("#salesforce").hide();
  $("#fpl").show();
  });
    
  $(".salesforceNext").click(function(){
  $("#salesforce").hide();
  $("#cmi").show();
  });

  $(".item-4").click(function(){
  $("#cmi").slideToggle();
  });
    
  $(".cmiClose").click(function(){
  $("#cmi").slideToggle();
  });
    
  $(".cmiPrevious").click(function(){
  $("#cmi").hide();
  $("#salesforce").show();
  });
    
  $(".cmiNext").click(function(){
  $("#cmi").hide();
  $("#home231").show();
  });
    
  $(".fplopen").click(function(){
  $("#home231").slideToggle();
  });
    
  $(".home231Close").click(function(){
  $("#home231").slideToggle();
  });
    
  $(".home231Previous").click(function(){
  $("#home231").hide();
  $("#cmi").show();
  });
    
  $(".home231Next").click(function(){
  $("#home231").hide();
  $("#orbitz").show();
  });
    
  $(".item-6").click(function(){
  $("#orbitz").slideToggle();
  });
    
  $(".orbitzClose").click(function(){
  $("#orbitz").slideToggle();
  });
    
  $(".orbitzPrevious").click(function(){
  $("#orbitz").hide();
  $("#home231").show();
  });
    
  $(".orbitzNext").click(function(){
  $("#orbitz").hide();
  $("#centermark").show();
  });
    
  $(".item-7").click(function(){
  $("#centermark").slideToggle();
  });
    
  $(".centermarkClose").click(function(){
  $("#centermark").slideToggle();
  });
    
  $(".centermarkPrevious").click(function(){
  $("#centermark").hide();
  $("#orbitz").show();
  });
    
  $(".centermarkNext").click(function(){
  $("#centermark").hide();
  $("#fpl").show();
  });
    
  $(".about").click(function(){
  $("#about").slideToggle();
  });
    
  $(".aboutClose").click(function(){
  $("#about").slideToggle();
  });
    
  $(".contact").click(function(){
  $("#contact").slideToggle();
  });
    
  $(".contactClose").click(function(){
  $("#contact").slideToggle();
  });
		
	$('a').smoothScroll();
	
	});