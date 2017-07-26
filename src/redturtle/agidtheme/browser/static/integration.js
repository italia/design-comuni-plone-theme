require([
  'jquery',
], function ($) {
  'use strict';
  $(document).ready(function () {
    /*
     *  return-to-top arrow
     */
    $(window).scroll(function () {
      if ($(this).scrollTop() >= 50) {
        $('#return-to-top').fadeIn(200);
      } else {
        $('#return-to-top').fadeOut(200);
      }
    });

    $('#return-to-top').click(function () {
      $('body,html').animate({
          scrollTop: 0,
        }, 500);
    });


    /*
     *  share button position
     */
    if ($('.news-column').length) {
      $('.news-column').prepend($('.share'));
    }
    else if ($('#portal-column-two').length) {
      $('#portal-column-two').prepend($('.share'));
    }


    /*
     * share button behavior
     */
    $('.share .share-toggle').on('click', function(e) {
      e.preventDefault();
      if ($('.share').hasClass('open')) {
        $('.share').addClass('closed');
      }
      else {
        $('.share').removeClass('closed');
      }

      $('.share').toggleClass('open');
    });


    /*
     * menu toggle button for mobile
     */
    $('#globalnav-toggle').on('click', function(e) {
      $('ul#portal-globalnav').toggleClass('open');
    });

  });
});
