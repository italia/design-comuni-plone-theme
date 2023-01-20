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
import redraft from 'redraft';
import { UniversalLink } from '@plone/volto/components';
import { flattenToAppURL } from '@plone/volto/helpers';
import { ArgumentIcon } from 'design-comuni-plone-theme/components/ItaliaTheme/View';
import config from '@plone/volto/registry';

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
  focusOn,
  block,
  onChange,
  intl,
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
                config.settings.richtextViewSettings.ToHTMLRenderers,
                config.settings.richtextViewSettings.ToHTMLOptions,
              )}
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
