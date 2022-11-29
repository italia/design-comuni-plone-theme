import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { defineMessages, useIntl } from 'react-intl';
import { Container, Row, Col } from 'design-react-kit';
import { flattenToAppURL } from '@plone/volto/helpers';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { GenericCard } from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const SITE_SECTIONS = {
  amministrazione: { icon: 'it-pa' },
  novita: { icon: 'it-calendar' },
  servizi: { icon: 'it-settings' },
  'documenti-e-dati': { icon: 'it-file' },
};

const messages = defineMessages({
  related_items: {
    id: 'related_items',
    defaultMessage: 'Contenuti correlati',
  },
  amministrazione: {
    id: 'amministrazione',
    defaultMessage: 'Amministrazione',
  },
  servizi: {
    id: 'servizi',
    defaultMessage: 'Servizi',
  },
  novita: {
    id: 'novita',
    defaultMessage: 'Novità',
  },
  'documenti-e-dati': {
    id: 'documenti-e-dati',
    defaultMessage: 'Documenti e dati',
  },
});

/**
 * RelatedItems view component class.
 * @function RelatedItems
 * @params {object} location: object.
 * @returns {string} Markup of the component.
 */
const RelatedItems = ({
  content,
  list = [],
  children,
  view_sections = false,
}) => {
  const intl = useIntl();

  let sections = {};

  const related_items_content =
    content?.relatedItems?.length > 0 ? [...content.relatedItems] : [];

  let related = [...related_items_content, ...list];

  if (related?.length > 0) {
    related.forEach((item) => {
      let itemSection = flattenToAppURL(item['@id']).split('/')[1];
      if (Object.keys(SITE_SECTIONS).indexOf(itemSection) >= 0) {
        if (!sections[itemSection]) {
          sections[itemSection] = [];
        }
        sections[itemSection].push(item);
      }
    });
  }

  return related?.length > 0 || children ? (
    <section id="contenuti-correlati">
      <section className="section section-muted section-inset-shadow">
        <div className="section-content">
          <Container>
            {/*----------------vista per sezioni----------------*/}
            {view_sections && (
              <>
                {Object.keys(sections).length > 0 && (
                  <>
                    <Row>
                      <Col className="text-center">
                        <h3>{intl.formatMessage(messages.related_items)}</h3>
                      </Col>
                    </Row>
                    <Row className="mt-lg-4">
                      <Col>
                        <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal card-teaser-block-4">
                          {Object.keys(sections).map((sectionId, i) => (
                            <div
                              className="card card-teaser card-column shadow my-3 rounded"
                              key={i}
                            >
                              <div className="card-header">
                                <Icon icon={SITE_SECTIONS[sectionId].icon} />

                                <h5 className="card-title">
                                  {intl.formatMessage(messages[sectionId])}
                                </h5>
                              </div>
                              <div className="card-body">
                                <div className="link-list-wrapper mt-3">
                                  <ul className="link-list">
                                    {sections[sectionId].map((item, i) => (
                                      <li key={i}>
                                        <Link
                                          to={flattenToAppURL(item['@id'])}
                                          className="list-item"
                                        >
                                          <span>{item.title}</span>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </Col>
                    </Row>
                  </>
                )}
              </>
            )}

            {/*----------------vista per singoli elementi----------------*/}
            {!view_sections && (
              <>
                {related?.length > 0 && (
                  <>
                    <Row>
                      <Col className="text-center">
                        <h3>{intl.formatMessage(messages.related_items)}</h3>
                      </Col>
                    </Row>
                    <Row className="mt-lg-4">
                      {related.map((item, i) => (
                        <Col md={4} key={item['@id'] + i} className="mb-3">
                          <div className="card-wrapper">
                            <GenericCard
                              key={i}
                              index={item['@id']}
                              item={item}
                              showimage={true}
                              image_field="image"
                              showInfos={true}
                            />
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </>
                )}
              </>
            )}
            {children}
          </Container>
        </div>
      </section>
    </section>
  ) : null;
};

export default RelatedItems;

RelatedItems.propTypes = {
  content: PropTypes.shape({
    '@id': PropTypes.string,
    '@type': PropTypes.string,
    title: PropTypes.string,
    relatedItems: PropTypes.array,
  }),
  children: PropTypes.any,
};
