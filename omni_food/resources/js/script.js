
$(document).ready(function () {

  /*sticky navigation*/
  $('.js--section-features').waypoint(function (direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    }
    else {
      $('nav').removeClass('sticky');
    }
  }, { offset: "15%" });
  /*scrolling buttons*/
  $('.js--btn-1').click(function () {
    $('html,body').animate({ scrollTop: $('.js--section-plans').offset().top - 25 }, 1000);
  });
  $('.js--btn-2').click(function () {
    $('html,body').animate({ scrollTop: $('.js--section-features').offset().top - 100 }, 500);
  });

  /*scrolling nav*/
  $('.features').click(function () {
    $('html,body').animate({ scrollTop: $('.js--section-features').offset().top - 100 }, 1000);
  });
  $('.steps').click(function () {
    $('html,body').animate({
      scrollTop: $('.js--section-steps').offset().top - 50
    }, 1000);
  });
  $('.cities').click(function () {
    $('html,body').animate({ scrollTop: $('.js--section-cities').offset().top - 140 }, 1000);
  });
  $('.plans').click(function () {
    $('html,body').animate({ scrollTop: $('.js--section-plans').offset().top - 35 }, 1000);
  });
  $('.js--logo').click(function () {
    $('html,body').animate({ scrollTop: 0 }, 1000);
  });
  /*------ on scroll animations -----*/


  $('.js--wp-1').waypoint(function (direction) {
    if (direction == "down") {
    $('.js--wp-1').addClass('animate__animated animate__bounceInLeft');
    }
    else {
     $('.js--wp-1').removeClass('animate__animated animate__bounceInLeft');
    }
  }, { offset: "60%" });

  $('.js--wp-2').waypoint(function (direction) {
    if (direction == "down") {
    $('.js--wp-2').addClass('animate__animated animate__bounceInRight');
    }
    else {
     $('.js--wp-2').removeClass('animate__animated animate__bounceInRight');
    }
  }, { offset: "60%" });

  $('.js--wp-3').waypoint(function (direction) {
    if (direction == "down") {
    $('.js--wp-3').addClass('animate__animated animate__fadeInDown');
    }
    else {
     $('.js--wp-3').removeClass('animate__animated animate__fadeInDown');
    }
  }, { offset: "40%" });

  $('.js--wp-4').waypoint(function (direction) {
    if (direction == "down") {
    $('.js--wp-4').addClass('animate__animated animate__fadeInUp');
    }
    else {
     $('.js--wp-4').removeClass('animate__animated animate__fadeInUp');
    }
  }, { offset: "40%" });

  $('.js--wp-5').waypoint(function (direction) {
    if (direction == "down") {
    $('.js--wp-5').addClass('animate__animated animate__pulse');
    }
    else {
     $('.js--wp-5').removeClass('animate__animated animate__pulse');
    }
  }, { offset: "30%" });


  $('.js--wp-6').waypoint(function (direction) {
    if (direction == "down") {
    $('.js--wp-6').addClass('animate__animated animate__fadeInUp');
    }
    else {
     $('.js--wp-6').removeClass('animate__animated animate__fadeInUp');
    }
  }, { offset: "50%" });
  /*--------- responsive navigation --------*/


  $('.js--nav-icon').click(function () {
  let nav = $('.js--main-nav')
  let icon = $('.nav-icon')

   nav.slideToggle(200);
   if (icon.hasClass('icon1')) {
    icon.removeClass('icon1');
    icon.removeAttr('name');
    icon.attr('name','close');
   }
   else {
    icon.addClass('icon1');
    icon.removeAttr('name');
    icon.attr('name','menu');
   }
  });
});