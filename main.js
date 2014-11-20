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
  
  $("#login_btn").click(function(){
    $("#login_form").toggle().css('visibility', 'visible'); 
  });
  
  $('#close-login-form').click(function(){
    $("#login_form").fadeOut(200);
  });
      
});
