/* CUSTOMIZATIONS:
  - Use with more plone.app.querystring.date operations
*/
import { defineMessages } from 'react-intl';
import { useEffect } from 'react';

export const NONVALUE_OPERATIONS = new Set([
  'plone.app.querystring.operation.boolean.isFalse',
  'plone.app.querystring.operation.boolean.isTrue',
]);

export const DATE_OPERATIONS = new Set([
  'plone.app.querystring.operation.date.between',
  'plone.app.querystring.operation.date.lessThan',
  'plone.app.querystring.operation.date.largerThan',
]);

export const hasNonValueOperation = (ops) => {
  return ops.filter((x) => NONVALUE_OPERATIONS.has(x)).length > 0;
};

export const hasDateOperation = (ops) => {
  return ops.filter((x) => DATE_OPERATIONS.has(x)).length > 0;
};

export const getBackgroundClass = (show_block_bg, bg_color) => {
  if (!show_block_bg) return '';

  let background_color = bg_color ? `bg-${bg_color}` : '';

  return `bg-light py-5 ${background_color}`;
};

export const useClickOutside = (ref, callback) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};
