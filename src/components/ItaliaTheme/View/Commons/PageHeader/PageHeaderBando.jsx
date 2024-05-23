import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';

import { BandoStatus } from 'design-comuni-plone-theme/components/ItaliaTheme/View';

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
                title={`${intl.formatMessage(messages.bando)} ${
                  content.bando_state[1]
                }`}
              />
              {intl.formatMessage(messages.bando)}{' '}
              <BandoStatus content={content} />
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
