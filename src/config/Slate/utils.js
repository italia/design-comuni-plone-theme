export const insertToolbarButtons = (buttons = [], insertAfter = '', slate) => {
  const insertAtToolbarButtons = slate.toolbarButtons.indexOf(insertAfter) + 1;
  slate.toolbarButtons = [
    ...slate.toolbarButtons.slice(0, insertAtToolbarButtons),
    ...buttons,
    ...slate.toolbarButtons.slice(insertAtToolbarButtons),
  ].filter((el, index, array) => {
    if (index > 0) {
      //rimuovo i separatori consecutivi nel caso se ne siano creati
      if (el === 'separator' && array[index - 1] === 'separator') return false;
    }
    return true;
  });

  const insertAtExpandedToolbarButtons =
    slate.toolbarButtons.indexOf(insertAfter) + 1;
  slate.expandedToolbarButtons = [
    ...slate.expandedToolbarButtons.slice(0, insertAtExpandedToolbarButtons),
    ...buttons,
    ...slate.expandedToolbarButtons.slice(insertAtExpandedToolbarButtons),
  ].filter((el, index, array) => {
    if (index > 0) {
      //rimuovo i separatori consecutivi nel caso se ne siano creati
      if (el === 'separator' && array[index - 1] === 'separator') return false;
    }
    return true;
  });

  //rimuovo doppi separator
};

export const getRichTextWidgetToolbarButtons = (config) => {
  const EXCLUDE_TOOLBAR_BUTTONS = ['textLarger', 'headings'];

  let toolbarButtons = (config.settings.slate?.toolbarButtons ?? [])
    .filter((b) => EXCLUDE_TOOLBAR_BUTTONS.indexOf(b) < 0)
    .filter(
      (e, index, array) =>
        !(
          e === 'separator' &&
          (index === 0 || array[index - 1] === 'separator')
        ), //rimuovi i separatori consecutivi e il primo elemento se è un separatore
    );

  return toolbarButtons;
};
