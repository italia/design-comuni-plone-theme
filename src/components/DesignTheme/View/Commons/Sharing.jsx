import { defineMessages, useIntl } from 'react-intl';
import SVGShare from '@design/components/DesignTheme/View/Commons/assets/share.svg';
import { Image } from 'semantic-ui-react';
import React, { useState } from 'react';
import FacebookIcon from './assets/Facebook.svg';
import TwitterIcon from './assets/Twitter.svg';
import LinkedinIcon from './assets/Linkedin.svg';
import WhatsappIcon from './assets/Whatsapp.svg';

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  LinkList,
  LinkListItem,
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

const Sharing = props => {
  const intl = useIntl();
  const toggle = () => setDropdownOpen(prevState => !prevState);

  let socials = [
    {
      id: 'facebook',
      title: 'Facebook',
      url: 'https://www.facebook.com/sharer/sharer.php?u=' + props.url,
      icon: FacebookIcon,
    },
    {
      id: 'twitter',
      title: 'Twitter',
      url: 'https://twitter.com/intent/tweet?url=' + props.url,
      icon: TwitterIcon,
    },
    {
      id: 'linkedin',
      title: 'Linkedin',
      url:
        'https://www.linkedin.com/shareArticle?mini=true&url=' +
        props.url +
        '&title=' +
        props.title,
      icon: LinkedinIcon,
    },
    {
      id: 'whatsapp',
      title: 'Whatsapp',
      url: 'https://api.whatsapp.com/send?phone=&text=' + props.url,
      icon: WhatsappIcon,
    },
  ];
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <Dropdown className="d-inline" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle
        className={`btn btn-dropdown`}
        color=""
        tag={'button'}
        caret
      >
        <Image
          src={SVGShare}
          height={32}
          alt={intl.formatMessage(messages.share)}
          title={intl.formatMessage(messages.share)}
        />
        <small>{intl.formatMessage(messages.share)}</small>
      </DropdownToggle>
      <DropdownMenu>
        <LinkList>
          {socials.map((item, i) => (
            <LinkListItem href={item.url} key={item.id} target="_target">
              <Image
                src={item.icon}
                height={32}
                alt={item.title}
                title={item.title}
              />
              <span>{item.title}</span>
            </LinkListItem>
          ))}
        </LinkList>
      </DropdownMenu>
    </Dropdown>
  );
};
export default Sharing;
