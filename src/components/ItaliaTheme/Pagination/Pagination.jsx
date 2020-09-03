import React, { Component } from 'react';
import PropTypes from 'prop-types';
import createPaginationItems from '@italia/components/ItaliaTheme/Pagination/createPaginationItems';
import { Pager, PagerList } from 'design-react-kit/dist/design-react-kit';
import PaginationItem from '@italia/components/ItaliaTheme/Pagination/PaginationItem';
import { invoke, isNil, map } from 'lodash';

/**
 * A component to render a pagination.
 */
export default class Pagination extends Component {
  static propTypes = {
    /** A pagination item can have an aria label. */
    'aria-label': PropTypes.string,

    /** Initial activePage value. */
    defaultActivePage: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),

    /** Index of the currently active page. */
    activePage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /** Number of always visible pages at the beginning and end. */
    boundaryRange: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /** A shorthand for PaginationItem. */
    ellipsisItem: PropTypes.any,

    /**
     * Called on change of an active page.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onPageChange: PropTypes.func,

    /** Number of always visible pages before and after the current one. */
    siblingRange: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /** Total number of pages. */
    totalPages: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
      .isRequired,
  };

  static defaultProps = {
    boundaryRange: 1,
    ellipsisItem: '...',
    siblingRange: 1,
  };

  constructor(props) {
    super(props);
    this.state = { activePage: props.activePage };
  }

  handleItemClick = (e, nextActivePage) => {
    const { activePage: prevActivePage } = this.state;

    // Heads up! We need the cast to the "number" type there, as `activePage` can be a string
    if (+prevActivePage === +nextActivePage) return;
    this.setState({ activePage: nextActivePage.children });
    invoke(this.props, 'onPageChange', e, {
      ...this.props,
      activePage: nextActivePage,
    });
  };

  render() {
    const {
      boundaryRange,
      ellipsisItem,
      siblingRange,
      totalPages,
    } = this.props;
    const { activePage } = this.state;

    const items = createPaginationItems({
      activePage: activePage,
      boundaryRange,
      hideEllipsis: isNil(ellipsisItem),
      siblingRange,
      totalPages,
    });

    return (
      <Pager className="justify-content-center mt-5">
        <PagerList>
          {map(items, ({ active, type, value }) => (
            <React.Fragment key={value + type}>
              {['firstItem', 'lastItem'].indexOf(type) < 0 && (
                <PaginationItem
                  active={active}
                  disabled={this.props.disabled}
                  onClick={this.handleItemClick}
                  type={type}
                  ellipsisItem={ellipsisItem}
                >
                  {value}
                </PaginationItem>
              )}
            </React.Fragment>
          ))}
        </PagerList>
      </Pager>
    );
  }
}
