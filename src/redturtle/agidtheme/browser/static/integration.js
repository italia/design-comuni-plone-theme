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
      $('.share').css('display', 'flex');
    }
    else if ($('#portal-column-two').length) {
      $('#portal-column-two').prepend($('.share'));
      $('.share').css('display', 'flex');
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


    function toggleMenu() {
      if ($('#portal-mainnavigation').hasClass('open')) {
        $('#portal-mainnavigation').addClass('closed');
      }
      else {
        $('#portal-mainnavigation').removeClass('closed');
      }

      $('#portal-mainnavigation').toggleClass('open');
    }

    /*
     * globalnav menu open/close button for mobile
     */
    $('#globalnav-toggle').on('click', function(e) {
      toggleMenu();
      $('#portal-top').addClass('menuOpened');
      $('#column-wrapper').addClass('menuOpened');
      $('#portal-footer-wrapper').addClass('menuOpened');
    });

    $('#globalnav-close').on('click', function(e) {
      toggleMenu();
      $('#portal-top').removeClass('menuOpened');
      $('#column-wrapper').removeClass('menuOpened');
      $('#portal-footer-wrapper').removeClass('menuOpened');
    });


    /*
     * mobile: search button action
     */
    $('#search-toggle').on('click', function(e) {
      $('#portal-searchbox').toggleClass('open');
      $('#column-wrapper').toggleClass('searchOpened');
      $('#portal-footer-wrapper').toggleClass('searchOpened');

      if ($('#portal-searchbox').hasClass('open')) {
        $('#searchGadget').focus();
      }
    });


    /*
     * gestione click per chiudere menu, ricerca e condividi
     */
    $(document).on('click', function(e) {
      if ((!$(e.target).closest('#portal-searchbox').length && !$(e.target).closest('button#search-toggle').length) && $(window).width() <= 991) {
        $('#portal-searchbox').removeClass('open');
        $('#column-wrapper').removeClass('searchOpened');
        $('#portal-footer-wrapper').removeClass('searchOpened');
      }

      if ((!$(e.target).closest('#portal-mainnavigation').length && !$(e.target).closest('button#globalnav-toggle').length) && $(window).width() <= 991) {
        $('#portal-mainnavigation').removeClass('open').addClass('closed');
        $('#portal-top').removeClass('menuOpened');
        $('#column-wrapper').removeClass('menuOpened');
        $('#portal-footer-wrapper').removeClass('menuOpened');
      }

      if (!$(e.target).closest('.share').length) {
        $('.share').removeClass('open').addClass('closed');
      }
    });

    /*
     * collapse news collection
     */
    function toggleNews(collapse, defaultClosed) {
      if (defaultClosed) {
        if (collapse.hasClass('open')) {
          collapse.addClass('closed');
        }
        else {
          collapse.removeClass('closed');
        }
        collapse.toggleClass('open');
      }
      else {
        if (collapse.hasClass('closed')) {
          collapse.addClass('open');
        }
        else {
          collapse.removeClass('open');
        }
        collapse.toggleClass('closed');
      }
    }

    $('#content-core').on('click', '.collectionTile.collapsible .news-collection .tile-collapse-button', function(e) {
      if (window.innerWidth <= 991) {
        var collapse = $(e.target).closest('.collapsible');
        var defaultClosed = collapse.hasClass('default-closed');
        toggleNews(collapse, defaultClosed);
      }
    });

    function handleTabIndex() {
      if (window.innerWidth <= 991) {
        if ($('button.tile-collapse-button').attr('tabIndex') !== undefined) {
          $('button.tile-collapse-button').removeAttr('tabIndex');
        }
      }
      else {
        $('button.tile-collapse-button').attr('tabIndex', -1);
      }
    }

    $('.pat-tiles-management').on('rtTilesLoaded', function(e) {
      handleTabIndex();
    });

    $(window).on('resize orientationchange', function(e) {
      handleTabIndex();
    });
  });
});
