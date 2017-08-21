function ellipsed(selector, rows) {
  /*   Copyright (C) 2017  Nicola Zambello
   *
   *		https://github.com/nzambello/ellipsed
   *
   *    The JavaScript code in this page is free software: you can
   *    redistribute it and/or modify it under the terms of the GNU
   *    General Public License (GNU GPL) as published by the Free Software
   *    Foundation, either version 3 of the License, or (at your option)
   *    any later version.  The code is distributed WITHOUT ANY WARRANTY;
   *    without even the implied warranty of MERCHANTABILITY or FITNESS
   *    FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
   *
   *    As additional permission under GNU GPL version 3 section 7, you
   *    may distribute non-source (e.g., minimized or compacted) forms of
   *    that code without the copy of the GNU GPL normally required by
   *    section 4, provided you include this license notice and a URL
   *    through which recipients can access the Corresponding Source.
   */

  var elements = document.querySelectorAll(selector);

  for (var i = 0; i < elements.length; i++) {
    var el = elements[i];

    if (rows) {
      var splittedText = el.innerText.split(' ');
      var rowsWrapped = 0;
      var textBeforeWrap = '';

      el.innerText = '';
      var elHeight = window.getComputedStyle(el).height;

      for (var j = 0; j < splittedText.length; j++) {
        var token = splittedText[j];

        if (el.innerText.length) {
          el.innerText = el.innerText.concat(' ').concat(token).concat('...');
        }
        else {
          el.innerText = el.innerText.concat(token).concat('...');
        }

        if (parseFloat(window.getComputedStyle(el).height) > parseFloat(elHeight)) {
          elHeight = window.getComputedStyle(el).height;
          rowsWrapped++;

          if (rowsWrapped === rows + 1) {
            el.innerHTML = textBeforeWrap[textBeforeWrap.length - 1] === '.'
                           ? textBeforeWrap.concat('..')
                           : textBeforeWrap.concat('...');

            break;
          }
        }

        textBeforeWrap = textBeforeWrap.length
                         ? textBeforeWrap.concat(' ').concat(token)
                         : textBeforeWrap.concat(token);
        el.innerHTML = textBeforeWrap;
      }
    }
    else {
      el.innerText = '';
    }
  }
};

define("ellipsed", function(){});

require([
  'jquery',
  'ellipsed'
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

    /*
     * On tiles loaded:
     * - gestito tabIndex news collection collapse
     * - multi lined ellipsis for news collection items
     */
    $('.pat-tiles-management').on('rtTilesLoaded', function(e) {
      handleTabIndex();
      ellipsed('.news-collection .newsDescription', 4);
      ellipsed('.news-highlight .news-description', 6);
    });

    $(window).on('resize orientationchange', function(e) {
      handleTabIndex();
    });

  });
});

define("../browser/static/integration.js", function(){});


//# sourceMappingURL=bundle-compiled.js.map