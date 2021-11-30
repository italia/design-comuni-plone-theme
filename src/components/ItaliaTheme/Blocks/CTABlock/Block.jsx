/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef } from 'react';
import { Container, Button } from 'design-react-kit/dist/design-react-kit';
import { defineMessages, useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import redraft from 'redraft';
import cx from 'classnames';
import { TextEditorWidget } from '@italia/components/ItaliaTheme';
import { UniversalLink } from '@plone/volto/components';
import Image from '@plone/volto/components/theme/Image/Image';

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
}) => {
  const intl = useIntl();
  const title = data?.cta_title?.blocks[0]?.text;
  const hasImage = data?.showImage && data?.ctaImage?.length > 0;
  const content = data?.cta_content;
  const showFullwidth = data?.showFullWidth;

  const [selected, setSelected] = useState('title');
  const titleRef = useRef();
  const contentRef = useRef();

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
            setSelected('content');
          }
        }
      }}
    >
      {hasImage && data?.ctaImage?.length > 0 && (
        <Image
          image={data.ctaImage[0]['@id']}
          key={data.ctaImage[0]['@id']}
          alt=""
          aria-hidden="true"
          loading="lazy"
          useOriginal={false}
          role="presentation"
        />
      )}
      <Container tag="div" className="px-3 px-md-4">
        <div className="cta-tile-text">
          <h2 className="title mt-0">
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
                  onChangeBlock={(data) => onChangeBlock(block, data)}
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
          </h2>
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
                onChangeBlock={(data) => onChangeBlock(block, data)}
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
