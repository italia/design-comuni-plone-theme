/**
 * FooterNavigation components.
 * @module components/DesignTheme/Footer/FooterNavigation
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { defineMessages, injectIntl } from 'react-intl';
import { getBaseUrl } from '@plone/volto/helpers';
import { getNavigation } from '@plone/volto/actions';
import { Row, Col } from 'react-bootstrap';

import { LinkList, LinkListItem } from '~/components/DesignTheme';

const messages = defineMessages({
  goToPage: {
    id: 'Vai alla pagina',
    defaultMessage: 'Vai alla pagina',
  },
});

/**
 * FooterNavigation container class.
 * @class FooterNavigation
 * @extends Component
 */
class FooterNavigation extends Component {
  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */
  static propTypes = {
    getNavigation: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        url: PropTypes.string,
      }),
    ).isRequired,
  };

  /**
   * Constructor
   * @method constructor
   * @param {Object} props Component properties
   * @constructs FooterNavigation
   */
  constructor(props) {
    super(props);
  }

  /**
   * Component did mount
   * @method componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
    this.props.getNavigation(getBaseUrl(''), 2);
  }

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    return (
      <>
        {this.props.items ? (
          <Row>
            {this.props.items.map(item => (
              <Col lg={3} md={3} sm={6} className="pb-2" key={item.title}>
                <h4>
                  <Link
                    to={item.url}
                    title={
                      this.props.intl.formatMessage(messages.goToPage) +
                      ': ' +
                      item.title
                    }
                  >
                    {item.title}
                  </Link>
                </h4>
                {item.items ? (
                  <LinkList className="footer-list clearfix">
                    {item.items.map(subitem => (
                      <LinkListItem
                        key={subitem.url}
                        href={subitem.url}
                        title={
                          this.props.intl.formatMessage(messages.goToPage) +
                          ': ' +
                          subitem.title
                        }
                      >
                        {subitem.title}
                      </LinkListItem>
                    ))}
                  </LinkList>
                ) : null}
              </Col>
            ))}
          </Row>
        ) : null}
      </>
    );
  }
}

export default compose(
  injectIntl,
  connect(
    state => ({
      items: state.navigation.items,
    }),
    { getNavigation },
  ),
)(FooterNavigation);
