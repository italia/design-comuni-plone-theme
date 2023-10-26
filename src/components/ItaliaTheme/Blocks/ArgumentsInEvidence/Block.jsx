import React from 'react';
import { defineMessages } from 'react-intl';
import { TextEditorWidget } from 'design-comuni-plone-theme/components/ItaliaTheme';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardReadMore,
} from 'design-react-kit';

import { UniversalLink } from '@plone/volto/components';
import { flattenToAppURL } from '@plone/volto/helpers';
import { ArgumentIcon } from 'design-comuni-plone-theme/components/ItaliaTheme/View';
import { TextBlockView } from '@plone/volto-slate/blocks/Text';

const messages = defineMessages({
  text: {
    id: 'Type text…',
    defaultMessage: 'Digita un testo…',
  },
  exploreArgument: {
    id: 'exploreArgument',
    defaultMessage: 'Esplora argomento',
  },
  select_argument_sidebar: {
    id: 'select_argument_sidebar',
    defaultMessage: 'Seleziona un argomento nella barra a lato',
  },
});

const Block = ({
  data,
  inEditMode,
  selected,
  block,
  onChange,
  intl,
  index,
  ...otherProps
}) => {
  const argument = data?.argument ? data?.argument[0] : null;

  return (
    <Card className="card-bg" noWrapper={true} tag="div">
      {argument ? (
        <CardBody tag="div">
          <ArgumentIcon icon={argument?.icona} />
          <CardTitle tag="h3">{argument?.title}</CardTitle>
          <CardText tag="p">{argument?.description}</CardText>
          {inEditMode ? (
            <TextEditorWidget
              {...otherProps}
              data={data}
              block={block}
              fieldName="title"
              selected={selected}
              placeholder={intl.formatMessage(messages.text)}
              onChangeBlock={(block, _data) => {
                onChange(_data);
              }}
              setSelected={() => {
                otherProps.onSubblockChangeFocus(index);
              }}
            />
          ) : (
            <div>
              <TextBlockView
                id={otherProps.id + '-' + index}
                data={{ value: data.title }}
              />
            </div>
          )}
          {argument && (
            <CardReadMore
              iconName="it-arrow-right"
              tag={UniversalLink}
              text={intl.formatMessage(messages.exploreArgument)}
              href={flattenToAppURL(argument['@id'])}
            />
          )}
        </CardBody>
      ) : (
        <CardBody tag="div">
          {intl.formatMessage(messages.select_argument_sidebar)}
        </CardBody>
      )}
    </Card>
  );
};
export default Block;
