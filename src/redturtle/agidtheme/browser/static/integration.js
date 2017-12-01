require([
  'jquery',
  'ellipsed'
], function ($, ellipsed) {
  'use strict';

  var ellipsis = ellipsed.ellipsis;

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
    var $share = $('.share');
    if ($('.news-column').length) {
      $('.news-column').prepend($share);
      $share.addClass('share-visible');
    }
    else if ($('#portal-column-two').length) {
      $('#portal-column-two').prepend($share);
      $share.addClass('share-visible');
    }


    /*
     * share button behavior
     */
    $('.share .share-toggle').on('click', function(e) {
      e.preventDefault();
      $share.toggleClass('open');
    });


    /*
     * mobile: search button action
     */
    $('#search-toggle').on('click', function(e) {
      $('#portal-searchbox').toggleClass('open');
      $('#search-toggle').toggleClass('open');
      $('body').toggleClass('searchOpened');

      if ($('#portal-searchbox').hasClass('open')) {
        $('#searchGadget').focus();
      }
    });


    /*
     * mobile: menu toggle click
     */
    $('button.plone-navbar-toggle').on('click', function(e) {
      $('#portal-globalnav-wrapper').toggleClass('open');
    });


    /*
     * gestione click fuori per chiudere menu, ricerca e condividi
     */
    $(document).on('click', function(e) {
      if ((!$(e.target).closest('#portal-searchbox').length && !$(e.target).closest('button#search-toggle').length) && $(window).width() <= 991) {
        $('#portal-searchbox').removeClass('open');
        $('#search-toggle').removeClass('open');
        $('body').removeClass('searchOpened');
      }

      if (!$(e.target).closest('.share').length) {
        $share.removeClass('open');
      }

      if ((!$(e.target).closest('#portal-globalnav-wrapper').length && !$(e.target).closest('button.plone-navbar-toggle').length) && $(window).width() <= 991) {
        $('#portal-globalnav-wrapper').removeClass('open');
      }
    });

    /*
     * collapse news collection
     */
    $('#content-core').on('click', '.collectionTile.collapsible .tile-collapse-button', function(e) {
      if (window.innerWidth <= 991) {
        var collapse = $(e.target).closest('.collapsible');
        collapse.toggleClass('open');
      }
    });

    function handleTabIndex() {
      if (window.innerWidth <= 991 && $('button.tile-collapse-button').closest('.collectionTile').hasClass('collapsible') && $('button.tile-collapse-button').attr('tabIndex') !== undefined) {
        $('button.tile-collapse-button').removeAttr('tabIndex');
      }
      else {
        $('button.tile-collapse-button').attr('tabIndex', -1);
      }
    }

    /*
     * On tiles loaded:
     * - gestito tabIndex news collection collapse
     * - multi lined ellipsis for news collection items
     */
    $('.pat-tiles-management').on('rtTilesLoaded', function(e) {
      handleTabIndex();
      ellipsis('.tile-collection .collectionItemDescription', 4, { responsive: true });
      ellipsis('.news-highlight .news-description', 4, { responsive: true });
      ellipsis('.news-big-photo .news-description', 4, { responsive: true });
    });

    $(window).on('resize orientationchange', function(e) {
      handleTabIndex();
    });

    $(document).on('patSliderInit', function(e) {
      $(e.originalEvent.detail).find('.slick-dots').attr('aria-hidden', true);
    });

  });
});
