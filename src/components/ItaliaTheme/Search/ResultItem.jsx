import React from 'react';
import cx from 'classnames';
import { Card, CardBody } from 'design-react-kit/dist/design-react-kit';
import { UniversalLink } from '@plone/volto/components';

const ResultItem = ({ item, index, section }) => {
  return (
    <Card
      teaser
      noWrapper={true}
      className={cx('mt-3 mb-2 border-bottom-half', {
        'border-right border-light': index % 3 !== 2,
      })}
    >
      <CardBody>
        {section}
        <h4 className="card-title">
          <UniversalLink item={item}>{item.title}</UniversalLink>
        </h4>
        <p className="card-text">{item.description}</p>
      </CardBody>
    </Card>
  );
};
export default ResultItem;
