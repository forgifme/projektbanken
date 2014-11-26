$(document).ready(function(){
  
// ---------- Background color change -----------------
  
//  $('#companybox').mouseenter(function(){
//    $('#c-or-s p').hide();
//    $(this).css('background-color', '#eee');
//  }).mouseleave(function(){
//    $('#c-or-s p').show();
//    $(this).css('background-color', '#fff');    
//  });
//  
//  $('#studentbox').mouseenter(function(){
//    $('#c-or-s p').hide();
//    $(this).css('background-color', '#eee');
//  }).mouseleave(function(){
//    $('#c-or-s p').show();
//    $(this).css('background-color', '#fff');    
//  });
  
// ---------- Animated stroke under word -----------------

  $('#companybox').mouseenter(function(){
    $('#companybox-text').children().css('opacity', 1);
    $('#underline1').animate({width: "100%"}, 250, 'easeInOutQuint');
  }).mouseleave(function(){
    $('#companybox-text').children().css('opacity', 0.9);
    $('#underline1').animate({width: "0"}, 150, 'easeOutQuint');  
  });
  
  $('#studentbox').mouseenter(function(){
    $('#studentbox-text').children().css('opacity', 1);
    $('#underline2').animate({width: "100%"}, 250, 'easeInOutQuint');
  }).mouseleave(function(){
    $('#studentbox-text').children().css('opacity', 0.9);
    $('#underline2').animate({width: "0"}, 150, 'easeOutQuint');  
  }); 
  
// ---------- Log ind modal -----------------
  
//  $("#login_btn").click(function(){
//    $("form#login_form").dialog({ modal: true });
//  });
  
// ---------- Log ind dropdown -----------------
  
  $("#login_form").hide();
  
  $("#login_btn").click(function(){
    $("#login_form").toggle();
  });
  
  $('#close-login-form').click(function(){
    $("#login_form").fadeOut(200);
  });
      
});

// --------- To-top button: show after scroll --------

  $('#to-top').hide();

  $(window).scroll(function() { 
    if($(window).scrollTop() > 100) {
      $('#to-top').fadeIn('slow');
    }
  })
  
  $(window).scroll(function() { 
    if($(window).scrollTop() < 100) {
      $('#to-top').fadeOut('fast');
    }
  })

// ---------- Animated stroke under intro-3btn (company) -----------

//  var underlineWidth = '10%';
//
//  $('#three-ways').mouseenter(function(){
//    $('.intro-3btn-content').children().css('opacity', 1);
//    $('#underline3').animate({width: underlineWidth}, 250, 'easeInOutQuint');
//  }).mouseleave(function(){
//    $('.intro-3btn-content').children().css('opacity', 0.9);
//    $('#underline3').animate({width: "0"}, 150, 'easeOutQuint');
//  });
//  
//  $('#others-use').mouseenter(function(){
//    $('.intro-3btn-content').children().css('opacity', 1);
//    $('#underline4').animate({width: underlineWidth}, 250, 'easeInOutQuint');
//  }).mouseleave(function(){
//    $('.intro-3btn-content').children().css('opacity', 0.9);
//    $('#underline4').animate({width: "0"}, 150, 'easeOutQuint');  
//  }); 
//
//  $('#see-stud-projects').mouseenter(function(){
//    $('.intro-3btn-content').children().css('opacity', 1);
//    $('#underline5').animate({width: underlineWidth}, 250, 'easeInOutQuint');
//  }).mouseleave(function(){
//    $('.intro-3btn-content').children().css('opacity', 0.9);
//    $('#underline5').animate({width: "0"}, 150, 'easeOutQuint');  
//  }); 

// ---------- Animated box around intro-3btn (company) -----------

  var underlineWidth = '90%';
  var underlineHeight = '90%';
  var easeWidth = 'easeInOutQuint';
  var easeHeight = 'easeInOutQuint';

  $('#three-ways').mouseenter(function(){
    $(this).children().css('opacity', 1);
    $('#underline3').css('opacity', 1);
    $('#underline3').animate({width: underlineWidth}, 100, easeWidth);
    $('#underline3').animate({height: underlineHeight}, 100, easeHeight);
  }).mouseleave(function(){
    $(this).children().css('opacity', 0.9);
    $('#underline3').animate({width: '0'}, 1);
    $('#underline3').animate({height: '0'}, 1);
    $('#underline3').css('opacity', 0);
  });

  $('#others-use').mouseenter(function(){
    $(this).children().css('opacity', 1);
    $('#underline4').css('opacity', 1);
    $('#underline4').animate({width: underlineWidth}, 100, easeWidth);
    $('#underline4').animate({height: underlineHeight}, 100, easeHeight);
  }).mouseleave(function(){
    $(this).children().css('opacity', 0.9);
    $('#underline4').animate({width: '0'}, 1);
    $('#underline4').animate({height: '0'}, 1);
    $('#underline4').css('opacity', 0);
  });

  $('#see-stud-projects').mouseenter(function(){
    $(this).children().css('opacity', 1);
    $('#underline5').css('opacity', 1);
    $('#underline5').animate({width: underlineWidth}, 100, easeWidth);
    $('#underline5').animate({height: underlineHeight}, 100, easeHeight);
  }).mouseleave(function(){
    $(this).children().css('opacity', 0.9);
    $('#underline5').animate({width: '0'}, 1);
    $('#underline5').animate({height: '0'}, 1);
    $('#underline5').css('opacity', 0);
  });