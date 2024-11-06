import React, { useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { renderToString } from 'react-dom/server';
import { SideMenu } from 'design-comuni-plone-theme/components/ItaliaTheme/View';
import config from '@plone/volto/registry';

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

//Hook per avere il reading time di una pagina
export const useReadingTime = (content, documentBody) => {
  const [readingtime, setReadingtime] = useState(0);

  useEffect(() => {
    if (documentBody.current) {
      if (__CLIENT__) {
        setReadingtime(
          readingTime(content.title, content.description, documentBody),
        );
      }
    }
  }, [content.description, content.title, documentBody]);

  return { readingtime, setReadingtime };
};

//Hook per avere i SideMenu elements di una pagina
export const useSideMenu = (content, documentBody) => {
  const [sideMenuElements, setSideMenuElements] = useState(null);
  const [observer, setObserver] = useState(null);
  const updateSideMenuOnLoadingBlocks =
    config.settings?.italiaThemeViewsConfig?.[content['@type']]
      ?.updateSideMenuOnLoadingBlocks ?? false;
  const SideMenuComponent =
    config.settings?.italiaThemeViewsConfig?.[content['@type']]?.sideMenu ??
    SideMenu;

  useEffect(() => {
    if (documentBody.current) {
      if (__CLIENT__) {
        setSideMenuElements(documentBody.current);
      }
    }
  }, [content.description, content.title, documentBody]);

  //observer is needed for loadable blocks like listing and rss, if you want to use their title's for SideMenu

  useEffect(() => {
    if (!updateSideMenuOnLoadingBlocks) return;

    if (!observer) {
      const obs = updateSideMenuOnLoadingBlocks
        ? new MutationObserver((mutationList) => {
            setSideMenuElements(documentBody.current);
          })
        : null;
      setObserver(obs);
    }
    if (observer) {
      observer.observe(documentBody.current, {
        childList: true,
        //subtree: true, //commentato, perchè a noi interessano solo i figli di primo livello. Con questo abilitato, se in pagina ci sono delle gallery si impalla il browser
      });
    }
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [observer, setObserver, documentBody, updateSideMenuOnLoadingBlocks]);

  return { sideMenuElements, setSideMenuElements, SideMenu: SideMenuComponent };
};
