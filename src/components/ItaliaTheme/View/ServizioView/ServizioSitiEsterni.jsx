import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { Card, CardBody } from 'design-react-kit';
import {
  RichText,
  RichTextSection,
  richTextHasContent,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  link_siti_esterni: {
    id: 'link_siti_esterni',
    defaultMessage: 'Link utili',
  },
});

const ServizioSitiEsterni = ({ content }) => {
  const intl = useIntl();
  return richTextHasContent(content.link_siti_esterni) ? (
    <RichTextSection
      tag_id="link-esterni"
      title={intl.formatMessage(messages.link_siti_esterni)}
    >
      <Card
        className="card card-teaser shadow p-0 mt-3 rounded link-esterni"
        noWrapper={true}
        tag="div"
      >
        <CardBody tag="div">
          <RichText add_class="p-4 pt-0" content={content.link_siti_esterni} />
        </CardBody>
      </Card>
    </RichTextSection>
  ) : null;
};

ServizioSitiEsterni.propTypes = {
  content: PropTypes.shape({
    link_siti_esterni: PropTypes.shape({
      data: PropTypes.string,
    }),
  }),
};
export default ServizioSitiEsterni;
