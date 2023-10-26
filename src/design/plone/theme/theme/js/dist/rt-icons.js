define('fa_rt', [], function() {
  return /******/ (function(modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {}; // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId]) {
        /******/ return installedModules[moduleId].exports;
        /******/
      } // Create a new module (and put it into the cache)
      /******/ /******/ var module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {},
        /******/
      }); // Execute the module function
      /******/
      /******/ /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      ); // Flag the module as loaded
      /******/
      /******/ /******/ module.l = true; // Return the exports of the module
      /******/
      /******/ /******/ return module.exports;
      /******/
    } // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/ /******/ __webpack_require__.m = modules; // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
    /******/
    /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
      /******/ if (!__webpack_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, {
          /******/ configurable: false,
          /******/ enumerable: true,
          /******/ get: getter,
          /******/
        });
        /******/
      }
      /******/
    }; // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __webpack_require__.n = function(module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function getDefault() {
              return module['default'];
            }
          : /******/ function getModuleExports() {
              return module;
            };
      /******/ __webpack_require__.d(getter, 'a', getter);
      /******/ return getter;
      /******/
    }; // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __webpack_require__.o = function(object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    }; // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
    /******/
    /******/ /******/ return __webpack_require__((__webpack_require__.s = 0));
    /******/
  })(
    /************************************************************************/
    /******/ [
      /* 0 */
      /***/ function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.init = undefined;

        var _fontawesome = __webpack_require__(1);

        var _fontawesome2 = _interopRequireDefault(_fontawesome);

        var _faFacebookF = __webpack_require__(2);

        var _faFacebookF2 = _interopRequireDefault(_faFacebookF);

        var _faTwitter = __webpack_require__(3);

        var _faTwitter2 = _interopRequireDefault(_faTwitter);

        var _faTelegram = __webpack_require__(4);

        var _faTelegram2 = _interopRequireDefault(_faTelegram);

        var _faInstagram = __webpack_require__(5);

        var _faInstagram2 = _interopRequireDefault(_faInstagram);

        var _faYoutube = __webpack_require__(6);

        var _faYoutube2 = _interopRequireDefault(_faYoutube);

        var _faLinkedinIn = __webpack_require__(7);

        var _faLinkedinIn2 = _interopRequireDefault(_faLinkedinIn);

        var _faMediumM = __webpack_require__(8);

        var _faMediumM2 = _interopRequireDefault(_faMediumM);

        var _faGooglePlusG = __webpack_require__(9);

        var _faGooglePlusG2 = _interopRequireDefault(_faGooglePlusG);

        var _faPinterest = __webpack_require__(10);

        var _faPinterest2 = _interopRequireDefault(_faPinterest);

        var _faFlickr = __webpack_require__(11);

        var _faFlickr2 = _interopRequireDefault(_faFlickr);

        var _faGetPocket = __webpack_require__(12);

        var _faGetPocket2 = _interopRequireDefault(_faGetPocket);

        var _faSpotify = __webpack_require__(13);

        var _faSpotify2 = _interopRequireDefault(_faSpotify);

        var _faRss = __webpack_require__(14);

        var _faRss2 = _interopRequireDefault(_faRss);

        var _faNewspaper = __webpack_require__(15);

        var _faNewspaper2 = _interopRequireDefault(_faNewspaper);

        var _faHome = __webpack_require__(16);

        var _faHome2 = _interopRequireDefault(_faHome);

        var _faChevronUp = __webpack_require__(17);

        var _faChevronUp2 = _interopRequireDefault(_faChevronUp);

        var _faChevronDown = __webpack_require__(18);

        var _faChevronDown2 = _interopRequireDefault(_faChevronDown);

        var _faChevronLeft = __webpack_require__(19);

        var _faChevronLeft2 = _interopRequireDefault(_faChevronLeft);

        var _faChevronRight = __webpack_require__(20);

        var _faChevronRight2 = _interopRequireDefault(_faChevronRight);

        var _faSearch = __webpack_require__(21);

        var _faSearch2 = _interopRequireDefault(_faSearch);

        var _faCalendar = __webpack_require__(22);

        var _faCalendar2 = _interopRequireDefault(_faCalendar);

        var _faCalendarAlt = __webpack_require__(23);

        var _faCalendarAlt2 = _interopRequireDefault(_faCalendarAlt);

        var _faTags = __webpack_require__(24);

        var _faTags2 = _interopRequireDefault(_faTags);

        var _faFolderOpen = __webpack_require__(25);

        var _faFolderOpen2 = _interopRequireDefault(_faFolderOpen);

        var _faFilter = __webpack_require__(26);

        var _faFilter2 = _interopRequireDefault(_faFilter);

        var _faStar = __webpack_require__(27);

        var _faStar2 = _interopRequireDefault(_faStar);

        var _faBars = __webpack_require__(28);

        var _faBars2 = _interopRequireDefault(_faBars);

        var _faTimes = __webpack_require__(29);

        var _faTimes2 = _interopRequireDefault(_faTimes);

        var _faPrint = __webpack_require__(30);

        var _faPrint2 = _interopRequireDefault(_faPrint);

        var _faSortAlphaDown = __webpack_require__(31);

        var _faSortAlphaDown2 = _interopRequireDefault(_faSortAlphaDown);

        var _faAngleRight = __webpack_require__(32);

        var _faAngleRight2 = _interopRequireDefault(_faAngleRight);

        var _faAngleUp = __webpack_require__(33);

        var _faAngleUp2 = _interopRequireDefault(_faAngleUp);

        var _faAngleDown = __webpack_require__(34);

        var _faAngleDown2 = _interopRequireDefault(_faAngleDown);

        var _faListUl = __webpack_require__(35);

        var _faListUl2 = _interopRequireDefault(_faListUl);

        var _faCircle = __webpack_require__(36);

        var _faCircle2 = _interopRequireDefault(_faCircle);

        var _faCrosshairs = __webpack_require__(37);

        var _faCrosshairs2 = _interopRequireDefault(_faCrosshairs);

        var _faEnvelope = __webpack_require__(38);

        var _faEnvelope2 = _interopRequireDefault(_faEnvelope);

        var _faDownload = __webpack_require__(39);

        var _faDownload2 = _interopRequireDefault(_faDownload);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        var init = (exports.init = function init() {
          _fontawesome2.default.library.add(
            _faFacebookF2.default,
            _faTwitter2.default,
            _faTelegram2.default,
            _faInstagram2.default,
            _faYoutube2.default,
            _faLinkedinIn2.default,
            _faMediumM2.default,
            _faGooglePlusG2.default,
            _faPinterest2.default,
            _faFlickr2.default,
            _faGetPocket2.default,
            _faSpotify2.default,
            _faRss2.default,
            _faNewspaper2.default,
            _faHome2.default,
            _faChevronUp2.default,
            _faChevronDown2.default,
            _faChevronRight2.default,
            _faChevronLeft2.default,
            _faAngleRight2.default,
            _faAngleUp2.default,
            _faAngleDown2.default,
            _faSearch2.default,
            _faCalendar2.default,
            _faCalendarAlt2.default,
            _faTags2.default,
            _faFolderOpen2.default,
            _faFilter2.default,
            _faStar2.default,
            _faSortAlphaDown2.default,
            _faBars2.default,
            _faTimes2.default,
            _faPrint2.default,
            _faListUl2.default,
            _faCircle2.default,
            _faCrosshairs2.default,
            _faEnvelope2.default,
            _faDownload2.default
          );
        });

        /***/
      },
      /* 1 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        Object.defineProperty(__webpack_exports__, '__esModule', {
          value: true,
        });
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'config',
          function() {
            return config;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'icon',
          function() {
            return icon;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'noAuto',
          function() {
            return noAuto;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'layer',
          function() {
            return layer;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'text',
          function() {
            return text;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'library',
          function() {
            return library;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'dom',
          function() {
            return dom;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'parse',
          function() {
            return parse;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'findIconDefinition',
          function() {
            return findIconDefinition;
          }
        );
        /*!
 * Font Awesome Free 5.0.13 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
        var noop = function noop() {};

        var _WINDOW = {};
        var _DOCUMENT = {};
        var _MUTATION_OBSERVER$1 = null;
        var _PERFORMANCE = { mark: noop, measure: noop };

        try {
          if (typeof window !== 'undefined') _WINDOW = window;
          if (typeof document !== 'undefined') _DOCUMENT = document;
          if (typeof MutationObserver !== 'undefined')
            _MUTATION_OBSERVER$1 = MutationObserver;
          if (typeof performance !== 'undefined') _PERFORMANCE = performance;
        } catch (e) {}

        var _ref = _WINDOW.navigator || {};
        var _ref$userAgent = _ref.userAgent;
        var userAgent = _ref$userAgent === undefined ? '' : _ref$userAgent;

        var WINDOW = _WINDOW;
        var DOCUMENT = _DOCUMENT;
        var MUTATION_OBSERVER = _MUTATION_OBSERVER$1;
        var PERFORMANCE = _PERFORMANCE;
        var IS_BROWSER = !!WINDOW.document;
        var IS_DOM =
          !!DOCUMENT.documentElement &&
          !!DOCUMENT.head &&
          typeof DOCUMENT.addEventListener === 'function' &&
          typeof DOCUMENT.createElement === 'function';
        var IS_IE =
          ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

        var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
        var UNITS_IN_GRID = 16;
        var DEFAULT_FAMILY_PREFIX = 'fa';
        var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
        var DATA_FA_I2SVG = 'data-fa-i2svg';
        var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
        var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';

        var PRODUCTION = (function() {
          try {
            return 'production' === 'production';
          } catch (e) {
            return false;
          }
        })();

        var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var oneToTwenty = oneToTen.concat([
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
        ]);

        var ATTRIBUTES_WATCHED_FOR_MUTATION = [
          'class',
          'data-prefix',
          'data-icon',
          'data-fa-transform',
          'data-fa-mask',
        ];

        var RESERVED_CLASSES = [
          'xs',
          'sm',
          'lg',
          'fw',
          'ul',
          'li',
          'border',
          'pull-left',
          'pull-right',
          'spin',
          'pulse',
          'rotate-90',
          'rotate-180',
          'rotate-270',
          'flip-horizontal',
          'flip-vertical',
          'stack',
          'stack-1x',
          'stack-2x',
          'inverse',
          'layers',
          'layers-text',
          'layers-counter',
        ]
          .concat(
            oneToTen.map(function(n) {
              return n + 'x';
            })
          )
          .concat(
            oneToTwenty.map(function(n) {
              return 'w-' + n;
            })
          );

        var classCallCheck = function(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        };

        var createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ('value' in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }

          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

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

        var toConsumableArray = function(arr) {
          if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++)
              arr2[i] = arr[i];

            return arr2;
          } else {
            return Array.from(arr);
          }
        };

        var initial = WINDOW.FontAwesomeConfig || {};
        var initialKeys = Object.keys(initial);

        var _default = _extends(
          {
            familyPrefix: DEFAULT_FAMILY_PREFIX,
            replacementClass: DEFAULT_REPLACEMENT_CLASS,
            autoReplaceSvg: true,
            autoAddCss: true,
            autoA11y: true,
            searchPseudoElements: false,
            observeMutations: true,
            keepOriginalSource: true,
            measurePerformance: false,
            showMissingIcons: true,
          },
          initial
        );

        if (!_default.autoReplaceSvg) _default.observeMutations = false;

        var config$1 = _extends({}, _default);

        WINDOW.FontAwesomeConfig = config$1;

        function update(newConfig) {
          var params =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : {};
          var _params$asNewDefault = params.asNewDefault,
            asNewDefault =
              _params$asNewDefault === undefined ? false : _params$asNewDefault;

          var validKeys = Object.keys(config$1);
          var ok = asNewDefault
            ? function(k) {
                return ~validKeys.indexOf(k) && !~initialKeys.indexOf(k);
              }
            : function(k) {
                return ~validKeys.indexOf(k);
              };

          Object.keys(newConfig).forEach(function(configKey) {
            if (ok(configKey)) config$1[configKey] = newConfig[configKey];
          });
        }

        function auto(value) {
          update({
            autoReplaceSvg: value,
            observeMutations: value,
          });
        }

        var w = WINDOW || {};

        if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
        if (!w[NAMESPACE_IDENTIFIER].styles)
          w[NAMESPACE_IDENTIFIER].styles = {};
        if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
        if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];

        var namespace = w[NAMESPACE_IDENTIFIER];

        var functions = [];
        var listener = function listener() {
          DOCUMENT.removeEventListener('DOMContentLoaded', listener);
          loaded = 1;
          functions.map(function(fn) {
            return fn();
          });
        };

        var loaded = false;

        if (IS_DOM) {
          loaded = (DOCUMENT.documentElement.doScroll
            ? /^loaded|^c/
            : /^loaded|^i|^c/
          ).test(DOCUMENT.readyState);

          if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
        }

        var domready = function(fn) {
          if (!IS_DOM) return;
          loaded ? setTimeout(fn, 0) : functions.push(fn);
        };

        var d = UNITS_IN_GRID;

        var meaninglessTransform = {
          size: 16,
          x: 0,
          y: 0,
          rotate: 0,
          flipX: false,
          flipY: false,
        };

        function isReserved(name) {
          return ~RESERVED_CLASSES.indexOf(name);
        }

        function bunker(fn) {
          try {
            fn();
          } catch (e) {
            if (!PRODUCTION) {
              throw e;
            }
          }
        }

        function insertCss(css) {
          if (!css || !IS_DOM) {
            return;
          }

          var style = DOCUMENT.createElement('style');
          style.setAttribute('type', 'text/css');
          style.innerHTML = css;

          var headChildren = DOCUMENT.head.childNodes;
          var beforeChild = null;

          for (var i = headChildren.length - 1; i > -1; i--) {
            var child = headChildren[i];
            var tagName = (child.tagName || '').toUpperCase();
            if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
              beforeChild = child;
            }
          }

          DOCUMENT.head.insertBefore(style, beforeChild);

          return css;
        }

        var _uniqueId = 0;

        function nextUniqueId() {
          _uniqueId++;

          return _uniqueId;
        }

        function toArray(obj) {
          var array = [];

          for (var i = (obj || []).length >>> 0; i--; ) {
            array[i] = obj[i];
          }

          return array;
        }

        function classArray(node) {
          if (node.classList) {
            return toArray(node.classList);
          } else {
            return (node.getAttribute('class') || '')
              .split(' ')
              .filter(function(i) {
                return i;
              });
          }
        }

        function getIconName(familyPrefix, cls) {
          var parts = cls.split('-');
          var prefix = parts[0];
          var iconName = parts.slice(1).join('-');

          if (
            prefix === familyPrefix &&
            iconName !== '' &&
            !isReserved(iconName)
          ) {
            return iconName;
          } else {
            return null;
          }
        }

        function htmlEscape(str) {
          return ('' + str)
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
        }

        function joinAttributes(attributes) {
          return Object.keys(attributes || {})
            .reduce(function(acc, attributeName) {
              return (
                acc +
                (attributeName +
                  '="' +
                  htmlEscape(attributes[attributeName]) +
                  '" ')
              );
            }, '')
            .trim();
        }

        function joinStyles(styles) {
          return Object.keys(styles || {}).reduce(function(acc, styleName) {
            return acc + (styleName + ': ' + styles[styleName] + ';');
          }, '');
        }

        function transformIsMeaningful(transform) {
          return (
            transform.size !== meaninglessTransform.size ||
            transform.x !== meaninglessTransform.x ||
            transform.y !== meaninglessTransform.y ||
            transform.rotate !== meaninglessTransform.rotate ||
            transform.flipX ||
            transform.flipY
          );
        }

        function transformForSvg(_ref) {
          var transform = _ref.transform,
            containerWidth = _ref.containerWidth,
            iconWidth = _ref.iconWidth;

          var outer = {
            transform: 'translate(' + containerWidth / 2 + ' 256)',
          };
          var innerTranslate =
            'translate(' + transform.x * 32 + ', ' + transform.y * 32 + ') ';
          var innerScale =
            'scale(' +
            (transform.size / 16) * (transform.flipX ? -1 : 1) +
            ', ' +
            (transform.size / 16) * (transform.flipY ? -1 : 1) +
            ') ';
          var innerRotate = 'rotate(' + transform.rotate + ' 0 0)';
          var inner = {
            transform: innerTranslate + ' ' + innerScale + ' ' + innerRotate,
          };
          var path = {
            transform: 'translate(' + (iconWidth / 2) * -1 + ' -256)',
          };
          return {
            outer: outer,
            inner: inner,
            path: path,
          };
        }

        function transformForCss(_ref2) {
          var transform = _ref2.transform,
            _ref2$width = _ref2.width,
            width = _ref2$width === undefined ? UNITS_IN_GRID : _ref2$width,
            _ref2$height = _ref2.height,
            height = _ref2$height === undefined ? UNITS_IN_GRID : _ref2$height,
            _ref2$startCentered = _ref2.startCentered,
            startCentered =
              _ref2$startCentered === undefined ? false : _ref2$startCentered;

          var val = '';

          if (startCentered && IS_IE) {
            val +=
              'translate(' +
              (transform.x / d - width / 2) +
              'em, ' +
              (transform.y / d - height / 2) +
              'em) ';
          } else if (startCentered) {
            val +=
              'translate(calc(-50% + ' +
              transform.x / d +
              'em), calc(-50% + ' +
              transform.y / d +
              'em)) ';
          } else {
            val +=
              'translate(' +
              transform.x / d +
              'em, ' +
              transform.y / d +
              'em) ';
          }

          val +=
            'scale(' +
            (transform.size / d) * (transform.flipX ? -1 : 1) +
            ', ' +
            (transform.size / d) * (transform.flipY ? -1 : 1) +
            ') ';
          val += 'rotate(' + transform.rotate + 'deg) ';

          return val;
        }

        var ALL_SPACE = {
          x: 0,
          y: 0,
          width: '100%',
          height: '100%',
        };

        var makeIconMasking = function(_ref) {
          var children = _ref.children,
            attributes = _ref.attributes,
            main = _ref.main,
            mask = _ref.mask,
            transform = _ref.transform;
          var mainWidth = main.width,
            mainPath = main.icon;
          var maskWidth = mask.width,
            maskPath = mask.icon;

          var trans = transformForSvg({
            transform: transform,
            containerWidth: maskWidth,
            iconWidth: mainWidth,
          });

          var maskRect = {
            tag: 'rect',
            attributes: _extends({}, ALL_SPACE, {
              fill: 'white',
            }),
          };
          var maskInnerGroup = {
            tag: 'g',
            attributes: _extends({}, trans.inner),
            children: [
              {
                tag: 'path',
                attributes: _extends({}, mainPath.attributes, trans.path, {
                  fill: 'black',
                }),
              },
            ],
          };
          var maskOuterGroup = {
            tag: 'g',
            attributes: _extends({}, trans.outer),
            children: [maskInnerGroup],
          };
          var maskId = 'mask-' + nextUniqueId();
          var clipId = 'clip-' + nextUniqueId();
          var maskTag = {
            tag: 'mask',
            attributes: _extends({}, ALL_SPACE, {
              id: maskId,
              maskUnits: 'userSpaceOnUse',
              maskContentUnits: 'userSpaceOnUse',
            }),
            children: [maskRect, maskOuterGroup],
          };
          var defs = {
            tag: 'defs',
            children: [
              {
                tag: 'clipPath',
                attributes: { id: clipId },
                children: [maskPath],
              },
              maskTag,
            ],
          };

          children.push(defs, {
            tag: 'rect',
            attributes: _extends(
              {
                fill: 'currentColor',
                'clip-path': 'url(#' + clipId + ')',
                mask: 'url(#' + maskId + ')',
              },
              ALL_SPACE
            ),
          });

          return {
            children: children,
            attributes: attributes,
          };
        };

        var makeIconStandard = function(_ref) {
          var children = _ref.children,
            attributes = _ref.attributes,
            main = _ref.main,
            transform = _ref.transform,
            styles = _ref.styles;

          var styleString = joinStyles(styles);

          if (styleString.length > 0) {
            attributes['style'] = styleString;
          }

          if (transformIsMeaningful(transform)) {
            var trans = transformForSvg({
              transform: transform,
              containerWidth: main.width,
              iconWidth: main.width,
            });
            children.push({
              tag: 'g',
              attributes: _extends({}, trans.outer),
              children: [
                {
                  tag: 'g',
                  attributes: _extends({}, trans.inner),
                  children: [
                    {
                      tag: main.icon.tag,
                      children: main.icon.children,
                      attributes: _extends(
                        {},
                        main.icon.attributes,
                        trans.path
                      ),
                    },
                  ],
                },
              ],
            });
          } else {
            children.push(main.icon);
          }

          return {
            children: children,
            attributes: attributes,
          };
        };

        var asIcon = function(_ref) {
          var children = _ref.children,
            main = _ref.main,
            mask = _ref.mask,
            attributes = _ref.attributes,
            styles = _ref.styles,
            transform = _ref.transform;

          if (transformIsMeaningful(transform) && main.found && !mask.found) {
            var width = main.width,
              height = main.height;

            var offset = {
              x: width / height / 2,
              y: 0.5,
            };
            attributes['style'] = joinStyles(
              _extends({}, styles, {
                'transform-origin':
                  offset.x +
                  transform.x / 16 +
                  'em ' +
                  (offset.y + transform.y / 16) +
                  'em',
              })
            );
          }

          return [
            {
              tag: 'svg',
              attributes: attributes,
              children: children,
            },
          ];
        };

        var asSymbol = function(_ref) {
          var prefix = _ref.prefix,
            iconName = _ref.iconName,
            children = _ref.children,
            attributes = _ref.attributes,
            symbol = _ref.symbol;

          var id =
            symbol === true
              ? prefix + '-' + config$1.familyPrefix + '-' + iconName
              : symbol;

          return [
            {
              tag: 'svg',
              attributes: {
                style: 'display: none;',
              },
              children: [
                {
                  tag: 'symbol',
                  attributes: _extends({}, attributes, { id: id }),
                  children: children,
                },
              ],
            },
          ];
        };

        function makeInlineSvgAbstract(params) {
          var _params$icons = params.icons,
            main = _params$icons.main,
            mask = _params$icons.mask,
            prefix = params.prefix,
            iconName = params.iconName,
            transform = params.transform,
            symbol = params.symbol,
            title = params.title,
            extra = params.extra,
            _params$watchable = params.watchable,
            watchable =
              _params$watchable === undefined ? false : _params$watchable;

          var _ref = mask.found ? mask : main,
            width = _ref.width,
            height = _ref.height;

          var widthClass = 'fa-w-' + Math.ceil((width / height) * 16);
          var attrClass = [
            config$1.replacementClass,
            iconName ? config$1.familyPrefix + '-' + iconName : '',
            widthClass,
          ]
            .concat(extra.classes)
            .join(' ');

          var content = {
            children: [],
            attributes: _extends({}, extra.attributes, {
              'data-prefix': prefix,
              'data-icon': iconName,
              class: attrClass,
              role: 'img',
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 ' + width + ' ' + height,
            }),
          };

          if (watchable) {
            content.attributes[DATA_FA_I2SVG] = '';
          }

          if (title)
            content.children.push({
              tag: 'title',
              attributes: {
                id:
                  content.attributes['aria-labelledby'] ||
                  'title-' + nextUniqueId(),
              },
              children: [title],
            });

          var args = _extends({}, content, {
            prefix: prefix,
            iconName: iconName,
            main: main,
            mask: mask,
            transform: transform,
            symbol: symbol,
            styles: extra.styles,
          });

          var _ref2 =
              mask.found && main.found
                ? makeIconMasking(args)
                : makeIconStandard(args),
            children = _ref2.children,
            attributes = _ref2.attributes;

          args.children = children;
          args.attributes = attributes;

          if (symbol) {
            return asSymbol(args);
          } else {
            return asIcon(args);
          }
        }

        function makeLayersTextAbstract(params) {
          var content = params.content,
            width = params.width,
            height = params.height,
            transform = params.transform,
            title = params.title,
            extra = params.extra,
            _params$watchable2 = params.watchable,
            watchable =
              _params$watchable2 === undefined ? false : _params$watchable2;

          var attributes = _extends(
            {},
            extra.attributes,
            title ? { title: title } : {},
            {
              class: extra.classes.join(' '),
            }
          );

          if (watchable) {
            attributes[DATA_FA_I2SVG] = '';
          }

          var styles = _extends({}, extra.styles);

          if (transformIsMeaningful(transform)) {
            styles['transform'] = transformForCss({
              transform: transform,
              startCentered: true,
              width: width,
              height: height,
            });
            styles['-webkit-transform'] = styles['transform'];
          }

          var styleString = joinStyles(styles);

          if (styleString.length > 0) {
            attributes['style'] = styleString;
          }

          var val = [];

          val.push({
            tag: 'span',
            attributes: attributes,
            children: [content],
          });

          if (title) {
            val.push({
              tag: 'span',
              attributes: { class: 'sr-only' },
              children: [title],
            });
          }

          return val;
        }

        var noop$2 = function noop() {};
        var p =
          config$1.measurePerformance &&
          PERFORMANCE &&
          PERFORMANCE.mark &&
          PERFORMANCE.measure
            ? PERFORMANCE
            : { mark: noop$2, measure: noop$2 };
        var preamble = 'FA "5.0.13"';

        var begin = function begin(name) {
          p.mark(preamble + ' ' + name + ' begins');
          return function() {
            return end(name);
          };
        };

        var end = function end(name) {
          p.mark(preamble + ' ' + name + ' ends');
          p.measure(
            preamble + ' ' + name,
            preamble + ' ' + name + ' begins',
            preamble + ' ' + name + ' ends'
          );
        };

        var perf = { begin: begin, end: end };

        /**
         * Internal helper to bind a function known to have 4 arguments
         * to a given context.
         */
        var bindInternal4 = function bindInternal4(func, thisContext) {
          return function(a, b, c, d) {
            return func.call(thisContext, a, b, c, d);
          };
        };

        /**
         * # Reduce
         *
         * A fast object `.reduce()` implementation.
         *
         * @param  {Object}   subject      The object to reduce over.
         * @param  {Function} fn           The reducer function.
         * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
         * @param  {Object}   thisContext  The context for the reducer.
         * @return {mixed}                 The final result.
         */
        var reduce = function fastReduceObject(
          subject,
          fn,
          initialValue,
          thisContext
        ) {
          var keys = Object.keys(subject),
            length = keys.length,
            iterator =
              thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
            i,
            key,
            result;

          if (initialValue === undefined) {
            i = 1;
            result = subject[keys[0]];
          } else {
            i = 0;
            result = initialValue;
          }

          for (; i < length; i++) {
            key = keys[i];
            result = iterator(result, subject[key], key, subject);
          }

          return result;
        };

        var styles$2 = namespace.styles;
        var shims = namespace.shims;

        var _byUnicode = {};
        var _byLigature = {};
        var _byOldName = {};

        var build = function build() {
          var lookup = function lookup(reducer) {
            return reduce(
              styles$2,
              function(o, style, prefix) {
                o[prefix] = reduce(style, reducer, {});
                return o;
              },
              {}
            );
          };

          _byUnicode = lookup(function(acc, icon, iconName) {
            acc[icon[3]] = iconName;

            return acc;
          });

          _byLigature = lookup(function(acc, icon, iconName) {
            var ligatures = icon[2];

            acc[iconName] = iconName;

            ligatures.forEach(function(ligature) {
              acc[ligature] = iconName;
            });

            return acc;
          });

          var hasRegular = 'far' in styles$2;

          _byOldName = reduce(
            shims,
            function(acc, shim) {
              var oldName = shim[0];
              var prefix = shim[1];
              var iconName = shim[2];

              if (prefix === 'far' && !hasRegular) {
                prefix = 'fas';
              }

              acc[oldName] = { prefix: prefix, iconName: iconName };

              return acc;
            },
            {}
          );
        };

        build();

        function byUnicode(prefix, unicode) {
          return _byUnicode[prefix][unicode];
        }

        function byLigature(prefix, ligature) {
          return _byLigature[prefix][ligature];
        }

        function byOldName(name) {
          return _byOldName[name] || { prefix: null, iconName: null };
        }

        var styles$1 = namespace.styles;

        var emptyCanonicalIcon = function emptyCanonicalIcon() {
          return { prefix: null, iconName: null, rest: [] };
        };

        function getCanonicalIcon(values) {
          return values.reduce(function(acc, cls) {
            var iconName = getIconName(config$1.familyPrefix, cls);

            if (styles$1[cls]) {
              acc.prefix = cls;
            } else if (iconName) {
              var shim = acc.prefix === 'fa' ? byOldName(iconName) : {};

              acc.iconName = shim.iconName || iconName;
              acc.prefix = shim.prefix || acc.prefix;
            } else if (
              cls !== config$1.replacementClass &&
              cls.indexOf('fa-w-') !== 0
            ) {
              acc.rest.push(cls);
            }

            return acc;
          }, emptyCanonicalIcon());
        }

        function iconFromMapping(mapping, prefix, iconName) {
          if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
            return {
              prefix: prefix,
              iconName: iconName,
              icon: mapping[prefix][iconName],
            };
          }
        }

        function toHtml(abstractNodes) {
          var tag = abstractNodes.tag,
            _abstractNodes$attrib = abstractNodes.attributes,
            attributes =
              _abstractNodes$attrib === undefined ? {} : _abstractNodes$attrib,
            _abstractNodes$childr = abstractNodes.children,
            children =
              _abstractNodes$childr === undefined ? [] : _abstractNodes$childr;

          if (typeof abstractNodes === 'string') {
            return htmlEscape(abstractNodes);
          } else {
            return (
              '<' +
              tag +
              ' ' +
              joinAttributes(attributes) +
              '>' +
              children.map(toHtml).join('') +
              '</' +
              tag +
              '>'
            );
          }
        }

        var noop$1 = function noop() {};

        function isWatched(node) {
          var i2svg = node.getAttribute
            ? node.getAttribute(DATA_FA_I2SVG)
            : null;

          return typeof i2svg === 'string';
        }

        function getMutator() {
          if (config$1.autoReplaceSvg === true) {
            return mutators.replace;
          }

          var mutator = mutators[config$1.autoReplaceSvg];

          return mutator || mutators.replace;
        }

        var mutators = {
          replace: function replace(mutation) {
            var node = mutation[0];
            var abstract = mutation[1];
            var newOuterHTML = abstract
              .map(function(a) {
                return toHtml(a);
              })
              .join('\n');

            if (node.parentNode && node.outerHTML) {
              node.outerHTML =
                newOuterHTML +
                (config$1.keepOriginalSource &&
                node.tagName.toLowerCase() !== 'svg'
                  ? '<!-- ' + node.outerHTML + ' -->'
                  : '');
            } else if (node.parentNode) {
              var newNode = document.createElement('span');
              node.parentNode.replaceChild(newNode, node);
              newNode.outerHTML = newOuterHTML;
            }
          },
          nest: function nest(mutation) {
            var node = mutation[0];
            var abstract = mutation[1];

            // If we already have a replaced node we do not want to continue nesting within it.
            // Short-circuit to the standard replacement
            if (~classArray(node).indexOf(config$1.replacementClass)) {
              return mutators.replace(mutation);
            }

            var forSvg = new RegExp(config$1.familyPrefix + '-.*');

            delete abstract[0].attributes.style;

            var splitClasses = abstract[0].attributes.class.split(' ').reduce(
              function(acc, cls) {
                if (cls === config$1.replacementClass || cls.match(forSvg)) {
                  acc.toSvg.push(cls);
                } else {
                  acc.toNode.push(cls);
                }

                return acc;
              },
              { toNode: [], toSvg: [] }
            );

            abstract[0].attributes.class = splitClasses.toSvg.join(' ');

            var newInnerHTML = abstract
              .map(function(a) {
                return toHtml(a);
              })
              .join('\n');
            node.setAttribute('class', splitClasses.toNode.join(' '));
            node.setAttribute(DATA_FA_I2SVG, '');
            node.innerHTML = newInnerHTML;
          },
        };

        function perform(mutations, callback) {
          var callbackFunction =
            typeof callback === 'function' ? callback : noop$1;

          if (mutations.length === 0) {
            callbackFunction();
          } else {
            var frame =
              WINDOW.requestAnimationFrame ||
              function(op) {
                return op();
              };

            frame(function() {
              var mutator = getMutator();
              var mark = perf.begin('mutate');

              mutations.map(mutator);

              mark();

              callbackFunction();
            });
          }
        }

        var disabled = false;

        function disableObservation(operation) {
          disabled = true;
          operation();
          disabled = false;
        }

        var mo = null;

        function observe(options) {
          if (!MUTATION_OBSERVER) return;

          var treeCallback = options.treeCallback,
            nodeCallback = options.nodeCallback,
            pseudoElementsCallback = options.pseudoElementsCallback;

          mo = new MUTATION_OBSERVER(function(objects) {
            if (disabled) return;

            toArray(objects).forEach(function(mutationRecord) {
              if (
                mutationRecord.type === 'childList' &&
                mutationRecord.addedNodes.length > 0 &&
                !isWatched(mutationRecord.addedNodes[0])
              ) {
                if (config$1.searchPseudoElements) {
                  pseudoElementsCallback(mutationRecord.target);
                }

                treeCallback(mutationRecord.target);
              }

              if (
                mutationRecord.type === 'attributes' &&
                mutationRecord.target.parentNode &&
                config$1.searchPseudoElements
              ) {
                pseudoElementsCallback(mutationRecord.target.parentNode);
              }

              if (
                mutationRecord.type === 'attributes' &&
                isWatched(mutationRecord.target) &&
                ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(
                  mutationRecord.attributeName
                )
              ) {
                if (mutationRecord.attributeName === 'class') {
                  var _getCanonicalIcon = getCanonicalIcon(
                      classArray(mutationRecord.target)
                    ),
                    prefix = _getCanonicalIcon.prefix,
                    iconName = _getCanonicalIcon.iconName;

                  if (prefix)
                    mutationRecord.target.setAttribute('data-prefix', prefix);
                  if (iconName)
                    mutationRecord.target.setAttribute('data-icon', iconName);
                } else {
                  nodeCallback(mutationRecord.target);
                }
              }
            });
          });

          if (!IS_DOM) return;

          mo.observe(DOCUMENT.getElementsByTagName('body')[0], {
            childList: true,
            attributes: true,
            characterData: true,
            subtree: true,
          });
        }

        function disconnect() {
          if (!mo) return;

          mo.disconnect();
        }

        var styleParser = function(node) {
          var style = node.getAttribute('style');

          var val = [];

          if (style) {
            val = style.split(';').reduce(function(acc, style) {
              var styles = style.split(':');
              var prop = styles[0];
              var value = styles.slice(1);

              if (prop && value.length > 0) {
                acc[prop] = value.join(':').trim();
              }

              return acc;
            }, {});
          }

          return val;
        };

        function toHex(unicode) {
          var result = '';

          for (var i = 0; i < unicode.length; i++) {
            var hex = unicode.charCodeAt(i).toString(16);
            result += ('000' + hex).slice(-4);
          }

          return result;
        }

        var classParser = function(node) {
          var existingPrefix = node.getAttribute('data-prefix');
          var existingIconName = node.getAttribute('data-icon');
          var innerText =
            node.innerText !== undefined ? node.innerText.trim() : '';

          var val = getCanonicalIcon(classArray(node));

          if (existingPrefix && existingIconName) {
            val.prefix = existingPrefix;
            val.iconName = existingIconName;
          }

          if (val.prefix && innerText.length > 1) {
            val.iconName = byLigature(val.prefix, node.innerText);
          } else if (val.prefix && innerText.length === 1) {
            val.iconName = byUnicode(val.prefix, toHex(node.innerText));
          }

          return val;
        };

        var parseTransformString = function parseTransformString(
          transformString
        ) {
          var transform = {
            size: 16,
            x: 0,
            y: 0,
            flipX: false,
            flipY: false,
            rotate: 0,
          };

          if (!transformString) {
            return transform;
          } else {
            return transformString
              .toLowerCase()
              .split(' ')
              .reduce(function(acc, n) {
                var parts = n.toLowerCase().split('-');
                var first = parts[0];
                var rest = parts.slice(1).join('-');

                if (first && rest === 'h') {
                  acc.flipX = true;
                  return acc;
                }

                if (first && rest === 'v') {
                  acc.flipY = true;
                  return acc;
                }

                rest = parseFloat(rest);

                if (isNaN(rest)) {
                  return acc;
                }

                switch (first) {
                  case 'grow':
                    acc.size = acc.size + rest;
                    break;
                  case 'shrink':
                    acc.size = acc.size - rest;
                    break;
                  case 'left':
                    acc.x = acc.x - rest;
                    break;
                  case 'right':
                    acc.x = acc.x + rest;
                    break;
                  case 'up':
                    acc.y = acc.y - rest;
                    break;
                  case 'down':
                    acc.y = acc.y + rest;
                    break;
                  case 'rotate':
                    acc.rotate = acc.rotate + rest;
                    break;
                }

                return acc;
              }, transform);
          }
        };

        var transformParser = function(node) {
          return parseTransformString(node.getAttribute('data-fa-transform'));
        };

        var symbolParser = function(node) {
          var symbol = node.getAttribute('data-fa-symbol');

          return symbol === null ? false : symbol === '' ? true : symbol;
        };

        var attributesParser = function(node) {
          var extraAttributes = toArray(node.attributes).reduce(function(
            acc,
            attr
          ) {
            if (acc.name !== 'class' && acc.name !== 'style') {
              acc[attr.name] = attr.value;
            }
            return acc;
          },
          {});

          var title = node.getAttribute('title');

          if (config$1.autoA11y) {
            if (title) {
              extraAttributes['aria-labelledby'] =
                config$1.replacementClass + '-title-' + nextUniqueId();
            } else {
              extraAttributes['aria-hidden'] = 'true';
            }
          }

          return extraAttributes;
        };

        var maskParser = function(node) {
          var mask = node.getAttribute('data-fa-mask');

          if (!mask) {
            return emptyCanonicalIcon();
          } else {
            return getCanonicalIcon(
              mask.split(' ').map(function(i) {
                return i.trim();
              })
            );
          }
        };

        function parseMeta(node) {
          var _classParser = classParser(node),
            iconName = _classParser.iconName,
            prefix = _classParser.prefix,
            extraClasses = _classParser.rest;

          var extraStyles = styleParser(node);
          var transform = transformParser(node);
          var symbol = symbolParser(node);
          var extraAttributes = attributesParser(node);
          var mask = maskParser(node);

          return {
            iconName: iconName,
            title: node.getAttribute('title'),
            prefix: prefix,
            transform: transform,
            symbol: symbol,
            mask: mask,
            extra: {
              classes: extraClasses,
              styles: extraStyles,
              attributes: extraAttributes,
            },
          };
        }

        function MissingIcon(error) {
          this.name = 'MissingIcon';
          this.message = error || 'Icon unavailable';
          this.stack = new Error().stack;
        }

        MissingIcon.prototype = Object.create(Error.prototype);
        MissingIcon.prototype.constructor = MissingIcon;

        var FILL = { fill: 'currentColor' };
        var ANIMATION_BASE = {
          attributeType: 'XML',
          repeatCount: 'indefinite',
          dur: '2s',
        };
        var RING = {
          tag: 'path',
          attributes: _extends({}, FILL, {
            d:
              'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z',
          }),
        };
        var OPACITY_ANIMATE = _extends({}, ANIMATION_BASE, {
          attributeName: 'opacity',
        });
        var DOT = {
          tag: 'circle',
          attributes: _extends({}, FILL, {
            cx: '256',
            cy: '364',
            r: '28',
          }),
          children: [
            {
              tag: 'animate',
              attributes: _extends({}, ANIMATION_BASE, {
                attributeName: 'r',
                values: '28;14;28;28;14;28;',
              }),
            },
            {
              tag: 'animate',
              attributes: _extends({}, OPACITY_ANIMATE, {
                values: '1;0;1;1;0;1;',
              }),
            },
          ],
        };
        var QUESTION = {
          tag: 'path',
          attributes: _extends({}, FILL, {
            opacity: '1',
            d:
              'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z',
          }),
          children: [
            {
              tag: 'animate',
              attributes: _extends({}, OPACITY_ANIMATE, {
                values: '1;0;0;0;0;1;',
              }),
            },
          ],
        };
        var EXCLAMATION = {
          tag: 'path',
          attributes: _extends({}, FILL, {
            opacity: '0',
            d:
              'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z',
          }),
          children: [
            {
              tag: 'animate',
              attributes: _extends({}, OPACITY_ANIMATE, {
                values: '0;0;1;1;0;0;',
              }),
            },
          ],
        };

        var missing = {
          tag: 'g',
          children: [RING, DOT, QUESTION, EXCLAMATION],
        };

        var styles = namespace.styles;

        var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
        var FONT_FAMILY_PATTERN = /Font Awesome 5 (Solid|Regular|Light|Brands)/;
        var STYLE_TO_PREFIX = {
          Solid: 'fas',
          Regular: 'far',
          Light: 'fal',
          Brands: 'fab',
        };

        function findIcon(iconName, prefix) {
          var val = {
            found: false,
            width: 512,
            height: 512,
            icon: missing,
          };

          if (
            iconName &&
            prefix &&
            styles[prefix] &&
            styles[prefix][iconName]
          ) {
            var icon = styles[prefix][iconName];
            var width = icon[0];
            var height = icon[1];
            var vectorData = icon.slice(4);

            val = {
              found: true,
              width: width,
              height: height,
              icon: {
                tag: 'path',
                attributes: { fill: 'currentColor', d: vectorData[0] },
              },
            };
          } else if (iconName && prefix && !config$1.showMissingIcons) {
            throw new MissingIcon(
              'Icon is missing for prefix ' +
                prefix +
                ' with icon name ' +
                iconName
            );
          }

          return val;
        }

        function generateSvgReplacementMutation(node, nodeMeta) {
          var iconName = nodeMeta.iconName,
            title = nodeMeta.title,
            prefix = nodeMeta.prefix,
            transform = nodeMeta.transform,
            symbol = nodeMeta.symbol,
            mask = nodeMeta.mask,
            extra = nodeMeta.extra;

          return [
            node,
            makeInlineSvgAbstract({
              icons: {
                main: findIcon(iconName, prefix),
                mask: findIcon(mask.iconName, mask.prefix),
              },
              prefix: prefix,
              iconName: iconName,
              transform: transform,
              symbol: symbol,
              mask: mask,
              title: title,
              extra: extra,
              watchable: true,
            }),
          ];
        }

        function generateLayersText(node, nodeMeta) {
          var title = nodeMeta.title,
            transform = nodeMeta.transform,
            extra = nodeMeta.extra;

          var width = null;
          var height = null;

          if (IS_IE) {
            var computedFontSize = parseInt(
              getComputedStyle(node).fontSize,
              10
            );
            var boundingClientRect = node.getBoundingClientRect();
            width = boundingClientRect.width / computedFontSize;
            height = boundingClientRect.height / computedFontSize;
          }

          if (config$1.autoA11y && !title) {
            extra.attributes['aria-hidden'] = 'true';
          }

          return [
            node,
            makeLayersTextAbstract({
              content: node.innerHTML,
              width: width,
              height: height,
              transform: transform,
              title: title,
              extra: extra,
              watchable: true,
            }),
          ];
        }

        function generateMutation(node) {
          var nodeMeta = parseMeta(node);

          if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
            return generateLayersText(node, nodeMeta);
          } else {
            return generateSvgReplacementMutation(node, nodeMeta);
          }
        }

        function remove(node) {
          if (typeof node.remove === 'function') {
            node.remove();
          } else if (node && node.parentNode) {
            node.parentNode.removeChild(node);
          }
        }

        function searchPseudoElements(root) {
          if (!IS_DOM) return;

          var end = perf.begin('searchPseudoElements');

          disableObservation(function() {
            toArray(root.querySelectorAll('*')).forEach(function(node) {
              [':before', ':after'].forEach(function(pos) {
                var styles = WINDOW.getComputedStyle(node, pos);
                var fontFamily = styles
                  .getPropertyValue('font-family')
                  .match(FONT_FAMILY_PATTERN);
                var children = toArray(node.children);
                var pseudoElement = children.filter(function(c) {
                  return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === pos;
                })[0];

                if (pseudoElement) {
                  if (
                    pseudoElement.nextSibling &&
                    pseudoElement.nextSibling.textContent.indexOf(
                      DATA_FA_PSEUDO_ELEMENT
                    ) > -1
                  ) {
                    remove(pseudoElement.nextSibling);
                  }
                  remove(pseudoElement);
                  pseudoElement = null;
                }

                if (fontFamily && !pseudoElement) {
                  var content = styles.getPropertyValue('content');
                  var i = DOCUMENT.createElement('i');
                  i.setAttribute('class', '' + STYLE_TO_PREFIX[fontFamily[1]]);
                  i.setAttribute(DATA_FA_PSEUDO_ELEMENT, pos);
                  i.innerText =
                    content.length === 3 ? content.substr(1, 1) : content;
                  if (pos === ':before') {
                    node.insertBefore(i, node.firstChild);
                  } else {
                    node.appendChild(i);
                  }
                }
              });
            });
          });

          end();
        }

        function onTree(root) {
          var callback =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : null;

          if (!IS_DOM) return;

          var htmlClassList = DOCUMENT.documentElement.classList;
          var hclAdd = function hclAdd(suffix) {
            return htmlClassList.add(
              HTML_CLASS_I2SVG_BASE_CLASS + '-' + suffix
            );
          };
          var hclRemove = function hclRemove(suffix) {
            return htmlClassList.remove(
              HTML_CLASS_I2SVG_BASE_CLASS + '-' + suffix
            );
          };
          var prefixes = Object.keys(styles);
          var prefixesDomQuery = [
            '.' + LAYERS_TEXT_CLASSNAME + ':not([' + DATA_FA_I2SVG + '])',
          ]
            .concat(
              prefixes.map(function(p) {
                return '.' + p + ':not([' + DATA_FA_I2SVG + '])';
              })
            )
            .join(', ');

          if (prefixesDomQuery.length === 0) {
            return;
          }

          var candidates = toArray(root.querySelectorAll(prefixesDomQuery));

          if (candidates.length > 0) {
            hclAdd('pending');
            hclRemove('complete');
          } else {
            return;
          }

          var mark = perf.begin('onTree');

          var mutations = candidates.reduce(function(acc, node) {
            try {
              var mutation = generateMutation(node);

              if (mutation) {
                acc.push(mutation);
              }
            } catch (e) {
              if (!PRODUCTION) {
                if (e instanceof MissingIcon) {
                  console.error(e);
                }
              }
            }

            return acc;
          }, []);

          mark();

          perform(mutations, function() {
            hclAdd('active');
            hclAdd('complete');
            hclRemove('pending');

            if (typeof callback === 'function') callback();
          });
        }

        function onNode(node) {
          var callback =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : null;

          var mutation = generateMutation(node);

          if (mutation) {
            perform([mutation], callback);
          }
        }

        var baseStyles =
          'svg:not(:root).svg-inline--fa {\n  overflow: visible; }\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -.125em; }\n  .svg-inline--fa.fa-lg {\n    vertical-align: -.225em; }\n  .svg-inline--fa.fa-w-1 {\n    width: 0.0625em; }\n  .svg-inline--fa.fa-w-2 {\n    width: 0.125em; }\n  .svg-inline--fa.fa-w-3 {\n    width: 0.1875em; }\n  .svg-inline--fa.fa-w-4 {\n    width: 0.25em; }\n  .svg-inline--fa.fa-w-5 {\n    width: 0.3125em; }\n  .svg-inline--fa.fa-w-6 {\n    width: 0.375em; }\n  .svg-inline--fa.fa-w-7 {\n    width: 0.4375em; }\n  .svg-inline--fa.fa-w-8 {\n    width: 0.5em; }\n  .svg-inline--fa.fa-w-9 {\n    width: 0.5625em; }\n  .svg-inline--fa.fa-w-10 {\n    width: 0.625em; }\n  .svg-inline--fa.fa-w-11 {\n    width: 0.6875em; }\n  .svg-inline--fa.fa-w-12 {\n    width: 0.75em; }\n  .svg-inline--fa.fa-w-13 {\n    width: 0.8125em; }\n  .svg-inline--fa.fa-w-14 {\n    width: 0.875em; }\n  .svg-inline--fa.fa-w-15 {\n    width: 0.9375em; }\n  .svg-inline--fa.fa-w-16 {\n    width: 1em; }\n  .svg-inline--fa.fa-w-17 {\n    width: 1.0625em; }\n  .svg-inline--fa.fa-w-18 {\n    width: 1.125em; }\n  .svg-inline--fa.fa-w-19 {\n    width: 1.1875em; }\n  .svg-inline--fa.fa-w-20 {\n    width: 1.25em; }\n  .svg-inline--fa.fa-pull-left {\n    margin-right: .3em;\n    width: auto; }\n  .svg-inline--fa.fa-pull-right {\n    margin-left: .3em;\n    width: auto; }\n  .svg-inline--fa.fa-border {\n    height: 1.5em; }\n  .svg-inline--fa.fa-li {\n    width: 2em; }\n  .svg-inline--fa.fa-fw {\n    width: 1.25em; }\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -.125em;\n  width: 1em; }\n  .fa-layers svg.svg-inline--fa {\n    -webkit-transform-origin: center center;\n            transform-origin: center center; }\n\n.fa-layers-text, .fa-layers-counter {\n  display: inline-block;\n  position: absolute;\n  text-align: center; }\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center; }\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: .25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right; }\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right; }\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left; }\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right; }\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left; }\n\n.fa-lg {\n  font-size: 1.33333em;\n  line-height: 0.75em;\n  vertical-align: -.0667em; }\n\n.fa-xs {\n  font-size: .75em; }\n\n.fa-sm {\n  font-size: .875em; }\n\n.fa-1x {\n  font-size: 1em; }\n\n.fa-2x {\n  font-size: 2em; }\n\n.fa-3x {\n  font-size: 3em; }\n\n.fa-4x {\n  font-size: 4em; }\n\n.fa-5x {\n  font-size: 5em; }\n\n.fa-6x {\n  font-size: 6em; }\n\n.fa-7x {\n  font-size: 7em; }\n\n.fa-8x {\n  font-size: 8em; }\n\n.fa-9x {\n  font-size: 9em; }\n\n.fa-10x {\n  font-size: 10em; }\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em; }\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0; }\n  .fa-ul > li {\n    position: relative; }\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit; }\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: .1em;\n  padding: .2em .25em .15em; }\n\n.fa-pull-left {\n  float: left; }\n\n.fa-pull-right {\n  float: right; }\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: .3em; }\n\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: .3em; }\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear; }\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8); }\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg); }\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1); }\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1); }\n\n.fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1); }\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  -webkit-filter: none;\n          filter: none; }\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2em; }\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1em; }\n\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2em; }\n\n.fa-inverse {\n  color: #fff; }\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto; }\n';

        var css = function() {
          var dfp = DEFAULT_FAMILY_PREFIX;
          var drc = DEFAULT_REPLACEMENT_CLASS;
          var fp = config$1.familyPrefix;
          var rc = config$1.replacementClass;
          var s = baseStyles;

          if (fp !== dfp || rc !== drc) {
            var dPatt = new RegExp('\\.' + dfp + '\\-', 'g');
            var rPatt = new RegExp('\\.' + drc, 'g');

            s = s.replace(dPatt, '.' + fp + '-').replace(rPatt, '.' + rc);
          }

          return s;
        };

        function define(prefix, icons) {
          var normalized = Object.keys(icons).reduce(function(acc, iconName) {
            var icon = icons[iconName];
            var expanded = !!icon.icon;

            if (expanded) {
              acc[icon.iconName] = icon.icon;
            } else {
              acc[iconName] = icon;
            }
            return acc;
          }, {});

          if (typeof namespace.hooks.addPack === 'function') {
            namespace.hooks.addPack(prefix, normalized);
          } else {
            namespace.styles[prefix] = _extends(
              {},
              namespace.styles[prefix] || {},
              normalized
            );
          }

          /**
           * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
           * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
           * for `fas` so we'll easy the upgrade process for our users by automatically defining
           * this as well.
           */
          if (prefix === 'fas') {
            define('fa', icons);
          }
        }

        var Library = (function() {
          function Library() {
            classCallCheck(this, Library);

            this.definitions = {};
          }

          createClass(Library, [
            {
              key: 'add',
              value: function add() {
                var _this = this;

                for (
                  var _len = arguments.length,
                    definitions = Array(_len),
                    _key = 0;
                  _key < _len;
                  _key++
                ) {
                  definitions[_key] = arguments[_key];
                }

                var additions = definitions.reduce(this._pullDefinitions, {});

                Object.keys(additions).forEach(function(key) {
                  _this.definitions[key] = _extends(
                    {},
                    _this.definitions[key] || {},
                    additions[key]
                  );
                  define(key, additions[key]);
                });
              },
            },
            {
              key: 'reset',
              value: function reset() {
                this.definitions = {};
              },
            },
            {
              key: '_pullDefinitions',
              value: function _pullDefinitions(additions, definition) {
                var normalized =
                  definition.prefix && definition.iconName && definition.icon
                    ? { 0: definition }
                    : definition;

                Object.keys(normalized).map(function(key) {
                  var _normalized$key = normalized[key],
                    prefix = _normalized$key.prefix,
                    iconName = _normalized$key.iconName,
                    icon = _normalized$key.icon;

                  if (!additions[prefix]) additions[prefix] = {};

                  additions[prefix][iconName] = icon;
                });

                return additions;
              },
            },
          ]);
          return Library;
        })();

        function prepIcon(icon) {
          var width = icon[0];
          var height = icon[1];
          var vectorData = icon.slice(4);

          return {
            found: true,
            width: width,
            height: height,
            icon: {
              tag: 'path',
              attributes: { fill: 'currentColor', d: vectorData[0] },
            },
          };
        }

        var _cssInserted = false;

        function ensureCss() {
          if (!config$1.autoAddCss) {
            return;
          }

          if (!_cssInserted) {
            insertCss(css());
          }

          _cssInserted = true;
        }

        function apiObject(val, abstractCreator) {
          Object.defineProperty(val, 'abstract', {
            get: abstractCreator,
          });

          Object.defineProperty(val, 'html', {
            get: function get() {
              return val.abstract.map(function(a) {
                return toHtml(a);
              });
            },
          });

          Object.defineProperty(val, 'node', {
            get: function get() {
              if (!IS_DOM) return;

              var container = DOCUMENT.createElement('div');
              container.innerHTML = val.html;
              return container.children;
            },
          });

          return val;
        }

        function findIconDefinition(params) {
          var _params$prefix = params.prefix,
            prefix = _params$prefix === undefined ? 'fa' : _params$prefix,
            iconName = params.iconName;

          if (!iconName) return;

          return (
            iconFromMapping(library.definitions, prefix, iconName) ||
            iconFromMapping(namespace.styles, prefix, iconName)
          );
        }

        function resolveIcons(next) {
          return function(maybeIconDefinition) {
            var params =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : {};

            var iconDefinition = (maybeIconDefinition || {}).icon
              ? maybeIconDefinition
              : findIconDefinition(maybeIconDefinition || {});

            var mask = params.mask;

            if (mask) {
              mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
            }

            return next(iconDefinition, _extends({}, params, { mask: mask }));
          };
        }

        var library = new Library();

        var noAuto = function noAuto() {
          auto(false);
          disconnect();
        };

        var dom = {
          i2svg: function i2svg() {
            var params =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : {};

            if (IS_DOM) {
              ensureCss();

              var _params$node = params.node,
                node = _params$node === undefined ? DOCUMENT : _params$node,
                _params$callback = params.callback,
                callback =
                  _params$callback === undefined
                    ? function() {}
                    : _params$callback;

              if (config$1.searchPseudoElements) {
                searchPseudoElements(node);
              }

              onTree(node, callback);
            }
          },

          css: css,

          insertCss: function insertCss$$1() {
            insertCss(css());
          },
        };

        var parse = {
          transform: function transform(transformString) {
            return parseTransformString(transformString);
          },
        };

        var icon = resolveIcons(function(iconDefinition) {
          var params =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : {};
          var _params$transform = params.transform,
            transform =
              _params$transform === undefined
                ? meaninglessTransform
                : _params$transform,
            _params$symbol = params.symbol,
            symbol = _params$symbol === undefined ? false : _params$symbol,
            _params$mask = params.mask,
            mask = _params$mask === undefined ? null : _params$mask,
            _params$title = params.title,
            title = _params$title === undefined ? null : _params$title,
            _params$classes = params.classes,
            classes = _params$classes === undefined ? [] : _params$classes,
            _params$attributes = params.attributes,
            attributes =
              _params$attributes === undefined ? {} : _params$attributes,
            _params$styles = params.styles,
            styles = _params$styles === undefined ? {} : _params$styles;

          if (!iconDefinition) return;

          var prefix = iconDefinition.prefix,
            iconName = iconDefinition.iconName,
            icon = iconDefinition.icon;

          return apiObject(
            _extends({ type: 'icon' }, iconDefinition),
            function() {
              ensureCss();

              if (config$1.autoA11y) {
                if (title) {
                  attributes['aria-labelledby'] =
                    config$1.replacementClass + '-title-' + nextUniqueId();
                } else {
                  attributes['aria-hidden'] = 'true';
                }
              }

              return makeInlineSvgAbstract({
                icons: {
                  main: prepIcon(icon),
                  mask: mask
                    ? prepIcon(mask.icon)
                    : { found: false, width: null, height: null, icon: {} },
                },
                prefix: prefix,
                iconName: iconName,
                transform: _extends({}, meaninglessTransform, transform),
                symbol: symbol,
                title: title,
                extra: {
                  attributes: attributes,
                  styles: styles,
                  classes: classes,
                },
              });
            }
          );
        });

        var text = function text(content) {
          var params =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : {};
          var _params$transform2 = params.transform,
            transform =
              _params$transform2 === undefined
                ? meaninglessTransform
                : _params$transform2,
            _params$title2 = params.title,
            title = _params$title2 === undefined ? null : _params$title2,
            _params$classes2 = params.classes,
            classes = _params$classes2 === undefined ? [] : _params$classes2,
            _params$attributes2 = params.attributes,
            attributes =
              _params$attributes2 === undefined ? {} : _params$attributes2,
            _params$styles2 = params.styles,
            styles = _params$styles2 === undefined ? {} : _params$styles2;

          return apiObject({ type: 'text', content: content }, function() {
            ensureCss();

            return makeLayersTextAbstract({
              content: content,
              transform: _extends({}, meaninglessTransform, transform),
              title: title,
              extra: {
                attributes: attributes,
                styles: styles,
                classes: [config$1.familyPrefix + '-layers-text'].concat(
                  toConsumableArray(classes)
                ),
              },
            });
          });
        };

        var layer = function layer(assembler) {
          return apiObject({ type: 'layer' }, function() {
            ensureCss();

            var children = [];

            assembler(function(args) {
              Array.isArray(args)
                ? args.map(function(a) {
                    children = children.concat(a.abstract);
                  })
                : (children = children.concat(args.abstract));
            });

            return [
              {
                tag: 'span',
                attributes: { class: config$1.familyPrefix + '-layers' },
                children: children,
              },
            ];
          });
        };

        var api$1 = {
          noAuto: noAuto,
          dom: dom,
          library: library,
          parse: parse,
          findIconDefinition: findIconDefinition,
          icon: icon,
          text: text,
          layer: layer,
        };

        var autoReplace = function autoReplace() {
          if (IS_DOM && config$1.autoReplaceSvg)
            api$1.dom.i2svg({ node: DOCUMENT });
        };

        function bootstrap() {
          if (IS_BROWSER) {
            if (!WINDOW.FontAwesome) {
              WINDOW.FontAwesome = api$1;
            }

            domready(function() {
              if (Object.keys(namespace.styles).length > 0) {
                autoReplace();
              }

              if (
                config$1.observeMutations &&
                typeof MutationObserver === 'function'
              ) {
                observe({
                  treeCallback: onTree,
                  nodeCallback: onNode,
                  pseudoElementsCallback: searchPseudoElements,
                });
              }
            });
          }

          namespace.hooks = _extends({}, namespace.hooks, {
            addPack: function addPack(prefix, icons) {
              namespace.styles[prefix] = _extends(
                {},
                namespace.styles[prefix] || {},
                icons
              );

              build();
              autoReplace();
            },

            addShims: function addShims(shims) {
              var _namespace$shims;

              (_namespace$shims = namespace.shims).push.apply(
                _namespace$shims,
                toConsumableArray(shims)
              );

              build();
              autoReplace();
            },
          });
        }

        Object.defineProperty(api$1, 'config', {
          get: function get() {
            return config$1;
          },

          set: function set(newConfig) {
            update(newConfig);
          },
        });

        if (IS_DOM) bunker(bootstrap);

        var config = api$1.config;

        /* harmony default export */ __webpack_exports__['default'] = api$1;

        /***/
      },
      /* 2 */
      /***/ function(module, exports) {
        module.exports = {
          prefix: 'fab',
          iconName: 'facebook-f',
          icon: [
            264,
            512,
            [],
            'f39e',
            'M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229',
          ],
        };

        /***/
      },
      /* 3 */
      /***/ function(module, exports) {
        module.exports = {
          prefix: 'fab',
          iconName: 'twitter',
          icon: [
            512,
            512,
            [],
            'f099',
            'M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z',
          ],
        };

        /***/
      },
      /* 4 */
      /***/ function(module, exports) {
        module.exports = {
          prefix: 'fab',
          iconName: 'telegram',
          icon: [
            496,
            512,
            [],
            'f2c6',
            'M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z',
          ],
        };

        /***/
      },
      /* 5 */
      /***/ function(module, exports) {
        module.exports = {
          prefix: 'fab',
          iconName: 'instagram',
          icon: [
            448,
            512,
            [],
            'f16d',
            'M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z',
          ],
        };

        /***/
      },
      /* 6 */
      /***/ function(module, exports) {
        module.exports = {
          prefix: 'fab',
          iconName: 'youtube',
          icon: [
            576,
            512,
            [],
            'f167',
            'M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z',
          ],
        };

        /***/
      },
      /* 7 */
      /***/ function(module, exports) {
        module.exports = {
          prefix: 'fab',
          iconName: 'linkedin-in',
          icon: [
            448,
            512,
            [],
            'f0e1',
            'M100.3 480H7.4V180.9h92.9V480zM53.8 140.1C24.1 140.1 0 115.5 0 85.8 0 56.1 24.1 32 53.8 32c29.7 0 53.8 24.1 53.8 53.8 0 29.7-24.1 54.3-53.8 54.3zM448 480h-92.7V334.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V480h-92.8V180.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V480z',
          ],
        };

        /***/
      },
      /* 8 */
      /***/ function(module, exports) {
        module.exports = {
          prefix: 'fab',
          iconName: 'medium-m',
          icon: [
            512,
            512,
            [],
            'f3c7',
            'M71.5 142.3c.6-5.9-1.7-11.8-6.1-15.8L20.3 72.1V64h140.2l108.4 237.7L364.2 64h133.7v8.1l-38.6 37c-3.3 2.5-5 6.7-4.3 10.8v272c-.7 4.1 1 8.3 4.3 10.8l37.7 37v8.1H307.3v-8.1l39.1-37.9c3.8-3.8 3.8-5 3.8-10.8V171.2L241.5 447.1h-14.7L100.4 171.2v184.9c-1.1 7.8 1.5 15.6 7 21.2l50.8 61.6v8.1h-144v-8L65 377.3c5.4-5.6 7.9-13.5 6.5-21.2V142.3z',
          ],
        };

        /***/
      },
      /* 9 */
      /***/ function(module, exports) {
        module.exports = {
          prefix: 'fab',
          iconName: 'google-plus-g',
          icon: [
            640,
            512,
            [],
            'f0d5',
            'M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z',
          ],
        };

        /***/
      },
      /* 10 */
      /***/ function(module, exports) {
        module.exports = {
          prefix: 'fab',
          iconName: 'pinterest',
          icon: [
            496,
            512,
            [],
            'f0d2',
            'M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z',
          ],
        };

        /***/
      },
      /* 11 */
      /***/ function(module, exports) {
        module.exports = {
          prefix: 'fab',
          iconName: 'flickr',
          icon: [
            448,
            512,
            [],
            'f16e',
            'M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM144.5 319c-35.1 0-63.5-28.4-63.5-63.5s28.4-63.5 63.5-63.5 63.5 28.4 63.5 63.5-28.4 63.5-63.5 63.5zm159 0c-35.1 0-63.5-28.4-63.5-63.5s28.4-63.5 63.5-63.5 63.5 28.4 63.5 63.5-28.4 63.5-63.5 63.5z',
          ],
        };

        /***/
      },
      /* 12 */
      /***/ function(module, exports) {
        module.exports = {
          prefix: 'fab',
          iconName: 'get-pocket',
          icon: [
            448,
            512,
            [],
            'f265',
            'M407.6 64h-367C18.5 64 0 82.5 0 104.6v135.2C0 364.5 99.7 464 224.2 464c124 0 223.8-99.5 223.8-224.2V104.6c0-22.4-17.7-40.6-40.4-40.6zm-162 268.5c-12.4 11.8-31.4 11.1-42.4 0C89.5 223.6 88.3 227.4 88.3 209.3c0-16.9 13.8-30.7 30.7-30.7 17 0 16.1 3.8 105.2 89.3 90.6-86.9 88.6-89.3 105.5-89.3 16.9 0 30.7 13.8 30.7 30.7 0 17.8-2.9 15.7-114.8 123.2z',
          ],
        };

        /***/
      },
      /* 13 */
      /***/ function(module, exports) {
        module.exports = {
          prefix: 'fab',
          iconName: 'spotify',
          icon: [
            496,
            512,
            [],
            'f1bc',
            'M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z',
          ],
        };

        /***/
      },
      /* 14 */
      /***/ function(module, exports) {
        module.exports = {
          prefix: 'fas',
          iconName: 'rss',
          icon: [
            448,
            512,
            [],
            'f09e',
            'M128.081 415.959c0 35.369-28.672 64.041-64.041 64.041S0 451.328 0 415.959s28.672-64.041 64.041-64.041 64.04 28.673 64.04 64.041zm175.66 47.25c-8.354-154.6-132.185-278.587-286.95-286.95C7.656 175.765 0 183.105 0 192.253v48.069c0 8.415 6.49 15.472 14.887 16.018 111.832 7.284 201.473 96.702 208.772 208.772.547 8.397 7.604 14.887 16.018 14.887h48.069c9.149.001 16.489-7.655 15.995-16.79zm144.249.288C439.596 229.677 251.465 40.445 16.503 32.01 7.473 31.686 0 38.981 0 48.016v48.068c0 8.625 6.835 15.645 15.453 15.999 191.179 7.839 344.627 161.316 352.465 352.465.353 8.618 7.373 15.453 15.999 15.453h48.068c9.034-.001 16.329-7.474 16.005-16.504z',
          ],
        };

        /***/
      },
      /* 15 */
      /***/ function(module, exports) {
        module.exports = {
          prefix: 'far',
          iconName: 'newspaper',
          icon: [
            576,
            512,
            [],
            'f1ea',
            'M552 64H112c-20.858 0-38.643 13.377-45.248 32H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h496c13.255 0 24-10.745 24-24V88c0-13.255-10.745-24-24-24zM48 392V144h16v248c0 4.411-3.589 8-8 8s-8-3.589-8-8zm480 8H111.422c.374-2.614.578-5.283.578-8V112h416v288zM172 280h136c6.627 0 12-5.373 12-12v-96c0-6.627-5.373-12-12-12H172c-6.627 0-12 5.373-12 12v96c0 6.627 5.373 12 12 12zm28-80h80v40h-80v-40zm-40 140v-24c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H172c-6.627 0-12-5.373-12-12zm192 0v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0-144v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0 72v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12z',
          ],
        };

        /***/
      },
      /* 16 */
      /***/ function(module, exports) {
        module.exports = {
          prefix: 'fas',
          iconName: 'home',
          icon: [
            576,
            512,
            [],
            'f015',
            'M488 312.7V456c0 13.3-10.7 24-24 24H348c-6.6 0-12-5.4-12-12V356c0-6.6-5.4-12-12-12h-72c-6.6 0-12 5.4-12 12v112c0 6.6-5.4 12-12 12H112c-13.3 0-24-10.7-24-24V312.7c0-3.6 1.6-7 4.4-9.3l188-154.8c4.4-3.6 10.8-3.6 15.3 0l188 154.8c2.7 2.3 4.3 5.7 4.3 9.3zm83.6-60.9L488 182.9V44.4c0-6.6-5.4-12-12-12h-56c-6.6 0-12 5.4-12 12V117l-89.5-73.7c-17.7-14.6-43.3-14.6-61 0L4.4 251.8c-5.1 4.2-5.8 11.8-1.6 16.9l25.5 31c4.2 5.1 11.8 5.8 16.9 1.6l235.2-193.7c4.4-3.6 10.8-3.6 15.3 0l235.2 193.7c5.1 4.2 12.7 3.5 16.9-1.6l25.5-31c4.2-5.2 3.4-12.7-1.7-16.9z',
          ],
        };

        /***/
      },
      /* 17 */
      /***/ function(module, exports) {
        module.exports = {
          prefix: 'fas',
          iconName: 'chevron-up',
          icon: [
            448,
            512,
            [],
            'f077',
            'M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z',
          ],
        };

        /***/
      },
      /* 18 */
      /***/ function(module, exports) {
        module.exports = {
          prefix: 'fas',
          iconName: 'chevron-down',
          icon: [
            448,
            512,
            [],
            'f078',
            'M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z',
          ],
        };

        /***/
      },
      /* 19 */
      /***/ function(module, exports) {
        module.exports = {
          prefix: 'fas',
          iconName: 'chevron-left',
          icon: [
            320,
            512,
            [],
            'f053',
            'M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z',
          ],
        };

        /***/
      },
      /* 20 */
      /***/ function(module, exports) {
        module.exports = {
          prefix: 'fas',
          iconName: 'chevron-right',
          icon: [
            320,
            512,
            [],
            'f054',
            'M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z',
          ],
        };

        /***/
      },
      /* 21 */
      /***/ function(module, exports) {
        module.exports = {
          prefix: 'fas',
          iconName: 'search',
          icon: [
            512,
            512,
            [],
            'f002',
            'M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z',
          ],
        };

        /***/
      },
      /* 22 */
      /***/ function(module, exports) {
        module.exports = {
          prefix: 'far',
          iconName: 'calendar',
          icon: [
            448,
            512,
            [],
            'f133',
            'M400 64h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V160h352v298c0 3.3-2.7 6-6 6z',
          ],
        };

        /***/
      },
      /* 23 */
      /***/ function(module, exports) {
        module.exports = {
          prefix: 'far',
          iconName: 'calendar-alt',
          icon: [
            448,
            512,
            [],
            'f073',
            'M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z',
          ],
        };

        /***/
      },
      /* 24 */
      /***/ function(module, exports) {
        module.exports = {
          prefix: 'fas',
          iconName: 'tags',
          icon: [
            640,
            512,
            [],
            'f02c',
            'M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882z',
          ],
        };

        /***/
      },
      /* 25 */
      /***/ function(module, exports) {
        module.exports = {
          prefix: 'fas',
          iconName: 'folder-open',
          icon: [
            576,
            512,
            [],
            'f07c',
            'M572.694 292.093L500.27 416.248A63.997 63.997 0 0 1 444.989 448H45.025c-18.523 0-30.064-20.093-20.731-36.093l72.424-124.155A64 64 0 0 1 152 256h399.964c18.523 0 30.064 20.093 20.73 36.093zM152 224h328v-48c0-26.51-21.49-48-48-48H272l-64-64H48C21.49 64 0 85.49 0 112v278.046l69.077-118.418C86.214 242.25 117.989 224 152 224z',
          ],
        };

        /***/
      },
      /* 26 */
      /***/ function(module, exports) {
        module.exports = {
          prefix: 'fas',
          iconName: 'filter',
          icon: [
            512,
            512,
            [],
            'f0b0',
            'M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z',
          ],
        };

        /***/
      },
      /* 27 */
      /***/ function(module, exports) {
        module.exports = {
          prefix: 'fas',
          iconName: 'star',
          icon: [
            576,
            512,
            [],
            'f005',
            'M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z',
          ],
        };

        /***/
      },
      /* 28 */
      /***/ function(module, exports) {
        module.exports = {
          prefix: 'fas',
          iconName: 'bars',
          icon: [
            448,
            512,
            [],
            'f0c9',
            'M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z',
          ],
        };

        /***/
      },
      /* 29 */
      /***/ function(module, exports) {
        module.exports = {
          prefix: 'fas',
          iconName: 'times',
          icon: [
            352,
            512,
            [],
            'f00d',
            'M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z',
          ],
        };

        /***/
      },
      /* 30 */
      /***/ function(module, exports) {
        module.exports = {
          prefix: 'fas',
          iconName: 'print',
          icon: [
            512,
            512,
            [],
            'f02f',
            'M464 192h-16V81.941a24 24 0 0 0-7.029-16.97L383.029 7.029A24 24 0 0 0 366.059 0H88C74.745 0 64 10.745 64 24v168H48c-26.51 0-48 21.49-48 48v132c0 6.627 5.373 12 12 12h52v104c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V384h52c6.627 0 12-5.373 12-12V240c0-26.51-21.49-48-48-48zm-80 256H128v-96h256v96zM128 224V64h192v40c0 13.2 10.8 24 24 24h40v96H128zm304 72c-13.254 0-24-10.746-24-24s10.746-24 24-24 24 10.746 24 24-10.746 24-24 24z',
          ],
        };

        /***/
      },
      /* 31 */
      /***/ function(module, exports) {
        module.exports = {
          prefix: 'fas',
          iconName: 'sort-alpha-down',
          icon: [
            448,
            512,
            [],
            'f15d',
            'M187.298 395.314l-79.984 80.002c-6.248 6.247-16.383 6.245-22.627 0L4.705 395.314C-5.365 385.244 1.807 368 16.019 368H64V48c0-8.837 7.163-16 16-16h32c8.837 0 16 7.163 16 16v320h47.984c14.241 0 21.363 17.264 11.314 27.314zm119.075-180.007A12 12 0 0 1 294.838 224h-35.717c-8.22 0-14.007-8.078-11.362-15.861l57.096-168A12 12 0 0 1 316.217 32h39.566c5.139 0 9.708 3.273 11.362 8.139l57.096 168C426.886 215.922 421.1 224 412.879 224h-35.735a12 12 0 0 1-11.515-8.622l-8.301-28.299h-42.863l-8.092 28.228zm22.857-78.697h13.367l-6.6-22.937-6.767 22.937zm12.575 287.323l67.451-95.698a12 12 0 0 0 2.192-6.913V300c0-6.627-5.373-12-12-12H274.522c-6.627 0-12 5.373-12 12v28.93c0 6.627 5.373 12 12 12h56.469c-.739.991-1.497 2.036-2.27 3.133l-67.203 95.205a12.001 12.001 0 0 0-2.196 6.92V468c0 6.627 5.373 12 12 12h129.355c6.627 0 12-5.373 12-12v-28.93c0-6.627-5.373-12-12-12h-61.146c.74-.993 1.5-2.039 2.274-3.137z',
          ],
        };

        /***/
      },
      /* 32 */
      /***/ function(module, exports) {
        module.exports = {
          prefix: 'fas',
          iconName: 'angle-right',
          icon: [
            256,
            512,
            [],
            'f105',
            'M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z',
          ],
        };

        /***/
      },
      /* 33 */
      /***/ function(module, exports) {
        module.exports = {
          prefix: 'fas',
          iconName: 'angle-up',
          icon: [
            320,
            512,
            [],
            'f106',
            'M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z',
          ],
        };

        /***/
      },
      /* 34 */
      /***/ function(module, exports) {
        module.exports = {
          prefix: 'fas',
          iconName: 'angle-down',
          icon: [
            320,
            512,
            [],
            'f107',
            'M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z',
          ],
        };

        /***/
      },
      /* 35 */
      /***/ function(module, exports) {
        module.exports = {
          prefix: 'fas',
          iconName: 'list-ul',
          icon: [
            512,
            512,
            [],
            'f0ca',
            'M96 96c0 26.51-21.49 48-48 48S0 122.51 0 96s21.49-48 48-48 48 21.49 48 48zM48 208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm0 160c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm96-236h352c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z',
          ],
        };

        /***/
      },
      /* 36 */
      /***/ function(module, exports) {
        module.exports = {
          prefix: 'fas',
          iconName: 'circle',
          icon: [
            512,
            512,
            [],
            'f111',
            'M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z',
          ],
        };

        /***/
      },
      /* 37 */
      /***/ function(module, exports) {
        module.exports = {
          prefix: 'fas',
          iconName: 'crosshairs',
          icon: [
            512,
            512,
            [],
            'f05b',
            'M500 224h-30.364C455.724 130.325 381.675 56.276 288 42.364V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v30.364C130.325 56.276 56.276 130.325 42.364 224H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h30.364C56.276 381.675 130.325 455.724 224 469.636V500c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-30.364C381.675 455.724 455.724 381.675 469.636 288H500c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12zM288 404.634V364c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40.634C165.826 392.232 119.783 346.243 107.366 288H148c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-40.634C119.768 165.826 165.757 119.783 224 107.366V148c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40.634C346.174 119.768 392.217 165.757 404.634 224H364c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40.634C392.232 346.174 346.243 392.217 288 404.634zM288 256c0 17.673-14.327 32-32 32s-32-14.327-32-32c0-17.673 14.327-32 32-32s32 14.327 32 32z',
          ],
        };

        /***/
      },
      /* 38 */
      /***/ function(module, exports) {
        module.exports = {
          prefix: 'far',
          iconName: 'envelope',
          icon: [
            512,
            512,
            [],
            'f0e0',
            'M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z',
          ],
        };

        /***/
      },
      /* 39 */
      /***/ function(module, exports) {
        module.exports = {
          prefix: 'fas',
          iconName: 'download',
          icon: [
            512,
            512,
            [],
            'f019',
            'M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z',
          ],
        };

        /***/
      },
      /******/
    ]
  );
});
require(['fa_rt'], function(fa_rt) {
  var init = fa_rt.init;
  var timeout = setTimeout(function() {
    document.removeEventListener('rtIconsLoaded', initIcons);
    init();
  }, 1000);

  function initIcons() {
    if (timeout) {
      clearTimeout(timeout);
    }

    init();
  }

  document.addEventListener('rtIconsLoaded', initIcons, false);
});

define('js/src/icons.js', function() {});

//# sourceMappingURL=rt-icons.js.map
