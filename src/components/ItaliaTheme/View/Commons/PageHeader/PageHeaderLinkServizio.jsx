import { defineMessages, useIntl } from 'react-intl';
import { UniversalLink } from '@plone/volto/components';

const PageHeaderLinkServizio = ({ content }) => {
  const intl = useIntl();

  return (
    content['@type'] === 'Servizio' &&
    content.canale_digitale_link &&
    !content.stato_servizio && (
      <div className="font-serif mb-4">
        <p className="draftjs-buttons">
          <UniversalLink href={content.canale_digitale_link}>
            {intl.formatMessage(messages.canale_digitale_link)}
          </UniversalLink>
        </p>
      </div>
    )
  );
};

export default PageHeaderLinkServizio;

const messages = defineMessages({
  canale_digitale_link: {
    id: 'servizio_canale_digitale_link',
    defaultMessage: 'Richiedi iscrizione online',
  },
});
