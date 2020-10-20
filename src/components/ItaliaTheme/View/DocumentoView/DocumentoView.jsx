/**
 * DocumentoView view component.
 * @module components/theme/View/DocumentoView
 */

import React, { useState, createRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import Modules from '@italia/components/ItaliaTheme/View/DocumentoView/Modules';

import {
  Attachments,
  Gallery,
  CuredBy,
  ContentImage,
  SideMenu,
  HelpBox,
  PageHeader,
  RichTextArticle,
  Metadata,
  OfficeCard,
  GenericCard,
  Dates,
  TextOrBlocks,
  EventLocations,
  Sponsors,
  RelatedItems,
  RichText,
  DocumentoPlaceholderAfterContent,
} from '@italia/components/ItaliaTheme/View';

import { Link } from 'react-router-dom';
import { flattenToAppURL } from '@plone/volto/helpers';
import {
  Icon,
  Chip,
  ChipLabel,
  Card,
  CardBody,
  CardTitle,
} from 'design-react-kit/dist/design-react-kit';

const messages = defineMessages({
  descrizione: {
    id: 'documento_descrizione',
    defaultMessage: 'Descrizione',
  },
  ufficio_responsabile: {
    id: 'documento_ufficio_responsabile',
    defaultMessage: 'Ufficio responsabile',
  },
  autori: {
    id: 'documento_autori',
    defaultMessage: 'Autori',
  },
  licenza_distribuzione: {
    id: 'documento_licenza_distribuzione',
    defaultMessage: 'Licenza di distribuzione',
  },
  ulteriori_informazioni: {
    id: 'ulteriori_informazioni',
    defaultMessage: "Box d'aiuto",
  },
});

/**
 * DocumentoView view component class.
 * @function DocumentoView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const DocumentoView = ({ content, location }) => {
  const intl = useIntl();
  let documentBody = createRef();
  const [sideMenuElements, setSideMenuElements] = useState(null);

  useEffect(() => {
    if (documentBody.current) {
      if (__CLIENT__) {
        setSideMenuElements(documentBody.current);
      }
    }
  }, [documentBody]);

  return (
    <>
      <div className="container px-4 my-4 newsitem-view">
        <PageHeader
          content={content}
          readingtime={null}
          showtopics={true}
          showtassonomiaargomenti={true}
        />

        {/* HEADER IMAGE */}
        <ContentImage content={content} position="afterHeader" />

        <div className="row border-top row-column-border row-column-menu-left">
          <aside className="col-lg-4">
            {__CLIENT__ && <SideMenu data={sideMenuElements} />}
          </aside>
          <section
            ref={documentBody}
            className="col-lg-8 it-page-sections-container"
          >
            {/* HEADER IMAGE */}
            <ContentImage content={content} position="documentBody" />

            {/* DESCRIZIONE*/}
            <RichTextArticle
              tag_id={'text-body'}
              title={intl.formatMessage(messages.descrizione)}
              show_title={false}
              content={content.descrizione_estesa?.data}
            >
              <Gallery content={content} folder_name={'multimedia'} />

              <Modules content={content} />

              {(content.ufficio_responsabile?.length > 0 ||
                content.area_responsabile.length > 0) && (
                <RichTextArticle
                  title={intl.formatMessage(messages.ufficio_responsabile)}
                >
                  <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                    {content.ufficio_responsabile?.length > 0 && (
                      <>
                        {content.ufficio_responsabile.map((item, i) => (
                          <OfficeCard key={item['@id']} office={item} />
                        ))}
                      </>
                    )}
                    {content.area_responsabile?.length > 0 && (
                      <>
                        {content.area_responsabile.map((item, i) => (
                          <OfficeCard key={item['@id']} office={item} />
                        ))}
                      </>
                    )}
                  </div>
                </RichTextArticle>
              )}

              {content.autori?.length > 0 && (
                <CuredBy
                  people={content.autori}
                  title={intl.formatMessage(messages.autori)}
                />
              )}
              {content.licenza_distribuzione?.length > 0 && (
                <div className="mt-5">
                  <h4>{intl.formatMessage(messages.licenza_distribuzione)}</h4>
                  <p>{content.licenza_distribuzione}</p>
                </div>
              )}
            </RichTextArticle>

            {/* ULTERIORI INFORMAZIONI */}
            <Metadata content={content}>
              {content?.ulteriori_informazioni?.data?.replace(
                /(<([^>]+)>)/g,
                '',
              ) !== '' && (
                <>
                  {content?.ulteriori_informazioni?.data?.replace(
                    /(<([^>]+)>)/g,
                    '',
                  ) && <HelpBox text={content?.ulteriori_informazioni} />}
                </>
              )}
            </Metadata>
          </section>
        </div>
      </div>
      <DocumentoPlaceholderAfterContent content={content} />
      <RelatedItems content={content} />
    </>
  );
};
/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
DocumentoView.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.object,
    image_caption: PropTypes.string,
    items: PropTypes.array,
    modified: PropTypes.string,
    tassonomia_argomenti: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        token: PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default DocumentoView;
