import React from 'react';
import { defineMessages } from 'react-intl';
import { TextEditorWidget } from '@italia/components/ItaliaTheme';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardReadMore,
} from 'design-react-kit/dist/design-react-kit';
import { settings } from '@italia/config';
import redraft from 'redraft';

const messages = defineMessages({
  text: {
    id: 'Type text…',
    defaultMessage: 'Digita un testo…',
  },
  exploreArgument: {
    id: 'exploreArgument',
    defaultMessage: 'Esplora argomento',
  },
});

const Block = ({
  data,
  inEditMode,
  selected,
  focusOn,
  block,
  onChange,
  intl,
}) => {
  const argument = data?.argument ? data?.argument[0] : null;

  return (
    <Card className="card-bg" noWrapper={true} tag="div">
      <CardBody tag="div">
        <CardTitle tag="h3">{argument?.title}</CardTitle>
        <CardText tag="p">{argument?.description}</CardText>
        {inEditMode ? (
          <TextEditorWidget
            data={data}
            fieldName="title"
            selected={selected}
            block={block}
            onChangeBlock={onChange}
            placeholder={intl.formatMessage(messages.text)}
            focusOn={focusOn}
          />
        ) : (
          <div>
            {redraft(
              data.title,
              settings.ToHTMLRenderers,
              settings.ToHTMLOptions,
            )}
          </div>
        )}
        {argument && (
          <CardReadMore
            iconName="it-arrow-right"
            tag="a"
            text={intl.formatMessage(messages.exploreArgument)}
            href={argument['@id']}
          />
        )}
      </CardBody>
    </Card>
  );
};
export default Block;
