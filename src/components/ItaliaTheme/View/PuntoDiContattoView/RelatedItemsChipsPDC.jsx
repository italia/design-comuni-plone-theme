import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { flattenToAppURL } from '@plone/volto/helpers';
import { Chip, ChipLabel } from 'design-react-kit';
import { pick } from 'lodash';

const messages = defineMessages({
  strutture_correlate: {
    id: 'strutture_correlate',
    defaultMessage: 'Strutture correlate',
  },
  servizi_correlati: {
    id: 'servizi_correlati',
    defaultMessage: 'Servizi correlati',
  },
  luoghi_correlati: {
    id: 'luoghi_correlati',
    defaultMessage: 'Luoghi correlati',
  },
  persone_correlate: {
    id: 'persone_correlate',
    defaultMessage: 'Persone correlate',
  },
});

const RelatedItemsChipsPDC = ({ content, fieldLists }) => {
  const intl = useIntl();
  const relatedCategories = pick(content, fieldLists);
  return Object.values(relatedCategories)?.some((v) => v.length > 0) ? (
    Object.keys(relatedCategories)?.map((key, i) => (
      <article
        id={key}
        className="it-page-section anchor-offset my-4"
        key={key}
      >
        <h4 id={`header-${key}`}>{intl.formatMessage(messages[key])}</h4>
        <div className={key} key={key + i}>
          {content?.[key]?.map((item, _i) => (
            <Link
              to={flattenToAppURL(item['@id'])}
              key={`${item['@id']}-${_i}`}
              title={item.title}
              className="text-decoration-none me-2"
            >
              <Chip
                color="primary"
                disabled={false}
                large={false}
                simple
                tag="div"
                key={_i}
              >
                <ChipLabel tag="span">{item.title}</ChipLabel>
              </Chip>
            </Link>
          ))}
        </div>
      </article>
    ))
  ) : (
    <></>
  );
};

export default RelatedItemsChipsPDC;
