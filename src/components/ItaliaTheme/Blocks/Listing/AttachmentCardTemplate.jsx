import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { defineMessages, useIntl } from 'react-intl';
import { UniversalLink } from '@plone/volto/components';
import { Container, Card, CardBody, CardTitle } from 'design-react-kit';
import {
  Icon,
  ListingLinkMore,
} from 'design-comuni-plone-theme/components/ItaliaTheme';

const messages = defineMessages({
  link: {
    id: 'link',
    defaultMessage: 'Collegamento',
  },
  attachment: {
    id: 'attachment',
    defaultMessage: 'Allegato',
  },
});

const AttachmentCardTemplate = ({
  items,
  isEditMode,
  linkTitle,
  linkHref,
  show_pdf_preview,
  show_block_bg,
  title,
  id_lighthouse,
  linkAlign,
  titleLine,
  linkmore_id_lighthouse,
}) => {
  const intl = useIntl();

  return (
    <Container className="px-4">
      <div className="simple-card-compact-template">
        {title && (
          <h2
            className={cx('mb-4', {
              'mt-5': !show_block_bg,
              'title-bottom-line': titleLine,
            })}
          >
            {title}
          </h2>
        )}
        <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal card-teaser-block-3 mb-3">
          {items.map((item, index) => {
            let itemUrl = { ...item };
            if (item['@type'] === 'File') {
              itemUrl = {
                ...item,
                file: item,
                '@id':
                  show_pdf_preview && item?.mime_type === 'application/pdf'
                    ? item?.['@id'] + '/@@display-file/file'
                    : item?.['@id'] + '/@@download/file',
              };
            }

            return (
              <Card
                className="card card-teaser shadow p-4 mt-3 rounded attachment"
                noWrapper={true}
                tag="div"
              >
                {item['@type'] === 'File' ? (
                  <Icon
                    icon="it-clip"
                    alt={intl.formatMessage(messages.attachment)}
                  />
                ) : (
                  <Icon
                    icon="it-link"
                    alt={intl.formatMessage(messages.link)}
                  />
                )}
                <CardBody tag="div">
                  <CardTitle tag="h5" className="mb-0">
                    <UniversalLink
                      item={!isEditMode ? itemUrl : null}
                      href={isEditMode ? '#' : null}
                      data-element={id_lighthouse}
                    >
                      {item.title || item.id}
                    </UniversalLink>
                  </CardTitle>
                </CardBody>
              </Card>
            );
          })}
        </div>

        <ListingLinkMore
          title={linkTitle}
          href={linkHref}
          className="my-4"
          linkAlign={linkAlign}
          linkmoreIdLighthouse={linkmore_id_lighthouse}
        />
      </div>
    </Container>
  );
};

AttachmentCardTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  isEditMode: PropTypes.bool,
  linkTitle: PropTypes.any,
};

export default AttachmentCardTemplate;
