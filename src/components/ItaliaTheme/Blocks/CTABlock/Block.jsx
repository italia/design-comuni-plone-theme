import { Button, Container } from 'design-react-kit';
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { defineMessages, useIntl } from 'react-intl';

import Image from '@plone/volto/components/theme/Image/Image';
import PropTypes from 'prop-types';
import { TextEditorWidget } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { UniversalLink } from '@plone/volto/components';
import { TextBlockView } from '@plone/volto-slate/blocks/Text';
import cx from 'classnames';

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

const Block = ({ data, block, inEditMode, selected, ...otherProps }) => {
  const intl = useIntl();
  const title = data?.cta_title;
  const hasImage = data?.showImage && data?.ctaImage?.length > 0;
  const content = data?.cta_content;
  const showFullwidth = data?.showFullWidth;

  const [selectedField, setSelectedField] = useState('title');

  useEffect(() => {
    if (selected) {
      setSelectedField('title');
    } else {
      setSelectedField(null);
    }
  }, [selected]);

  useEffect(() => {
    if (!selected && selectedField) {
      otherProps.onSelectBlock(block);
    }
  }, [selectedField]);

  return (
    <div
      className={cx('cta-block-wrapper', {
        'has-image': hasImage,
        'full-width': showFullwidth,
      })}
    >
      {hasImage && data?.ctaImage?.length > 0 && (
        <Image
          itemUrl={data.ctaImage[0]['@id']}
          image={
            data.ctaImage[0].image_scales?.[
              data.ctaImage[0].image_field
            ]?.[0] || data.ctaImage[0]['@id']
          }
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
          <h2 className="title mt-0" id={block + 'title'}>
            {inEditMode ? (
              <TextEditorWidget
                {...otherProps}
                showToolbar={false}
                data={data}
                fieldName="cta_title"
                selected={selectedField === 'title'}
                setSelected={() => setSelectedField('title')}
                block={block}
                placeholder={intl.formatMessage(messages.cta_title)}
                focusNextField={() => {
                  setSelectedField('content');
                }}
              />
            ) : (
              title
            )}
          </h2>

          {inEditMode ? (
            <TextEditorWidget
              {...otherProps}
              showToolbar={true}
              data={data}
              fieldName="cta_content"
              block={block}
              selected={selectedField === 'content'}
              placeholder={intl.formatMessage(messages.cta_content)}
              setSelected={() => setSelectedField('content')}
              focusPrevField={() => {
                setSelectedField('title');
              }}
            />
          ) : (
            <TextBlockView data={{ value: content }} />
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
