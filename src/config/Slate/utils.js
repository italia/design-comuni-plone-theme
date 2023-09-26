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
