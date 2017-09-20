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
  function ellipsed() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var rows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    /*   Copyright (C) 2017  Nicola Zambello
     *
     *    https://github.com/nzambello/ellipsed
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

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var el = _step.value;

        var splittedText = el.textContent.split(' ');
        var rowsWrapped = 0;
        var textBeforeWrap = '';

        el.textContent = '';
        var elStyle = window.getComputedStyle(el);
        var elHeight = elStyle.height;

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = splittedText[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var token = _step2.value;

            if (el.textContent.length) {
              el.textContent = el.textContent + ' ' + token + '...';
            } else {
              el.textContent = '' + el.textContent + token + '...';
            }

            if (parseFloat(elStyle.height) > parseFloat(elHeight)) {
              elHeight = elStyle.height;
              rowsWrapped++;

              if (rowsWrapped === rows + 1) {
                el.innerHTML = textBeforeWrap[textBeforeWrap.length - 1] === '.' ? textBeforeWrap + '..' : textBeforeWrap + '...';

                break;
              }
            }

            textBeforeWrap = textBeforeWrap.length ? textBeforeWrap + ' ' + token : '' + textBeforeWrap + token;
            el.textContent = textBeforeWrap;
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  exports.default = ellipsed;
});
require([
  'jquery',
  'ellipsed'
], function ($, ellipsed) {
  'use strict';

  var makeEllipsed = ellipsed.default;

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
     * globalnav menu open/close button for mobile
     */
    $('#globalnav-toggle').on('click', function(e) {
      $('#portal-mainnavigation').toggleClass('open');
      $('body').addClass('menuOpened');
    });

    $('#globalnav-close').on('click', function(e) {
      $('#portal-mainnavigation').removeClass('open');
      $('body').removeClass('menuOpened');
    });


    /*
     * mobile: search button action
     */
    $('#search-toggle').on('click', function(e) {
      $('#portal-searchbox').toggleClass('open');
      $('body').toggleClass('searchOpened');

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
        $('body').removeClass('searchOpened');
      }

      if ((!$(e.target).closest('#portal-mainnavigation').length && !$(e.target).closest('button#globalnav-toggle').length) && $(window).width() <= 991) {
        $('#portal-mainnavigation').removeClass('open');
        $('body').removeClass('menuOpened');
      }

      if (!$(e.target).closest('.share').length) {
        $share.removeClass('open');
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
      makeEllipsed('.news-collection .collectionItemDescription', 4);
      makeEllipsed('.news-highlight .news-description', 4);
      makeEllipsed('.news-big-photo .news-description', 4);
    });

    $(window).on('resize orientationchange', function(e) {
      handleTabIndex();
    });

  });
});

define("../browser/static/integration.js", function(){});


//# sourceMappingURL=bundle-compiled.js.map