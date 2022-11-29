import React from 'react';
import { Card, CardBody } from 'design-react-kit';
import { UniversalLink } from '@plone/volto/components';
import Highlighter from 'react-highlight-words';

const ResultItem = ({ item, index, section, searchableText }) => {
  const filteredWords = searchableText.split(' ');

  return (
    <Card noWrapper={true} className="mt-3 mb-3">
      <CardBody className="shadow-sm px-4 pt-4 pb-4 rounded">
        {section}
        <h4 className="card-title">
          <UniversalLink item={item}>
            <Highlighter
              highlightClassName="highlighted-text"
              searchWords={filteredWords}
              autoEscape={true}
              textToHighlight={item.title}
            />
          </UniversalLink>
        </h4>
        <p className="text-paragraph">
          <Highlighter
            highlightClassName="highlighted-text"
            searchWords={filteredWords}
            autoEscape={true}
            textToHighlight={item.description}
          />
        </p>
      </CardBody>
    </Card>
  );
};
export default ResultItem;
