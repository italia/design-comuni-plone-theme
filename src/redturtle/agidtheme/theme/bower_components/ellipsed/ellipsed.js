function ellipsed(selector, rows) {
  var elements = document.querySelectorAll(selector);

  for (var el of elements) {
    if (rows) {
      var splittedText = el.innerText.split(' ');
      var rowsWrapped = 0;
      var textBeforeWrap = '';

      el.innerText = '';
      var elHeight = window.getComputedStyle(el).height;

      for (var token of splittedText) {
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
