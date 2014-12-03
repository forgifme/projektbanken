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
  
// ------- To-top button: Smooth transition --------
 
var scrollSpeed1 = 300; 
var scrollSpeed2 = 500;   
  
$("#to-top").click(function() {
    $('html, body').animate({
        scrollTop: $("html").offset().top
    -40}, scrollSpeed1);
});
  
// ------- Anchorlinks: Smooth transition -------- 
  
$("#three-ways").click(function() {
    $('html, body').animate({
        scrollTop: $("#twc-splitter").offset().top
    -40}, scrollSpeed2);
});
  
$("#others-use").click(function() {
    $('html, body').animate({
        scrollTop: $("#ouc-splitter").offset().top
    -40}, scrollSpeed2);
});

// ------ Animated stroke under intro-3btn (company) -----

  $('#three-ways, #others-use, #see-stud-projects').mouseenter(function(){
    $(this).find('.underline_com-3btn, .underline_stu-3btn').animate({width: '100%'}, 250, 'easeInOutQuint');
  }).mouseleave(function(){
    $(this).find('.underline_com-3btn, .underline_stu-3btn').animate({width: '0'}, 150, 'easeOutQuint');
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
  
// hide/show resp. stud/comp (no_login) projects on nav btn click

$("#company_projects-wrapper").hide();
  
$("#projects-header-item-1-no_login").click(function(){
  $("#company_projects-wrapper").fadeOut(500);
  $("#student_projects-wrapper").fadeIn(500);
});
  
$("#projects-header-item-2-no_login").click(function(){
  $("#student_projects-wrapper").fadeOut(500);
  $("#company_projects-wrapper").fadeIn(500);
});  
  
// hide/show resp. stud/comp (no_login) registered on nav btn click

$("#registered_students-wrapper").hide();
  
$("#projects-header-item-1-no_login").click(function(){
  $("#registered_companies-wrapper").fadeOut(500);
  $("#registered_students-wrapper").fadeIn(500);
});
  
$("#projects-header-item-2-no_login").click(function(){
  $("#registered_students-wrapper").fadeOut(500);
  $("#registered_companies-wrapper").fadeIn(500);
});  
  
// ---- add active class on project header item (no_login) ----  
  
$('.projects-header-item-no_login').click(function() {
  $('.projects-header-item-no_login').removeClass('phi-active-no_login');
  $(this).addClass('phi-active-no_login');
});
  
// hide/show resp. stud/comp (after_login) projects on nav btn click

$("#company_projects-wrapper-after_login").hide();
  
$("#projects-header-item-1-after_login").click(function(){
  $("#company_projects-wrapper-after_login").fadeOut(500);
  $("#student_projects-wrapper-after_login").fadeIn(500);
});
  
$("#projects-header-item-2-after_login").click(function(){
  $("#student_projects-wrapper-after_login").fadeOut(500);
  $("#company_projects-wrapper-after_login").fadeIn(500);
});  
  
// hide/show resp. stud/comp (after_login) registered on nav btn click

$("#registered_students-wrapper-after_login").hide();
  
$("#projects-header-item-1-after_login").click(function(){
  $("#registered_companies-wrapper-after_login").fadeOut(500);
  $("#registered_students-wrapper-after_login").fadeIn(500);
});
  
$("#projects-header-item-2-after_login").click(function(){
  $("#registered_students-wrapper-after_login").fadeOut(500);
  $("#registered_companies-wrapper-after_login").fadeIn(500);
});  
  
// ---- add active class on project header item (after_login) ----  
  
$('.projects-header-item-after_login').click(function() {
  $('.projects-header-item-after_login').removeClass('phi-active-after_login');
  $(this).addClass('phi-active-after_login');
});
  
// -------------- Modal - signup company ---------

//  FROM "OLD VERSION"
//  $('.modal-dialog').click(function(){
//    $('.modal-dialog div').css('opacity', '0');
//  });

$("#modal-signup-company").hide();

  function fnOpenModalCompany() { 
    $("#modal-signup-company").show();

    // Define the Dialog and its properties.
    $("#modal-signup-company").dialog({
      resizable: false,
      modal: true,
  //    title: "Opret en virksomhedsprofil for at se mere...",
      height: 630,
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

  $('.project, .create-account-btn-company').click(fnOpenModalCompany);
  
// ^^^^^^^^^ Fill inputs on LinkedIn click ^^^^^^^^^
  
  $(function(){
    $('#linkedIn-company_signup').click(function() {
      $("#company-input").val("IT Universitetet");
      $("#depart-input").val("DDKP");
      $("#firstname-input").val("Kenny");
      $("#lastname-input").val("Marek Møller");
      $("#mail-input").val("kema@itu.dk");
    });
  });
  
// -------------- Modal - signup student ---------

//  FROM "OLD VERSION"
//  $('.modal-dialog').click(function(){
//    $('.modal-dialog div').css('opacity', '0');
//  });

$("#modal-signup-student").hide();

  function fnOpenModalStudent() { 
    $("#modal-signup-student").show();

    // Define the Dialog and its properties.
    $("#modal-signup-student").dialog({
      resizable: false,
      modal: true,
  //    title: "Opret en virksomhedsprofil for at se mere...",
      height: 520,
      width: 350,
      open: function(event, ui) { $('.ui-widget-overlay').bind('click', function(){ $("#modal-signup-student").dialog('close')}); }, // Close modal on bg-click!
//      buttons: {
//        "Opret": function () {
//          $(this).dialog('close');
//          window.location = "my_page.html";
//        }
//      },
      dialogClass: 'modal modal-signup'
    });
  }

  $('.registered, .create-account-btn-student').click(fnOpenModalStudent);
  
// ^^^^^^^^^ Fill inputs on LinkedIn click ^^^^^^^^^
  
  $(function(){
    $('#linkedIn-student_signup').click(function() {
      $("#firstname-input").val("John");
      $("#lastname-input").val("Johnson");
      $("#mail-input").val("jojo@itu.dk");
      $("#institution-input").val("IT Universitetet");
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
  
// ------------ Modal - profile of company ---------
  
$("#modal-profile_of_company").hide();

  function fnOpenRegisteredModal() { 
    $("#modal-profile_of_company").show();

    // Define the Dialog and its properties.
    $("#modal-profile_of_company").dialog({
      resizable: false,
      modal: true,
  //    title: "Opret en virksomhedsprofil for at se mere...",
      height: 560,
      width: 900,
      open: function(event, ui) { $('.ui-widget-overlay').bind('click', function(){ $("#modal-profile_of_company").dialog('close')}); }, // Close modal on bg-click!
//      buttons: {
//        "Opret": function () {
//          $(this).dialog('close');
//          window.location = "my_page.html";
//        }
//      },
      dialogClass: 'modal modal-profile_of_company'
    });
  }

  $('.registered-after_login').click(fnOpenRegisteredModal);
  
// ------------ Modal - edit profile ---------
  
$("#modal-edit-profile-company").hide();

  function fnOpenEditModal() { 
    $("#modal-edit-profile-company").show();

    // Define the Dialog and its properties.
    $("#modal-edit-profile-company").dialog({
      resizable: false,
      modal: true,
  //    title: "Opret en virksomhedsprofil for at se mere...",
      height: 560,
      width: 350,
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

  $('.smallBoxLeft, #dropdown_item-edit_profile').click(fnOpenEditModal);
  
// ^^^^^^^^^ Update profile information ^^^^^^^^^
// VIRKER IKKE - Skal opdatere input på my_page når profil opdateres
  
$('#edit_profile-update').click(function() {
  var companyInput = $('#company-input').text();
  $('#profile_info-company').val(companyInput);
});
  
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