import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';

import {
  RichText,
  RichTextArticle,
  richTextHasContent,
} from '@italia/components/ItaliaTheme/View';

const messages = defineMessages({
  link_siti_esterni: {
    id: 'link_siti_esterni',
    defaultMessage: 'Link utili',
  },
});

const ServizioSitiEsterni = ({ content, designReactKit }) => {
  const intl = useIntl();
  const { Card, CardBody } = designReactKit;
  return richTextHasContent(content.link_siti_esterni) ? (
    <RichTextArticle
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
    </RichTextArticle>
  ) : (
    <></>
  );
};

ServizioSitiEsterni.propTypes = {
  content: PropTypes.shape({
    link_siti_esterni: PropTypes.shape({
      data: PropTypes.string,
    }),
  }),
};
export default injectLazyLibs(['designReactKit'])(ServizioSitiEsterni);
