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
  
// ---- Animated stroke under word (index.html) -----------

  $('#companybox, #studentbox').mouseenter(function(){
    $(this).find('.underline_index').animate({width: "100%"}, 250, 'easeInOutQuint');
  }).mouseleave(function(){
    $(this).find('.underline_index').animate({width: "0"}, 150, 'easeOutQuint');  
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

// ------ Animated stroke under intro-3btn (company) -----

  $('#three-ways, #others-use, #see-stud-projects').mouseenter(function(){
    $(this).find('.underline_com-3btn').animate({width: '100%'}, 250, 'easeInOutQuint');
  }).mouseleave(function(){
    $(this).find('.underline_com-3btn').animate({width: '0'}, 150, 'easeOutQuint');
  });

// ------- Animated stroke under nav links -----

  $('.nav_item').mouseenter(function(){
    $(this).find('.underline').animate({width: "100%"}, 250, 'easeInOutQuint');
  }).mouseleave(function(){
    $(this).find('.underline').animate({width: "0%"}, 150, 'easeOutQuint');  
  });
  
// ----- Animated stroke at side of nav links -----

  $('.dropdown_item').mouseenter(function(){
    $(this).find('.sideline').animate({height: "100%"}, 250, 'easeInOutQuint');
  }).mouseleave(function(){
    $(this).find('.sideline').animate({height: "0%"}, 150, 'easeOutQuint');  
  });
  
// -------------- Modal - signup company ---------

//  FROM "OLD VERSION"
//  $('.modal-dialog').click(function(){
//    $('.modal-dialog div').css('opacity', '0');
//  });

$("#modal-signup-company").hide();

  function fnOpenModal() { 
    $("#modal-signup-company").show();

    // Define the Dialog and its properties.
    $("#modal-signup-company").dialog({
      resizable: false,
      modal: true,
  //    title: "Opret en virksomhedsprofil for at se mere...",
      height: 560,
      width: 350,
      open: function(event, ui) { $('.ui-widget-overlay').bind('click', function(){ $("#modal-signup-company").dialog('close')}); }, // Close modal on bg-click!
//      buttons: {
//        "Opret": function () {
//          $(this).dialog('close');
//          window.location = "my_page.html";
//        }
//      },
      dialogClass: 'modal modal-signup'
    });
  }

  $('.project, .create-account-btn-company').click(fnOpenModal);
  
// ^^^^^^^^^ Fill inputs on LinkedIn click ^^^^^^^^^
  
  $(function(){
    $('#linkedIn_signup').click(function() {
      $("#company-input").val("ITU");
      $("#depart-input").val("DDKP");
      $("#name-input").val("Kenny Marek Møller");
      $("#mail-input").val("kema@itu.dk");
    });
  });
  
// ------------ Modal - project of student ---------
  
$("#modal-project_of_student").hide();

  function fnOpenProjectModal() { 
    $("#modal-project_of_student").show();

    // Define the Dialog and its properties.
    $("#modal-project_of_student").dialog({
      resizable: false,
      modal: true,
  //    title: "Opret en virksomhedsprofil for at se mere...",
      height: 560,
      width: 900,
      open: function(event, ui) { $('.ui-widget-overlay').bind('click', function(){ $("#modal-project_of_student").dialog('close')}); }, // Close modal on bg-click!
//      buttons: {
//        "Opret": function () {
//          $(this).dialog('close');
//          window.location = "my_page.html";
//        }
//      },
      dialogClass: 'modal modal-project_of_student'
    });
  }

  $('.project-after_login').click(fnOpenProjectModal);
  
// ------------ Modal - edit profile ---------
// ET ELLER ANDET HER SPILLER IKKE (ellers er det html'en)
  
$("#modal-edit-profile-company").hide();

  function fnOpenEditModal() { 
    $("#modal-edit-profile-company").show();

    // Define the Dialog and its properties.
    $("#modal-edit-profile-company").dialog({
      resizable: false,
      modal: true,
  //    title: "Opret en virksomhedsprofil for at se mere...",
      height: 560,
      width: 900,
      open: function(event, ui) { $('.ui-widget-overlay').bind('click', function(){ $("#modal-edit-profile-company").dialog('close')}); }, // Close modal on bg-click!
//      buttons: {
//        "Opret": function () {
//          $(this).dialog('close');
//          window.location = "my_page.html";
//        }
//      },
      dialogClass: 'modal modal-edit-profile-company'
    });
  }

  $('.smallBoxLeft').click(fnOpenEditModal);
  
// -------- Dropdown on hover username in nav ---------

$("#nav-user_dropdown-btn").hover(
  function () {
     $('#nav-user_dropdown').slideDown('easeOutQuint');
  }, 
  function () {
     $('#nav-user_dropdown').slideUp('medium');
  }
);
  
  
  
  
  
});