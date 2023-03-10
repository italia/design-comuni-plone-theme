import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';

import {
  RichTextSection,
  richTextHasContent,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

export default function ServizioProcedure({ content }) {
  const intl = useIntl();

  return richTextHasContent(content.procedure_collegate) ? (
    <RichTextSection
      tag_id="procedure_collegate"
      title={intl.formatMessage(messages.servizio_procedure_collegate)}
      content={content.procedure_collegate}
      title_tag="h4"
    />
  ) : null;
}

ServizioProcedure.propTypes = {
  content: PropTypes.shape({
    procedure_collegate: PropTypes.shape({
      data: PropTypes.object,
    }),
  }),
};

const messages = defineMessages({
  servizio_procedure_collegate: {
    id: 'servizio_procedure_collegate',
    defaultMessage: "Procedure collegate all'esito",
  },
});
