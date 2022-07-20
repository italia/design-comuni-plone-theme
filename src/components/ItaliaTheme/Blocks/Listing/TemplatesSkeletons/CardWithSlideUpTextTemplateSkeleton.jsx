import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'design-react-kit/dist/design-react-kit';
import { UniversalLink } from '@plone/volto/components';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  vedi: {
    id: 'card_vedi',
    defaultMessage: 'Vedi',
  },
});

const CardWithSlideUpTextTemplateSkeleton = ({
  title,
  isEditMode,
  linkTitle,
  linkHref,
  show_description = true,
}) => {
  const intl = useIntl();

  return (
    <div className="card-slide-text-template">
      <Container>
        <div className="title">{title && <h2>{title}</h2>}</div>
        <div className="grid mb-3 mt-5">
          {[0, 1, 2].map((i) => {
            return (
              <UniversalLink href="#" className="listing-item box bg-img">
                <div className="bg-gradient"></div>
                <h3 className="title">{title}</h3>
                <div className="box-slide-up">
                  <p> </p>
                  {linkHref && (
                    <div className="read-more">
                      <div className="read-more justify-content-end my-4">
                        {intl.formatMessage(messages.vedi)}
                      </div>
                    </div>
                  )}
                </div>
              </UniversalLink>
            );
          })}
        </div>

        {linkHref && <div className="link-button text-center"></div>}
      </Container>
    </div>
  );
};

CardWithSlideUpTextTemplateSkeleton.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  isEditMode: PropTypes.bool,
  linkTitle: PropTypes.any,
  linkHrefs: PropTypes.any,
};

export default CardWithSlideUpTextTemplateSkeleton;
