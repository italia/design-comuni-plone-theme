import { defineMessages, useIntl } from 'react-intl';
import { UniversalLink } from '@plone/volto/components';

const PageHeaderLinkServizio = ({ content }) => {
  const intl = useIntl();

  return content['@type'] === 'Servizio' &&
    content.canale_digitale_link &&
    !content.stato_servizio ? (
    <div className="mb-4">
      <p className="canale-digitale">
        <UniversalLink
          className="btn btn-primary btn-lg"
          href={content.canale_digitale_link}
          data-element="service-online-access"
        >
          {intl.formatMessage(messages.canale_digitale_link)}
        </UniversalLink>
      </p>
    </div>
  ) : null;
};

export default PageHeaderLinkServizio;

const messages = defineMessages({
  canale_digitale_link: {
    id: 'servizio_canale_digitale_link',
    defaultMessage: 'Accedi al servizio',
  },
});
