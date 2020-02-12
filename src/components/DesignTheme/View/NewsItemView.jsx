/**
 * NewsItemView view component.
 * @module components/theme/View/NewsItemView
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from '@plone/volto/helpers';
import { Container, Image } from 'semantic-ui-react';
import moment from 'moment';
import { defineMessages, useIntl } from 'react-intl';
import { flattenToAppURL } from '@plone/volto/helpers';

const messages = defineMessages({
  share: {
    id: 'share',
    defaultMessage: 'Condividi',
  },
  actions: {
    id: 'actions',
    defaultMessage: 'Vedi azioni',
  },
  topics: {
    id: 'topics',
    defaultMessage: 'Argomenti',
  },
});

/**
 * NewsItemView view component class.
 * @function NewsItemView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const NewsItemView = ({ content }) => {
  const intl = useIntl();

  return (
    <Container className="view-wrapper">
      <div className="row">
        <div className="offset-lg-1 col-lg-6 col-md-8">
          <Helmet title={content.title} />
          {content.title && (
            <h1 className="title">
              {content.title}
              {content.subtitle && ` - ${content.subtitle}`}
            </h1>
          )}
          {content.description && (
            <p className="documentDescription">{content.description}</p>
          )}
        </div>
        <div className="offset-lg-1 col-lg-3 col-md-4">
          <aside className="actions-and-topics">
            <div className="actions">
              <div className="d-inline">
                <a href="#" className="mr-3">
                  {intl.formatMessage(messages.share)}
                </a>
              </div>
              <div className="d-inline">
                <a href="#">{intl.formatMessage(messages.actions)}</a>
              </div>
            </div>
            {content.tassonomia_argomenti && (
              <>
                <h4>{intl.formatMessage(messages.topics)}</h4>
                <div>
                  {content.tassonomia_argomenti.map((item, i) => (
                    <a
                      href="https://www.google.it"
                      className="badge badge-pill badge-argomenti"
                      key={i}
                      title={item.title}
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </>
            )}
          </aside>
        </div>
      </div>
      {content.effective && (
        <div className="row">
          <div className="col-md-3">
            <span>Data:</span>
            <br />
            <strong>{moment(content.effective).format('DD-MM-Y')}</strong>
          </div>
        </div>
      )}
      {content.image && (
        <Image
          className="documentImage full-width"
          alt={content.title}
          title={content.title}
          src={flattenToAppURL(content.image.download)}
          floated="right"
        />
      )}
      <div className="row">
        <div className="linetop-lg"></div>
        <div className="col-lg-3 col-md-4"></div>
        <div className="col-lg-9 col-md-8">
          {content.text && (
            <div dangerouslySetInnerHTML={{ __html: content.text.data }} />
          )}
        </div>
      </div>
    </Container>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
NewsItemView.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    text: PropTypes.shape({
      data: PropTypes.string,
    }),
  }).isRequired,
};

export default NewsItemView;
