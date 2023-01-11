export const GET_MODULISTICA_ITEMS = 'GET_MODULISTICA_ITEMS';
export const RESET_MODULISTICA_ITEMS = 'RESET_MODULISTICA_ITEMS';

export function getModulisticaItems(path) {
  return {
    type: GET_MODULISTICA_ITEMS,
    request: {
      op: 'get',
      path,
    },
  };
}

export function resetModulisticaItems() {
  return {
    type: RESET_MODULISTICA_ITEMS,
  };
}
