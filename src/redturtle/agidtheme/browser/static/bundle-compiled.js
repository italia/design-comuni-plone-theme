(function(global, factory) {
  if (typeof define === 'function' && define.amd) {
    define('ellipsed',['exports'], factory);
  } else if (typeof exports !== 'undefined') {
    factory(exports);
  } else {
    var mod = {
      exports: {},
    };
    factory(mod.exports);
    global.ellipsed = mod.exports;
  }
})(this, function(exports) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true,
  });

  var _extends =
    Object.assign ||
    function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

  /*
   *   Copyright (C) 2017  Nicola Zambello
   *
   *    The JavaScript code in this page is open source software licensed under MIT license
   *    References about this code and its license, see:
   *
   *    https://github.com/nzambello/ellipsed
   *
   */

  function tokensReducer(acc, token) {
    var el = acc.el,
      elStyle = acc.elStyle,
      elHeight = acc.elHeight,
      rowsLimit = acc.rowsLimit,
      rowsWrapped = acc.rowsWrapped,
      options = acc.options;

    if (rowsWrapped === rowsLimit + 1) {
      return _extends({}, acc);
    }
    var textBeforeWrap = el.textContent;
    var newRowsWrapped = rowsWrapped;
    var newHeight = elHeight;
    el.textContent = el.textContent.length
      ? el.textContent + ' ' + token + options.replaceStr
      : '' + token + options.replaceStr;

    if (parseFloat(elStyle.height) > parseFloat(elHeight)) {
      newRowsWrapped++;
      newHeight = elStyle.height;

      if (newRowsWrapped === rowsLimit + 1) {
        el.innerHTML =
          textBeforeWrap[textBeforeWrap.length - 1] === '.' && options.replaceStr === '...'
            ? textBeforeWrap + '..'
            : '' + textBeforeWrap + options.replaceStr;

        return _extends({}, acc, { elHeight: newHeight, rowsWrapped: newRowsWrapped });
      }
    }

    el.textContent = textBeforeWrap.length ? textBeforeWrap + ' ' + token : '' + token;

    return _extends({}, acc, { elHeight: newHeight, rowsWrapped: newRowsWrapped });
  }

  function ellipsis() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var rows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var defaultOptions = {
      replaceStr: '...',
      responsive: false,
      debounceDelay: 250,
    };

    var opts = _extends({}, defaultOptions, options);

    var elements = document.querySelectorAll(selector);
    var originalTexts = [];

    for (var i = 0; i < elements.length; i++) {
      var el = elements[i];
      originalTexts[i] = el.textContent;
      var splittedText = el.textContent.split(' ');

      el.textContent = '';
      var elStyle = window.getComputedStyle(el);

      splittedText.reduce(tokensReducer, {
        el: el,
        elStyle: elStyle,
        elHeight: 0,
        rowsLimit: rows,
        rowsWrapped: 0,
        options: opts,
      });
    }

    if (opts.responsive) {
      var resizeTimeout = false;

      var resizeHandler = function resizeHandler() {
        for (var _i = 0; _i < elements.length; _i++) {
          elements[_i].textContent = originalTexts[_i];
        }
        ellipsis(selector, rows, _extends({}, options, { responsive: false }));
      };

      var resizeListener = function resizeListener() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(resizeHandler, opts.debounceDelay);
      };

      window.addEventListener('resize', resizeListener);

      return resizeListener;
    }
  }

  function disableResponsive(listener) {
    window.removeEventListener('resize', listener);
  }

  exports.disableResponsive = disableResponsive;
  exports.ellipsis = ellipsis;
});

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
     * On tiles loaded:
     * - gestito tabIndex news collection collapse
     * - multi lined ellipsis for news collection items
     */
    $('.pat-tiles-management').on('rtTilesLoaded', function(e) {
      ellipsis('.tile-collection .collectionItemDescription', 4, { responsive: true });
      ellipsis('.news-highlight .news-description', 4, { responsive: true });
      ellipsis('.news-big-photo .news-description', 4, { responsive: true });
    });

    $(document).on('patSliderInit', function(e) {
      $(e.originalEvent.detail).find('.slick-dots').attr('aria-hidden', true);
    });

  });
});

define("../browser/static/integration.js", function(){});


//# sourceMappingURL=bundle-compiled.js.map