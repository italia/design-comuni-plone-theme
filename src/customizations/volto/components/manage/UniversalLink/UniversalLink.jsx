/*
 * UniversalLink
 * @module components/UniversalLink
 *
 * CUSTOMIZATIONS:
 * - aggiunto icona per link esterni
 * - aggiunto title informativo per link esterni
 * - aggiunta la dimensione del file se il link punta a un file (enhanced_link_infos)
 * - aggiunto il parametro hideFileFormat per nascondere il formato del file dall'enhance link
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useIntl, defineMessages } from 'react-intl';
import { HashLink as Link } from 'react-router-hash-link';
import { useSelector } from 'react-redux';
import {
  flattenToAppURL,
  isInternalURL,
  URLUtils,
} from '@plone/volto/helpers/Url/Url';
import { matchPath } from 'react-router';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { EnhanceLink } from 'design-comuni-plone-theme/helpers';
import cx from 'classnames';
import config from '@plone/volto/registry';

const messages = defineMessages({
  opensInNewTab: {
    id: 'opensInNewTab',
    defaultMessage: 'Apre in un nuovo tab',
  },
});
const UniversalLink = ({
  href,
  item = null,
  openLinkInNewTab,
  download = false,
  children,
  className = null,
  title = null,
  overrideMarkSpecialLinks = false,
  hideFileFormat = false,
  ...props
}) => {
  let translations = {
    opensInNewTab: {
      defaultMessage: messages.opensInNewTab.defaultMessage,
    },
  };
  //questo perchè il provider di intl non è sempre definito, ad esempio in slate_wysiwyg_box (Slate RichTextWidget)
  let intl = null;
  try {
    intl = useIntl();
    Object.keys(translations).forEach(
      (k) => (translations[k].message = intl.formatMessage(messages[k])),
    );
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('Cannot use intl here. View default messages.', e);
  }
  const token = useSelector((state) => state.userSession?.token);
  const { openExternalLinkInNewTab } = config.settings;

  let url = href;
  let enhanced_link_infos = null;

  if (!href && item) {
    if (!item['@id']) {
      // eslint-disable-next-line no-console
      console.error(
        'Invalid item passed to UniversalLink',
        item,
        props,
        children,
      );
      url = '#';
    } else {
      //case: generic item
      url = flattenToAppURL(item['@id']);

      //case: item like a Link
      let remoteUrl = item.remoteUrl || item.getRemoteUrl;
      if (!token && remoteUrl) {
        url = remoteUrl;
      }

      //case: item of type 'File'
      if (
        !token &&
        config.settings.downloadableObjects.includes(item['@type'])
      ) {
        url = `${url}/@@download/file`;
      }

      if (
        !token &&
        config.settings.viewableInBrowserObjects.includes(item['@type'])
      ) {
        url = `${url}/@@display-file/file`;
      }
    }
  }

  if (item && item['@id']) {
    /*enhance link*/
    if (item && item.enhanced_links_enabled) {
      enhanced_link_infos = { ...item };
      if (!enhanced_link_infos.filename) {
        enhanced_link_infos.filename = item['@id'];
      }
    }
  }

  const isBlacklisted =
    (config.settings.externalRoutes ?? []).find((route) =>
      matchPath(flattenToAppURL(url), route.match),
    )?.length > 0;
  const isExternal = !isInternalURL(url) || isBlacklisted;
  const isDownload = (!isExternal && url.includes('@@download')) || download;
  const isDisplayFile =
    (!isExternal && url.includes('@@display-file')) || false;

  const checkedURL = URLUtils.checkAndNormalizeUrl(url);
  url = checkedURL.url;

  let aria_label = props['aria-label'] ?? item?.title ?? null;
  let enhanced_link = null;
  let extended_children = <></>;

  if (enhanced_link_infos) {
    enhanced_link = EnhanceLink({ enhanced_link_infos, aria_label });
    extended_children = enhanced_link.children;
    aria_label = enhanced_link.aria_label;
  }
  const showExternalIcon =
    !overrideMarkSpecialLinks &&
    config.settings.siteProperties.markSpecialLinks;
  let tag = (
    <Link
      to={flattenToAppURL(url)}
      target={openLinkInNewTab ?? false ? '_blank' : null}
      title={title}
      className={className}
      smooth={config.settings.hashLinkSmoothScroll}
      {...props}
      aria-label={aria_label}
    >
      {children}
      {extended_children}
    </Link>
  );

  if (isExternal) {
    const openInNewTab =
      openLinkInNewTab === null || openLinkInNewTab === undefined
        ? openExternalLinkInNewTab
        : openLinkInNewTab;

    tag = (
      <a
        href={url}
        title={`${title ? title + ' - ' : ''}${
          translations.opensInNewTab.message ??
          translations.opensInNewTab.defaultMessage
        }`}
        target={
          !checkedURL.isMail && !checkedURL.isTelephone && openInNewTab
            ? '_blank'
            : null
        }
        rel="noopener noreferrer"
        className={cx(className, {
          'with-external-link-icon': showExternalIcon,
        })}
        {...props}
        aria-label={aria_label}
      >
        {children}
        {showExternalIcon && (
          <Icon
            icon="it-external-link"
            title={`${title ? title + ' - ' : ''}${intl?.formatMessage({
              id: 'opensInNewTab',
            })}`}
            size="xs"
            className="ms-1 align-sub external-link"
          />
        )}
      </a>
    );
  } else if (isDownload) {
    tag = (
      <a
        href={flattenToAppURL(url)}
        download
        title={title}
        className={className}
        {...props}
        aria-label={aria_label}
      >
        {children}
        {extended_children}
      </a>
    );
  } else if (isDisplayFile) {
    tag = (
      <a
        href={flattenToAppURL(url)}
        title={title}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
        aria-label={aria_label}
      >
        {children}
        {extended_children}
      </a>
    );
  }
  return tag;
};

UniversalLink.propTypes = {
  href: PropTypes.string,
  openLinkInNewTab: PropTypes.bool,
  download: PropTypes.bool,
  className: PropTypes.string,
  title: PropTypes.string,
  item: PropTypes.shape({
    '@id': PropTypes.string.isRequired,
    remoteUrl: PropTypes.string, //of plone @type 'Link'
  }),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default UniversalLink;
