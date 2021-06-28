/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef } from 'react';
import { Container, Button } from 'design-react-kit/dist/design-react-kit';
import { defineMessages, useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import redraft from 'redraft';
import cx from 'classnames';
import { TextEditorWidget } from '@italia/components/ItaliaTheme';
import { ConditionalLink } from '@plone/volto/components';
import config from '@plone/volto/registry';

const messages = defineMessages({
  cta_title: {
    id: 'Type the title…',
    defaultMessage: 'Type the title…',
  },
  cta_content: {
    id: 'Type description…',
    defaultMessage: 'Digita la descrizione…',
  },
  openLinkInNewTab: {
    id: 'openLinkInNewTab',
    defaultMessage: 'Apri link in un nuovo tab',
  },
});

const renderImage = (image, showImage) =>
  showImage && image ? (
    <figure className="img-wrapper">
      <img
        src={`data:${image['content-type']};${image.encoding},${image.data}`}
        alt=""
        aria-hidden="true"
        loading="lazy"
        role="presentation"
      />
    </figure>
  ) : null;

const Block = ({
  data,
  block,
  inEditMode,
  onChange,
  onSelectBlock,
  onAddBlock,
  index,
}) => {
  const intl = useIntl();
  const title = data?.cta_title?.blocks[0]?.text;
  const hasImage = data?.showImage;
  const content = data?.cta_content;

  const [selected, setSelected] = useState('title');
  const titleRef = useRef();
  const contentRef = useRef();

  return (
    <div
      className={cx('cta-block-wrapper full-width', { 'has-image': hasImage })}
      onKeyDown={(e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          if (
            !titleRef.current.contains(e.target) &&
            !contentRef.current.contains(e.target)
          ) {
            this.props.onAddBlock('text', index + 1);
          }

          if (titleRef.current.contains(e.target)) {
            setSelected('content');
          }
        }
      }}
    >
      {hasImage && renderImage(data?.image, hasImage)}
      <Container tag="div" className="px-3 px-md-4">
        <div className="cta-tile-text">
          <h3 className="title mt-0">
            {inEditMode ? (
              <div
                ref={titleRef}
                onClick={() => {
                  setSelected('title');
                }}
                onFocus={() => {
                  setSelected('title');
                }}
              >
                <TextEditorWidget
                  data={data}
                  fieldName="cta_title"
                  selected={selected === 'title'}
                  block={block}
                  onChangeBlock={(data) => onChange(data, 'cta_title')}
                  placeholder={intl.formatMessage(messages.cta_title)}
                  showToolbar={false}
                  onSelectBlock={() => {}}
                  onAddBlock={() => {
                    setSelected('content');
                  }}
                />
              </div>
            ) : (
              title
            )}
          </h3>
          {inEditMode ? (
            <div
              ref={contentRef}
              onClick={() => {
                setSelected('content');
              }}
              onFocus={() => {
                setSelected('content');
              }}
            >
              <TextEditorWidget
                data={data}
                fieldName="cta_content"
                selected={selected === 'content'}
                block={block}
                onChangeBlock={(data) => onChange(data, 'cta_content')}
                placeholder={intl.formatMessage(messages.cta_content)}
                showToolbar={true}
                onSelectBlock={onSelectBlock}
                onAddBlock={onAddBlock}
                index={index}
              />
            </div>
          ) : (
            redraft(
              content,
              config.settings.ToHTMLRenderers,
              config.settings.ToHTMLOptions,
            )
          )}
          {data.ctaLink?.length > 0 && data.ctaLinkTitle?.length > 0 && (
            <div className="mt-5">
              <Button
                color="info"
                icon={false}
                size="lg"
                outline
                tag={ConditionalLink}
                condition={!inEditMode}
                to={data.ctaLink}
                openLinkInNewTab={!!data.openLinkInNewTab}
                title={
                  !!data.openLinkInNewTab
                    ? intl.formatMessage(messages.openLinkInNewTab)
                    : null
                }
              >
                {data.ctaLinkTitle}
              </Button>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

Block.propTypes = {
  entityMap: PropTypes.any,
  title: PropTypes.string,
  content: PropTypes.any,
};

export default Block;
