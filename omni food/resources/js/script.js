
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
      scrollTop: $('.js--section-steps').offset().top - 50 }, 1000);
  });
  $('.cities').click(function () {
    $('html,body').animate({ scrollTop: $('.js--section-cities').offset().top-140 }, 1000);
  });
  $('.plans').click(function () {
    $('html,body').animate({ scrollTop: $('.js--section-plans').offset().top-35 }, 1000);
  });
  $('.js--logo').click(function () {
    $('html,body').animate({ scrollTop: 0 }, 1000);
  });
});