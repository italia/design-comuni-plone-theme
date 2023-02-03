import { defineMessages, useIntl } from 'react-intl';
import { viewDate } from 'design-comuni-plone-theme/helpers';

export default function PageHeaderDocumento({ content }) {
  const intl = useIntl();

  if (
    content['@type'] !== 'Documento' ||
    !content.protocollo ||
    !content.data_protocollo
  ) {
    return null;
  }

  return (
    <p className="h5">
      {intl.formatMessage(messages.protocollo, {
        protocollo: content.protocollo,
        data_protocollo: viewDate(
          intl.locale,
          content.data_protocollo,
          'DD MMMM Y',
        ),
      })}
    </p>
  );
}

const messages = defineMessages({
  protocollo: {
    id: 'documento_header_protocollo',
    defaultMessage: 'Protocollo {protocollo} del {data_protocollo}',
  },
});
