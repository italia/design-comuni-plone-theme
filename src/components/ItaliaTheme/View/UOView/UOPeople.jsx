import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { flattenToAppURL } from '@plone/volto/helpers';
import { Chip, ChipLabel } from 'design-react-kit/dist/design-react-kit';

const messages = defineMessages({
  persone_struttura: {
    id: 'persone_struttura',
    defaultMessage: 'Persone',
  },
});

const UOPeople = ({ content }) => {
  const intl = useIntl();
  // create object Ruolo: Persone
  let roles = content?.persone_struttura?.reduce((r, a) => {
    const role = a.ruolo ?? '';
    r[role] = r[role] || [];
    r[role].push(a);
    return r;
  }, Object.create(null));

  return content?.persone_struttura?.length > 0 ? (
    <article
      id="persone-struttura"
      className="it-page-section anchor-offset mt-5"
      aria-labelledby="header-persone-struttura"
    >
      <h4 id="header-persone-struttura">
        {intl.formatMessage(messages.persone_struttura)}
      </h4>
      {Object.keys(roles).map((role, _i) => {
        return (
          <div className="ruolo-persone-struttura">
            {role?.length > 0 && <h5>{role}: </h5>}
            {roles[role]
              .sort((a, b) => (a.title > b.title ? 1 : -1))
              .map((item) => (
                <Link
                  to={flattenToAppURL(item['@id'])}
                  key={item['@id']}
                  title={item.title}
                  className="text-decoration-none mr-2"
                >
                  <Chip
                    color="primary"
                    disabled={false}
                    large={false}
                    simple
                    tag="div"
                  >
                    <ChipLabel tag="span">{item.title}</ChipLabel>
                  </Chip>
                </Link>
              ))}
          </div>
        );
      })}
    </article>
  ) : (
    <></>
  );
};

export default UOPeople;
