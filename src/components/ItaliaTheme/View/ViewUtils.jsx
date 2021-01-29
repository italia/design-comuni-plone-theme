import React from 'react';
import { IntlProvider } from 'react-intl';
import { renderToString } from 'react-dom/server';

export const readingTime = (title, description, htmlBody) => {
  const body = htmlBody.current.textContent;
  const text = `${title} ${description} ${body}`;
  const wordsPerMinute = 200;
  let plain_text = text.replace(/<[^>]*>/g, '');
  let wordsCount = plain_text.split(' ').length;
  return wordsCount > 0 ? Math.ceil(wordsCount / wordsPerMinute) : 0;
};

export const getHTMLString = (content, locale) =>
  renderToString(<IntlProvider locale={locale}>{content}</IntlProvider>);
