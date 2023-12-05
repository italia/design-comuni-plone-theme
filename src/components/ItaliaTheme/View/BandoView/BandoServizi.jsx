/*
 * SubComponent of BandoView
 */
import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import {
  RichTextSection,
  GenericCard,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  servizi_correlati: {
    id: 'servizi_collegati',
    defaultMessage: 'Servizi collegati',
  },
});

const BandoServizi = ({ content }) => {
  const intl = useIntl();
  return content?.servizi_correlati?.length > 0 ? (
    <RichTextSection
      tag_id="servizi_collegati"
      title={intl.formatMessage(messages.servizi_correlati)}
    >
      <div className="mb-5 mt-3">
        <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
          {content?.servizi_correlati?.map((item, i) => (
            <GenericCard
              key={item['@id']}
              index={item['@id']}
              item={item}
              showimage={false}
              showDescription={true}
            />
          ))}
        </div>
      </div>
    </RichTextSection>
  ) : (
    <></>
  );
};

BandoServizi.propTypes = {
  content: PropTypes.shape({
    servizi_correlati: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    }),
  }).isRequired,
};
export default BandoServizi;
