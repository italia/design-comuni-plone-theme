import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import moment from 'moment/min/moment-with-locales';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { Icon } from '@italia/components/ItaliaTheme';

/**
 * PageHeaderBando view component class.
 * @function PageHeaderBando
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */

const messages = defineMessages({
  bando: {
    id: 'Bando',
    defaultMessage: 'Bando',
  },
  open: {
    id: 'bando_open',
    defaultMessage: 'attivo',
  },
  closed: {
    id: 'bando_closed',
    defaultMessage: 'scaduto',
  },
  inProgress: {
    id: 'bando_inProgress',
    defaultMessage: 'in corso',
  },
});

const PageHeaderBando = ({ content }) => {
  const intl = useIntl();
  moment.locale(intl.locale);

  return content['@type'] === 'Bando' ? (
    <>
      {content?.bando_state && (
        <div
          className={cx(
            'genericcard card card-teaser shadow p-3 mt-3 rounded bando_state',
            content.bando_state[0],
          )}
        >
          <div className="card-body">
            <div className="card-text">
              <Icon
                className={undefined}
                color=""
                icon={
                  {
                    open: 'it-check-circle',
                    closed: 'it-error',
                    inProgress: 'it-info-circle',
                  }[content.bando_state[0]]
                }
                padding={false}
                size=""
              />
              {intl.formatMessage(messages.bando)}{' '}
              {intl.formatMessage(messages[content.bando_state[0]])}
            </div>
          </div>
        </div>
      )}
    </>
  ) : null;
};
export default PageHeaderBando;

PageHeaderBando.propTypes = {
  params: PropTypes.shape({
    content: PropTypes.object,
    readingtime: PropTypes.string,
    showreadingtime: PropTypes.bool,
    imageinheader: PropTypes.bool,
    imageinheader_field: PropTypes.string,
    showdates: PropTypes.bool,
    showtassonomiaargomenti: PropTypes.bool,
  }),
};
