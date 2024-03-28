import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { Card, CardBody, CardTitle } from 'design-react-kit';

import {
  richTextHasContent,
  RichTextSection,
  RichText,
  OfficeCard,
  ContactsCard,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  contatti: {
    id: 'contatti',
    defaultMessage: 'Contatti',
  },
  struttura_responsabile: {
    id: 'struttura_responsabile',
    defaultMessage: 'Struttura responsabile',
  },
});

const VenueContacts = ({ content }) => {
  const intl = useIntl();

  return content?.contact_info?.length > 0 ||
    content?.struttura_responsabile_correlati?.length > 0 ||
    richTextHasContent(content?.struttura_responsabile) ? (
    <>
      <RichTextSection
        tag_id="contatti"
        title={intl.formatMessage(messages.contatti)}
      >
        {content?.contact_info?.length > 0 &&
          content.contact_info.map((contact) => (
            <ContactsCard
              contact={contact}
              key={contact['@id']}
              show_title={false}
            />
          ))}
        {/*
        STRUTTURE RESPONSABILI
        Se è presente una struttura_responsabile_correlati metto quella altrimenti metto una card con i campi singoli, se presenti
      */}
      </RichTextSection>
      {(content?.struttura_responsabile_correlati?.length > 0 ||
        richTextHasContent(content?.struttura_responsabile)) && (
        <RichTextSection
          tag_id="struttura_responsabile"
          title={intl.formatMessage(messages.struttura_responsabile)}
        >
          {content?.struttura_responsabile_correlati?.length > 0 ? (
            //STRUTTURE RESPONSABILI CORRELATE
            <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
              {content?.struttura_responsabile_correlati?.map((item, i) => (
                <OfficeCard key={item['@id']} office={item} />
              ))}
            </div>
          ) : (
            //STRUTTURA RESPONSABILE
            <>
              {richTextHasContent(content.struttura_responsabile) && (
                <Card className="genericcard card card-teaser shadow p-4 mt-3 rounded">
                  <CardBody>
                    {richTextHasContent(content.struttura_responsabile) && (
                      <CardTitle>
                        <h5 className="card-title">
                          <RichText data={content.struttura_responsabile} />
                        </h5>
                      </CardTitle>
                    )}
                  </CardBody>
                </Card>
              )}
            </>
          )}
        </RichTextSection>
      )}
    </>
  ) : null;
};

export default VenueContacts;
