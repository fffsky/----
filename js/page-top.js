$(function () {
    var pagetop = $('#js-pagetop');
    pagetop.hide();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 350) {
        pagetop.fadeIn();
      } else {
        pagetop.fadeOut();
      }
    });
    pagetop.click(function () {
      $('body, html').animate({
          scrollTop: 0
      }, 500);
      return false;
    });
  });