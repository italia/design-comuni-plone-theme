require(['fa_rt'], function(fa_rt) {
  if (document.addEventListener) {
    document.addEventListener(
      'rtIconsLoaded',
      function() {
        fa_rt.init();
      },
      false
    );
  } else if (document.attachEvent) {
    document.attachEvent('rtIconsLoaded', function() {
      fa_rt.init();
    });
  }
});
