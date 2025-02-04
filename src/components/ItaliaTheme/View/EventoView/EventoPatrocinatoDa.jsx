import { defineMessages, useIntl } from 'react-intl';
import { Card, CardBody } from 'design-react-kit';

import {
  richTextHasContent,
  RichText,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  patrocinato_da: {
    id: 'patrocinato_da',
    defaultMessage: 'Patrocinato da',
  },
});

const EventoPatrocinatoDa = ({ content }) => {
  const intl = useIntl();
  return richTextHasContent(content?.patrocinato_da) ? (
    <div className="mb-5">
      <h3 className="mt-4 patrocinato-da h5">
        {intl.formatMessage(messages.patrocinato_da)}
      </h3>
      <Card
        className="card card-teaser rounded shadow mt-3"
        noWrapper={true}
        tag="div"
      >
        <CardBody tag="div" className={'card-body pe-3'}>
          <div className="mb-5">
            <RichText data={content?.patrocinato_da} />
          </div>
        </CardBody>
      </Card>
    </div>
  ) : null;
};

export default EventoPatrocinatoDa;
