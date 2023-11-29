import React from 'react';
import _ from 'lodash';
import keyboardKey from 'keyboard-key';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { injectIntl, defineMessages } from 'react-intl';
import { PagerItem, PagerLink } from 'design-react-kit';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';

const messages = defineMessages({
  prevPage: {
    id: 'Previous page',
    defaultMessage: 'Pagina precedente',
  },
  nextPage: {
    id: 'Next page',
    defaultMessage: 'Pagina successiva',
  },
});

/**
 * An item of a pagination.
 */
class PaginationItem extends Component {
  static propTypes = {
    /** A pagination item can be active. */
    active: PropTypes.bool,

    /** A pagination item can be disabled. */
    disabled: PropTypes.bool,

    /**
     * Called on click.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onClick: PropTypes.func,

    /** A pagination should have a type. */
    type: PropTypes.oneOf([
      'ellipsisItem',
      'firstItem',
      'prevItem',
      'pageItem',
      'nextItem',
      'lastItem',
    ]),

    /** Lighthouse ID to set Agid data-element on pager link for CT Servizio*/
    isServiceLink: PropTypes.bool,
  };

  handleClick = (e) => {
    _.invoke(this.props, 'onClick', e, this.props);
  };

  handleKeyDown = (e) => {
    _.invoke(this.props, 'onKeyDown', e, this.props);
    if (keyboardKey.getCode(e) === keyboardKey.Enter)
      _.invoke(this.props, 'onClick', e, this.props);
  };

  render() {
    const { active, type, children, intl, ellipsisItem, isServiceLink } =
      this.props;
    const disabled = this.props.disabled || type === 'ellipsisItem';
    return (
      <PagerItem disabled={disabled}>
        <PagerLink
          href=""
          onClick={this.handleClick}
          onKeyDown={this.handleKeyDown}
          aria-current={active ? 'page' : null}
          data-element={
            isServiceLink && type !== 'prevItem' ? 'pager-link' : null
          }
        >
          {type === 'prevItem' && (
            <>
              <Icon
                icon="it-chevron-left"
                style={{ ariaHidden: true }}
                color="primary"
              />

              <span className="visually-hidden">
                {intl.formatMessage(messages.prevPage)}
              </span>
            </>
          )}
          {type === 'nextItem' && (
            <>
              <Icon
                icon="it-chevron-right"
                style={{ ariaHidden: true }}
                color="primary"
              />
              <span className="visually-hidden">
                {intl.formatMessage(messages.nextPage)}
              </span>
            </>
          )}
          {type === 'ellipsisItem' && (
            <>
              {ellipsisItem}
              <span className="visually-hidden">
                {intl.formatMessage(messages.nextPage)}
              </span>
            </>
          )}
          {['prevItem', 'nextItem', 'ellipsisItem'].indexOf(type) < 0 &&
            children}
        </PagerLink>
      </PagerItem>
    );
  }
}

export default injectIntl(PaginationItem);
