import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';

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
  scheduled: {
    id: 'bando_scheduled',
    defaultMessage: 'programmato',
  },
});

const PageHeaderBando = ({ content }) => {
  const intl = useIntl();

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
                className="me-2"
                color=""
                icon={
                  {
                    open: 'it-check-circle',
                    closed: 'it-error',
                    inProgress: 'it-info-circle',
                    scheduled: 'it-calendar',
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
