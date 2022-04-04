/*
  Used to verify that redraft text blocks are empty
*/
export const checkRedraftHasContent = (text) => {
  if (text) {
    let blocks = text.blocks.filter((block) => block?.text !== '');
    return blocks.length > 0 ? true : false;
  }
};
