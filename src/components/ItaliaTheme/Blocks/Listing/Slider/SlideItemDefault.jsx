import React from 'react';
import { defineMessages } from 'react-intl';
import { UniversalLink } from '@plone/volto/components';
import { Container } from 'design-react-kit';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';

const messages = defineMessages({
  openLink: {
    id: 'openLink',
    defaultMessage: 'Apri il link',
  },
});
const SlideItemDefault = ({
  item,
  index,
  image,
  show_image_title,
  full_width,
  intl,
  setUserAutoplay,
  userAutoplay,
  slider,
}) => {
  return (
    <React.Fragment>
      {image ? (
        <figure className="img-wrapper">{image}</figure>
      ) : (
        <div className="img-placeholder"></div>
      )}
      {show_image_title && (
        <div className="slide-title">
          <UniversalLink
            item={item}
            tabIndex={0}
            data-slide={index}
            className={'slide-link no-external-if-link'}
          >
            {full_width ? (
              <Container>
                {item.title}{' '}
                <Icon
                  icon="arrow-right"
                  key="arrow-right-fw"
                  title={intl.formatMessage(messages.openLink)}
                />
              </Container>
            ) : (
              <>
                {item.title}{' '}
                <Icon
                  icon="arrow-right"
                  key="arrow-right"
                  title={intl.formatMessage(messages.openLink)}
                />
              </>
            )}
          </UniversalLink>
        </div>
      )}
    </React.Fragment>
  );
};

export default SlideItemDefault;
