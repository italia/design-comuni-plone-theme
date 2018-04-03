require(['fa'], function(fa) {
  fa.init();

  if (document.addEventListener) {
    document.addEventListener(
      'click',
      function() {
        fa.init();
      },
      false
    );
  } else if (document.attachEvent) {
    document.attachEvent('onclick', function() {
      fa.init();
    });
  }
});
