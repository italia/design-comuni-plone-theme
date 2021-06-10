import React from 'react';
import PropTypes from 'prop-types';
import { useIntl, defineMessages } from 'react-intl';
import { ConditionalLink, UniversalLink } from '@plone/volto/components';

import {
  Row,
  Col,
  Chip,
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardReadMore,
} from 'design-react-kit/dist/design-react-kit';
import Image from '@plone/volto/components/theme/Image/Image';

import { flattenToAppURL } from '@plone/volto/helpers';
import { CardCategory, getItemIcon } from '@italia/components/ItaliaTheme';
import { viewDate } from '@italia/helpers';

const messages = defineMessages({
  news: {
    id: 'newsHome-news',
    defineMessage: 'News',
  },
});

const Body = ({ content, pathname, block }) => {
  const intl = useIntl();
  const icon = getItemIcon(content);

  return (
    <Row>
      {content.image && (
        <Col lg={{ size: 6, offset: 1, order: 2 }}>
          <Image
            image={content.image}
            alt={content.title}
            className="item-image"
            role="presentation"
          />
        </Col>
      )}
      <Col lg={{ size: 5, order: 1 }}>
        <Card>
          <CardBody className="pb-2">
            <CardCategory
              date={
                content.effective &&
                viewDate(intl.locale, content.effective, 'll')
              }
              iconName={icon}
            >
              {intl.formatMessage(messages.news)}
            </CardCategory>
            <CardTitle tag="h2">
              <ConditionalLink condition={!!content['@id']} item={content}>
                {content.title}
              </ConditionalLink>
            </CardTitle>
            <CardText>{content.description}</CardText>

            {content.tassonomia_argomenti &&
              content.tassonomia_argomenti.length > 0 && (
                <>
                  {content.tassonomia_argomenti.map((argomento, idx) => (
                    <Chip
                      simple
                      color="primary"
                      key={`${idx} ${argomento['@id']}`}
                    >
                      <ConditionalLink
                        condition={!!argomento['@id']}
                        item={argomento}
                        className="chip-label text-decoration-none"
                      >
                        {argomento.title}
                      </ConditionalLink>
                    </Chip>
                  ))}
                </>
              )}

            {block.moreHref && (
              <CardReadMore
                tag={UniversalLink}
                iconName="it-arrow-right"
                text={block.moreTitle || 'Vedi tutte le notizie'}
                href={flattenToAppURL(block.moreHref)}
              />
            )}
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Body.propTypes = {
  content: PropTypes.objectOf(PropTypes.any),
  pathname: PropTypes.string,
};

export default Body;
