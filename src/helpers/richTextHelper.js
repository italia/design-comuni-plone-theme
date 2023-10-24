import { serializeNodesToText } from '@plone/volto-slate/editor/render';
/*
  Used to verify if slate text blocks are empty
*/
export const checkRichTextHasContent = (text) => {
  if (text?.[0]?.children) {
    return serializeNodesToText(text?.[0]?.children || [])?.length > 0;
  }
  return false;
};
