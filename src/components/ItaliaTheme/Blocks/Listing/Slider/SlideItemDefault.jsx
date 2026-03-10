import React from 'react';
import { defineMessages } from 'react-intl';
import { ConditionalLink } from '@plone/volto/components';
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
  const isImage = item['@type'] === 'Image';
  return (
    <React.Fragment>
      {image ? (
        <figure className="img-wrapper">{image}</figure>
      ) : (
        <div className="img-placeholder"></div>
      )}
      {show_image_title && (
        <div className="slide-title">
          <ConditionalLink
            /* Se l'elemento è di tipo Image, non passiamo l'oggetto item per disabilitare il link mantenendo l'uso di UniversalLink */
            item={item}
            condition={!isImage}
            tabIndex={0}
            data-slide={index}
            className={'slide-link no-external-if-link'}
          >
            {full_width ? (
              <Container>
                {item.title}{' '}
                {!isImage && (
                  <Icon
                    icon="arrow-right"
                    key="arrow-right-fw"
                    title={intl.formatMessage(messages.openLink)}
                  />
                )}
              </Container>
            ) : (
              <>
                {item.title}{' '}
                {!isImage && (
                  <Icon
                    icon="arrow-right"
                    key="arrow-right"
                    title={intl.formatMessage(messages.openLink)}
                  />
                )}
              </>
            )}
          </ConditionalLink>
        </div>
      )}
    </React.Fragment>
  );
};

export default SlideItemDefault;
