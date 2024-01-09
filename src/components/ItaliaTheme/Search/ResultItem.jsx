import React from 'react';
import { Card, CardBody } from 'design-react-kit';
import { UniversalLink } from '@plone/volto/components';

const Marker = ({ text = '', highlight = '' }) => {
  if (!highlight.trim()) {
    return text;
  }
  const regex = new RegExp(
    `(${highlight
      .split(' ')
      // remove any characters not in these ranges
      .map((s) => s.replace(/[^a-zA-Z0-9À-ÖØ-öø-ÿ]/g, ''))
      .filter((s) => s !== '')
      .join('|')})`,
    'gi',
  );
  // Split on highlight term and include term into parts, ignore case
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) =>
        part.match(regex) ? (
          <mark className="highlighted-text">{part}</mark>
        ) : (
          part
        ),
      )}
    </>
  );
};

const ResultItem = ({ item, index, section, searchableText }) => {
  return (
    <Card noWrapper={true} className="mt-3 mb-3">
      <CardBody className="shadow-sm px-4 pt-4 pb-4 rounded">
        {section}
        <h4 className="card-title">
          <UniversalLink item={item}>
            <Marker highlight={searchableText} text={item.title} />
          </UniversalLink>
        </h4>
        <p className="text-paragraph">
          <Marker highlight={searchableText} text={item.description} />
        </p>
      </CardBody>
    </Card>
  );
};
export default ResultItem;
