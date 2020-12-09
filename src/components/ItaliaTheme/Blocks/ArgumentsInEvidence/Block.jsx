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
import { settings } from '~/config';
import redraft from 'redraft';
import { useDispatch, useSelector } from 'react-redux';
import { flattenToAppURL } from '@plone/volto/helpers';
import { ArgumentIcon } from '@italia/components/ItaliaTheme/View';

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
  const searchResults = useSelector((state) => state.content?.subrequests);
  const dispatch = useDispatch();

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
