require(['jquery', 'ellipsed'], function($, ellipsed) {
  'use strict';

  var ellipsis = ellipsed.ellipsis;

  // adding some <i> via js for fontawesome icons
  var icons = [
    {
      selector: '#breadcrumbs-home a',
      icon: 'fas fa-home',
      prepend: true,
    },
    {
      selector: '#document-toc .portletHeader',
      icon: 'fas fa-list-ul',
      prepend: true,
    },
    {
      selector: '#parent-fieldname-text.pat-autotoc .autotoc-nav a',
      icon: 'fas fa-chevron-right',
      prepend: true,
    },
    {
      selector:
        '.template-album_view .photoAlbumEntry.photoAlbumFolder .photoAlbumEntryTitle',
      icon: 'fas fa-folder-open',
      prepend: true,
    },
    {
      selector: '.footer-social .fb',
      icon: 'fab fa-facebook-f',
      prepend: true,
    },
    {
      selector: '.footer-social .ig',
      icon: 'fab fa-instagram',
      prepend: true,
    },
    {
      selector: '.footer-social .tw',
      icon: 'fab fa-twitter',
      prepend: true,
    },
    {
      selector: '.footer-social .tg',
      icon: 'fab fa-telegram',
      prepend: true,
    },
    {
      selector: '.footer-social .yt',
      icon: 'fab fa-youtube',
      prepend: true,
    },
    {
      selector: '.footer-social .in',
      icon: 'fab fa-linkedin-in',
      prepend: true,
    },
    {
      selector: '.footer-social .gp',
      icon: 'fab fa-google-plus-g',
      prepend: true,
    },
    {
      selector: '.footer-social .pi',
      icon: 'fab fa-pinterest',
      prepend: true,
    },
    {
      selector: '.footer-social .po',
      icon: 'fab fa-get-pocket',
      prepend: true,
    },
    {
      selector: '.footer-social .rss',
      icon: 'fas fa-rss',
      prepend: true,
    },
    {
      selector:
        '.navigationTile a.navTreeFolderish:not(.navTreeCurrentNode):not(.navTreeItemInPath), .portletNavigationTree a.navTreeFolderish:not(.navTreeCurrentNode):not(.navTreeItemInPath)',
      icon: 'fas fa-angle-down',
      prepend: false,
    },
    {
      selector:
        '.navigationTile a.navTreeFolderish.navTreeCurrentNode, .navigationTile a.navTreeFolderish.navTreeItemInPath, .portletNavigationTree a.navTreeFolderish.navTreeCurrentNode, .portletNavigationTree a.navTreeFolderish.navTreeItemInPath',
      icon: 'fas fa-angle-up',
      prepend: false,
    },
    {
      selector: 'button#search-filter-toggle',
      icon: 'fas fa-filter',
      prepend: true,
    },
    {
      selector: '#sorting-options a[data-sort="Date"]',
      icon: 'far fa-calendar-alt',
      prepend: true,
    },
    {
      selector: '#sorting-options a[data-sort="sortable_title"]',
      icon: 'fas fa-sort-alpha-down',
      prepend: true,
    },
    {
      selector:
        '#sorting-options a:not([data-sort="Date"]):not([data-sort="sortable_title"])',
      icon: 'fas fa-star',
      prepend: true,
    },
    {
      selector: '#categories-filed-under',
      icon: 'fas fa-tags',
      prepend: true,
    },
    {
      selector: '#portal-searchbox button.search-button',
      icon: 'fas fa-search',
      prepend: true,
    },
    {
      selector: '.documentActions #document-action-print a',
      icon: 'fas fa-print',
      prepend: true,
    },
  ];

  $(document).ready(function() {
    // init fontawesome icons
    icons.forEach(function(i) {
      var $el = $(i.selector);

      if ($el.length === 0) return;

      if (i.prepend) {
        $el.prepend('<i class="' + i.icon + '"></i>');
      } else {
        $el.append('<i class="' + i.icon + '"></i>');
      }
    });

    /*
     *  return-to-top arrow
     */
    $(window).scroll(function() {
      if ($(this).scrollTop() >= 50) {
        $('#return-to-top').fadeIn(200);
      } else {
        $('#return-to-top').fadeOut(200);
      }
    });

    $('#return-to-top').click(function() {
      $('body,html').animate(
        {
          scrollTop: 0,
        },
        500
      );
    });

    /*
     *  share button position
     */
    var $share = $('.share');
    if ($('.news-column').length) {
      $('.news-column').prepend($share);
      $share.addClass('share-visible');
    } else if ($('#portal-column-two').length) {
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
    $('#search-toggle').on('click', function() {
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
    $('button.plone-navbar-toggle').on('click', function() {
      $('#portal-mainnavigation').toggleClass('open');
    });

    $('#globalnav-close').click(function() {
      $('#portal-mainnavigation').removeClass('open');
    });

    /*
     * gestione click fuori per chiudere menu, ricerca e condividi
     */
    $(document).on('click', function(e) {
      if (
        !$(e.target).closest('#portal-searchbox').length &&
        !$(e.target).closest('button#search-toggle').length &&
        $(window).width() <= 991
      ) {
        $('#portal-searchbox').removeClass('open');
        $('#search-toggle').removeClass('open');
        $('body').removeClass('searchOpened');
      }

      if (!$(e.target).closest('.share').length) {
        $share.removeClass('open');
      }

      if (
        !$(e.target).closest('#portal-globalnav-wrapper').length &&
        !$(e.target).closest('button.plone-navbar-toggle').length &&
        $(window).width() <= 991
      ) {
        if (
          $('#portal-mainnavigation #portal-globalnav').length &&
          $('#portal-mainnavigation #portal-globalnav').hasClass('plone-nav')
        ) {
          $('#portal-mainnavigation').removeClass('open');
        }
      }
    });

    function callEllipsis() {
      ellipsis('.tile-collection .collectionItemDescription', 4, {
        responsive: true,
      });
      ellipsis('.news-highlight .news-description', 4, { responsive: true });
      ellipsis('.news-big-photo .news-description', 4, { responsive: true });
    }

    /*
     * On tiles loaded:
     * - gestito tabIndex news collection collapse
     * - multi lined ellipsis for news collection items
     */
    if ($('body').hasClass('userrole-anonymous')) {
      callEllipsis();
    } else {
      $('.tiles-management').on('rtTilesLoaded', function() {
        callEllipsis();
      });
    }

    $(document).on('patSliderInit', function(e) {
      $(e.originalEvent.detail)
        .find('.slick-dots')
        .attr('aria-hidden', true);
    });

    var isIE = /*@cc_on!@*/ false || !!document.documentMode;
    if (!isIE) {
      var iconsEvent = new Event('rtIconsLoaded');
      document.dispatchEvent(iconsEvent);
    }
  });
});
