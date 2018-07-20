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
