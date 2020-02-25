import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import SVGShare from '@design/components/DesignTheme/View/Commons/share.svg';
import { Image } from 'semantic-ui-react';

/**
 * RichTextArticle view component class.
 * @function Sharing
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */

const messages = defineMessages({
  share: {
    id: 'share',
    defaultMessage: 'Condividi',
  },
  actions: {
    id: 'actions',
    defaultMessage: 'Vedi azioni',
  },
});

const Sharing = params => {
  const intl = useIntl();
  let socials = [
    {
      id: 'facebook',
      title: 'Facebook',
      url: 'https://www.facebook.com/sharer/sharer.php?u=',
    },
    {
      id: 'twitter',
      title: 'Twitter',
      url: 'https://twitter.com/home?status=https://www.gazzetta.it Test',
    },
    {
      id: 'linkedin',
      title: 'Linkedin',
      url:
        'https://www.linkedin.com/shareArticle?mini=true&url=https://www.gazzetta.it&title=&summary=Test&source=',
    },
    {
      id: 'whatsapp',
      title: 'Whatsapp',
      url: '',
    },
    {
      id: 'email',
      title: 'Email',
      url: 'mailto:info@example.com?&subject=${title}&body=${url}',
    },
  ];
  return (
    <div className="dropdown d-inline">
      <button
        className="btn btn-dropdown dropdown-toggle"
        type="button"
        id="shareActions"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="true"
      >
        <Image
          src={SVGShare}
          height={32}
          alt={intl.formatMessage(messages.share)}
          title={intl.formatMessage(messages.share)}
        />
        <small>Condividi</small>
      </button>
      <div className="dropdown-menu shadow-lg" aria-labelledby="shareActions">
        <div className="link-list-wrapper">
          <ul className="link-list">
            {socials.map((item, index) => (
              <li key={item.id}>
                <a className="list-item" href={item.url}>
                  ICON
                  <span>{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Sharing;
