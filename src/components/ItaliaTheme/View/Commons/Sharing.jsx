import { defineMessages, useIntl } from 'react-intl';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  LinkList,
  LinkListItem,
  Icon,
} from 'design-react-kit/dist/design-react-kit';

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

const Sharing = ({ url, title }) => {
  const intl = useIntl();
  let socials = [
    {
      id: 'facebook',
      title: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      icon: 'it-facebook',
    },
    {
      id: 'twitter',
      title: 'Twitter',
      url: `https://twitter.com/intent/tweet?url=${url}`,
      icon: 'it-twitter',
    },
    {
      id: 'linkedin',
      title: 'Linkedin',
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`,
      icon: 'it-linkedin',
    },
    {
      id: 'whatsapp',
      title: 'Whatsapp',
      url: `https://api.whatsapp.com/send?phone=&text=${url}`,
      icon: 'it-whatsapp',
    },
  ];

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
export default Sharing;

Sharing.propTypes = {
  params: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
  }),
};
