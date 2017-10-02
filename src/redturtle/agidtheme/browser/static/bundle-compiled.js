(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('ellipsed',['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.ellipsed = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends = Object.assign || function (target) {
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
        rowsWrapped = acc.rowsWrapped;

    if (rowsWrapped === rowsLimit + 1) {
      return _extends({}, acc);
    }
    var textBeforeWrap = el.textContent;
    var newRowsWrapped = rowsWrapped;
    var newHeight = elHeight;
    el.textContent = el.textContent.length ? el.textContent + ' ' + token + '...' : token + '...';

    if (parseFloat(elStyle.height) > parseFloat(elHeight)) {
      newRowsWrapped++;
      newHeight = elStyle.height;

      if (newRowsWrapped === rowsLimit + 1) {
        el.innerHTML = textBeforeWrap[textBeforeWrap.length - 1] === '.' ? textBeforeWrap + '..' : textBeforeWrap + '...';

        return _extends({}, acc, { elHeight: newHeight, rowsWrapped: newRowsWrapped });
      }
    }

    el.textContent = textBeforeWrap.length ? textBeforeWrap + ' ' + token : '' + token;

    return _extends({}, acc, { elHeight: newHeight, rowsWrapped: newRowsWrapped });
  }

  function ellipsis() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var rows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    var elements = document.querySelectorAll(selector);

    for (var i = 0; i < elements.length; ++i) {
      var el = elements[i];
      var splittedText = el.textContent.split(' ');

      el.textContent = '';
      var elStyle = window.getComputedStyle(el);

      splittedText.reduce(tokensReducer, {
        el: el,
        elStyle: elStyle,
        elHeight: 0,
        rowsLimit: rows,
        rowsWrapped: 0
      });
    }
  }

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
      // $('#portal-mainnavigation').toggleClass('open');
    });


    /*
     * gestione click per chiudere menu, ricerca e condividi
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

      if ((!$(e.target).closest('#portal-mainnavigation').length && !$(e.target).closest('button.pplone-navbar-toggle').length) && $(window).width() <= 991) {
        // $('#portal-mainnavigation').removeClass('open');
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
      ellipsis('.tile-collection .collectionItemDescription', 4);
      ellipsis('.news-highlight .news-description', 4);
      ellipsis('.news-big-photo .news-description', 4);
    });

    $(window).on('resize orientationchange', function(e) {
      handleTabIndex();
    });

  });
});

define("../browser/static/integration.js", function(){});


//# sourceMappingURL=bundle-compiled.js.map