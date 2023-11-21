import { Button, Container } from 'design-react-kit';
import React, { useRef, useState, useEffect } from 'react';
import { defineMessages, useIntl } from 'react-intl';

import PropTypes from 'prop-types';
import { TextEditorWidget } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { UniversalLink } from '@plone/volto/components';
import config from '@plone/volto/registry';
import cx from 'classnames';
import redraft from 'redraft';

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
    defaultMessage: 'Apri link in una nuova scheda',
  },
});


const Block = ({
  data,
  block,
  inEditMode,
  onChangeBlock,
  onSelectBlock,
  onAddBlock,
  index,
  onFocusNextBlock,
  onFocusPreviousBlock,
  selected,
}) => {
  const intl = useIntl();
  const Image = config.getComponent({ name: 'Image' }).component;
  const title = data?.cta_title?.blocks[0]?.text;
  const hasImage = data?.showImage && data?.ctaImage?.length > 0;
  const content = data?.cta_content;
  const showFullwidth = data?.showFullWidth;

  const [selectedField, setSelectedField] = useState('title');
  const titleRef = useRef();
  const contentRef = useRef();
  useEffect(() => {
    if (selected) {
      setSelectedField('title');
    } else {
      setSelectedField(null);
    }
  }, [selected]);

  return (
    <div
      className={cx('cta-block-wrapper', {
        'has-image': hasImage,
        'full-width': showFullwidth,
      })}
      onKeyDown={(e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          if (
            !titleRef.current.contains(e.target) &&
            !contentRef.current.contains(e.target)
          ) {
            this.props.onAddBlock('text', index + 1);
          }

          if (titleRef.current.contains(e.target)) {
            setSelectedField('content');
          }
        }
      }}
    >
      {hasImage && data?.ctaImage?.length > 0 && (
        <figure className="img-wrapper">
          <Image
            item={data.ctaImage?.[0]}
            sizes="100vw"
            loading="lazy"
            responsive={true}
            alt=""
            aria-hidden="true"
            role="presentation"
            key={data.ctaImage[0]['@id']}
          />
        </figure>
      )}
      <Container tag="div" className="px-3 px-md-4">
        <div className="cta-tile-text">
          <h2 className="title mt-0" id={block + 'title'}>
            {inEditMode ? (
              <div
                ref={titleRef}
                onClick={() => {
                  setSelectedField('title');
                }}
                onFocus={() => {
                  setSelectedField('title');
                }}
              >
                <TextEditorWidget
                  data={data}
                  fieldName="cta_title"
                  selected={selectedField === 'title'}
                  block={block}
                  onChangeBlock={(data) => onChangeBlock(block, data)}
                  placeholder={intl.formatMessage(messages.cta_title)}
                  showToolbar={false}
                  onSelectBlock={() => {}}
                  onAddBlock={() => {
                    setSelectedField('content');
                  }}
                  onFocusNextBlock={() => {
                    setSelectedField('content');
                  }}
                  onFocusPreviousBlock={onFocusPreviousBlock}
                />
              </div>
            ) : (
              title
            )}
          </h2>
          {inEditMode ? (
            <div
              ref={contentRef}
              onClick={() => {
                setSelectedField('content');
              }}
              onFocus={() => {
                setSelectedField('content');
              }}
            >
              <TextEditorWidget
                data={data}
                fieldName="cta_content"
                selected={selectedField === 'content'}
                block={block}
                onChangeBlock={(data) => onChangeBlock(block, data)}
                placeholder={intl.formatMessage(messages.cta_content)}
                showToolbar={true}
                onSelectBlock={onSelectBlock}
                onAddBlock={onAddBlock}
                index={index}
                onFocusNextBlock={onFocusNextBlock}
                onFocusPreviousBlock={() => {
                  setSelectedField('title');
                }}
              />
            </div>
          ) : (
            redraft(
              content,
              config.settings.richtextViewSettings.ToHTMLRenderers,
              config.settings.richtextViewSettings.ToHTMLOptions,
            )
          )}
          {data.ctaLink?.length > 0 && data.ctaLinkTitle?.length > 0 && (
            <div className="mt-5">
              <Button
                color="info"
                icon={false}
                size="lg"
                outline
                tag={UniversalLink}
                disabled={inEditMode}
                href={data.ctaLink}
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
