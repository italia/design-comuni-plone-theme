import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
} from 'design-react-kit/dist/design-react-kit';
import { defineMessages, useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import redraft from 'redraft';
import { TextEditorWidget } from '@italia/components/ItaliaTheme';
import { Divider } from 'semantic-ui-react';
import { settings } from '~/config';

const messages = defineMessages({
  simple_card_title: {
    id: 'Type the title…',
    defaultMessage: 'Type the title…',
  },
  simple_card_content: {
    id: 'Type description…',
    defaultMessage: 'Digita la descrizione…',
  },
  simple_card_click: {
    id: 'Type text…',
    defaultMessage: 'Digita il testo…',
  },
});

const Block = ({ inEditMode, data, block, onChange }) => {
  const intl = useIntl();
  const title = data?.simple_card_title?.blocks[0]?.text;
  const content = data?.simple_card_content;

  return (
    <div className="simple-text-card-wrapper">
      <Card
        color="white"
        className=" card-bg rounded"
        noWrapper={false}
        space
        tag="div"
      >
        <CardBody>
          <div className="simple-text-card cms-ui">
            {inEditMode ? (
              <>
                <CardTitle tag="h4">
                  <TextEditorWidget
                    data={data}
                    fieldName="simple_card_title"
                    selected={true}
                    block={block}
                    onChangeBlock={(data) =>
                      onChange(data, 'simple_card_title')
                    }
                    placeholder={intl.formatMessage(messages.simple_card_title)}
                    showToolbar={false}
                  />
                </CardTitle>
                <Divider />
                <TextEditorWidget
                  data={data}
                  fieldName="simple_card_content"
                  selected={false}
                  block={block}
                  onChangeBlock={(data) =>
                    onChange(data, 'simple_card_content')
                  }
                  placeholder={intl.formatMessage(messages.simple_card_content)}
                  showToolbar={true}
                />
              </>
            ) : (
              <>
                <CardTitle tag="h4">{title}</CardTitle>
                <Divider />
                <div>
                  <CardText>
                    {redraft(
                      content,
                      settings.ToHTMLRenderers,
                      settings.ToHTMLOptions,
                    )}
                  </CardText>
                </div>
              </>
            )}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

Block.propTypes = {
  entityMap: PropTypes.any,
  data: PropTypes.any,
  block: PropTypes.any,
  inEditMode: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
};

export default Block;
