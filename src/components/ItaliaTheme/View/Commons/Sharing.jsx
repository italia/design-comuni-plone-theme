import { defineMessages, useIntl } from 'react-intl';
import React from 'react';
import PropTypes from 'prop-types';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';
import { toPublicURL } from '@plone/volto/helpers';
import { Icon } from '@italia/components/ItaliaTheme';

/**
 * Sharing view component class.
 * @function Sharing
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */

const messages = defineMessages({
  share: {
    id: 'share',
    defaultMessage: 'Condividi',
  },
});

const Sharing = ({ url, title, designReactKit }) => {
  const intl = useIntl();
  const publicUrl = toPublicURL(url);

  let socials = [
    {
      id: 'facebook',
      title: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${publicUrl}`,
      icon: 'it-facebook',
    },
    {
      id: 'twitter',
      title: 'Twitter',
      url: `https://twitter.com/intent/tweet?url=${publicUrl}`,
      icon: 'it-twitter',
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${publicUrl}&title=${publicUrl}`,
      icon: 'it-linkedin',
    },
    {
      id: 'whatsapp',
      title: 'Whatsapp',
      url: `https://api.whatsapp.com/send?phone=&text=${publicUrl}`,
      icon: 'it-whatsapp',
    },
    {
      id: 'telegram',
      title: 'Telegram',
      url: `https://t.me/share/url?url=${publicUrl}&text=${title}`,
      icon: 'telegram',
    },
  ];

  const {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    LinkList,
    LinkListItem,
  } = designReactKit;

  return (
    <UncontrolledDropdown className="d-inline page-sharing">
      <DropdownToggle
        className={`btn btn-dropdown`}
        color=""
        tag={'button'}
        caret
      >
        <Icon
          className={undefined}
          color=""
          icon="it-share"
          padding={false}
          size=""
          alt={intl.formatMessage(messages.share)}
          title={intl.formatMessage(messages.share)}
        />
        <small>{intl.formatMessage(messages.share)}</small>
      </DropdownToggle>
      <DropdownMenu>
        <LinkList>
          {socials.map((item, i) => (
            <LinkListItem href={item.url} key={item.id} target="_target">
              <Icon
                className={undefined}
                color=""
                icon={item.icon}
                padding={false}
                size=""
                alt={item.title}
                title={item.title}
              />
              <span>{item.title}</span>
            </LinkListItem>
          ))}
        </LinkList>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};
export default injectLazyLibs(['designReactKit'])(Sharing);

Sharing.propTypes = {
  params: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
  }),
};
