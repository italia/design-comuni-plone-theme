import React from 'react';
import { defineMessages } from 'react-intl';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Collapse as CollapseBase } from 'reactstrap';

import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';

const messages = defineMessages({
  CloseMenu: {
    id: 'close-menu',
    defaultMessage: 'Chiudi menu',
  },
});

/**
 * Clone di https://github.com/italia/design-react-kit/blob/master/src/components/Collapse/Collapse.js
 * Ultimo commit sul file 74975bf (design-react-kit)
 *
 * Modifiche:
 *  - close-div rivisitato
 */

const propTypes = {
  ...CollapseBase.propTypes, // eslint-disable-line react/forbid-foreign-prop-types
  /** Indica se il componente Collapse è usato all'interno di un componente Header */
  header: PropTypes.bool,
  /** Indica se il menu HeaderNav sia aperto o meno. Usato unicamente nel caso della HeaderNav, ovvero con navbar e header entrambi true */
  inOpen: PropTypes.bool,
  /** Funzione chiamata su click di overlay dell'HeaderNav aperto. Usato unicamente nel caso della HeaderNav, ovvero con navbar e header entrambi true */
  onOverlayClick: PropTypes.func,
};

const Collapse = ({
  header,
  className,
  navbar,
  children,
  isOpen,
  onOverlayClick,
  ...attributes
}) => {
  if (navbar && header) {
    const classes = classNames(className, 'navbar-collapse', {
      expanded: isOpen,
    });
    return (
      <CollapseBase
        className={classes}
        cssModule={{ 'navbar-collapse': 'navbar-collapsable' }}
        navbar={navbar}
        style={{ display: isOpen ? 'block' : 'none' }}
        {...attributes}
      >
        <div
          className="overlay"
          style={{ display: isOpen ? 'block' : 'none' }}
          onClick={onOverlayClick}
        ></div>
        <div className="close-div">
          <button
            className="btn close-menu"
            type="button"
            title={intl.formatMessage(messages.CloseMenu)}
            onClick={onOverlayClick}
          >
            <Icon color="white" icon="it-close-big" padding={false} />
          </button>
        </div>
        {children}
      </CollapseBase>
    );
  }
  const classes = classNames(className, {
    'link-list-wrapper': header,
  });

  return (
    <CollapseBase
      className={classes}
      cssModule={{ 'navbar-collapse': 'navbar-collapsable' }}
      {...attributes}
      navbar={navbar}
      isOpen={isOpen}
    >
      {children}
    </CollapseBase>
  );
};

Collapse.propTypes = propTypes;
Collapse.defaultProps = CollapseBase.defaultProps;

export default Collapse;
