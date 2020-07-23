/**
 * PaginaArgomentoView view component.
 * @module components/theme/View/PaginaArgomentoView
 */

import React from 'react';
import PaginaArgomentoViewNoBlocks from './PaginaArgomentoViewNoBlocks';
import {
  getBlocksFieldname,
  getBlocksLayoutFieldname,
  hasBlocksData,
  getBaseUrl,
} from '@plone/volto/helpers';
import { map } from 'lodash';
import { blocks } from '~/config';
import { defineMessages, useIntl } from 'react-intl';
import { useLocation, Link } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardText,
  CardCategory,
} from 'design-react-kit/dist/design-react-kit';
import { flattenToAppURL } from '@plone/volto/helpers';
/**
 * PaginaArgomentoView view component class.
 * @function PaginaArgomentoView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */

const messages = defineMessages({
  unknownBlock: {
    id: 'Unknown Block',
    defaultMessage: 'Unknown Block {block}',
  },
});

const PaginaArgomentoView = ({ content }) => {
  console.log(content[blocksLayoutFieldname]?.items, blocksLayoutFieldname)
  const blocksFieldname = getBlocksFieldname(content);
  const blocksLayoutFieldname = getBlocksLayoutFieldname(content);
  const intl = useIntl();
  const location = useLocation();
  return hasBlocksData(content) ? (
    <div id="page-document" className="ui container">
      <div className="ArgomentoTitleWrapper">
        <div className="title-description-wrapper">
          <h1>{content.title}</h1>
          {content.description}
        </div>
          <div className="a-portata-di-click">
            { 
              content?.unita_amministrativa_responsabile?.length > 0 ?
                content?.unita_amministrativa_responsabile.map((u, index) => {
                return (
                  <>
                    <div className="row mb-3" key={index}>
                      <div className="w-100">
                      <Card className={'listing-item card-bg'}>
                        <CardBody>
                          <CardCategory iconName='it-pa'>
                            <span className="text font-weight-bold">
                              <Link to={flattenToAppURL(u['@id'])}>
                                {u.title || u.id}
                              </Link>
                            </span>
                          </CardCategory>
                          {<CardText>{u?.street} {u?.street && u?.zip_code && "|"} {u?.zip_code}</CardText>}
                        </CardBody>
                      </Card>
                      </div>
                    </div>
                  </>
                  )
                })
              :
                (
                  <>
                    <div
                      dangerouslySetInnerHTML={{ __html: content?.box_aiuto?.data }}
                    >
                    </div>
                  </>
                )  
            }              
          </div>
      </div>
      
      {map(content[blocksLayoutFieldname].items, block => {
        const blockType = content[blocksFieldname]?.[block]?.['@type'];
        if (['title', 'description'].indexOf(blockType) > -1)
          return null;

        const Block = blocks.blocksConfig[blockType]?.['view'] || null;
        return Block !== null ? (
          <Block
            key={block}
            id={block}
            properties={content}
            data={content[blocksFieldname][block]}
            path={getBaseUrl(location?.pathname || '')}
          />
        ) : (
          <div key={block}>
            {intl.formatMessage(messages.unknownBlock, {
              block: content[blocksFieldname]?.[block]?.['@type'],
            })}
          </div>
        );
      })}
    </div>
  ) : (
    <PaginaArgomentoViewNoBlocks content={content} />
  );
};

export default PaginaArgomentoView;
