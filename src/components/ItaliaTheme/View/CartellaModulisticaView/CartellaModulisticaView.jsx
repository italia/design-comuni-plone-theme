/**
 * CartellaModulisticaView view component.
 * @module components/theme/View/CartellaModulisticaView
 */

import React from 'react';

import {
  PageHeader,
  RelatedItems,
  PagePlaceholderAfterContent,
  TextOrBlocks,
} from '@italia/components/ItaliaTheme/View';
import { defineMessages, useIntl } from 'react-intl';

/**
 * CartellaModulisticaView view component class.
 * @function CartellaModulisticaView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */

const messages = defineMessages({
  // unknownBlock: {
  //   id: 'Unknown Block',
  //   defaultMessage: 'Unknown Block {block}',
  // },
});

const CartellaModulisticaView = ({ content }) => {
  console.log(content);
  return (
    <>
      <div className="container px-4 my-4 newsitem-view">
        <PageHeader content={content} />
        <TextOrBlocks content={content} />
        {content.items.length > 0 && (
          <section className="modulistica">
            {content.items.map((section) => (
              <div className="documents-section">
                <h3>{section.title}</h3>
                {section.blocks?.length > 0 && (
                  <TextOrBlocks content={section} />
                )}
                {section.items_total > 0 && (
                  <div className="documents">
                    <div className="doc-row">
                      <div className="title">titolo</div>
                      <div className="downloads">downloads</div>
                    </div>
                    <div className="doc-row">
                      <div className="title">titolo</div>
                      <div className="downloads">downloads</div>
                    </div>
                    <div className="doc-row">
                      <div className="title">titolo</div>
                      <div className="downloads">downloads</div>
                    </div>
                    <div className="doc-row">
                      <div className="title">titolo</div>
                      <div className="downloads">downloads</div>
                    </div>
                    Qui deve fare la load degli items del figlio, per caricare i
                    documenti e mostrarli
                    {section.items?.map((doc) => (
                      <div className="doc-row">
                        <div className="title">{doc.title}</div>
                        <div className="downloads">downloads</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </section>
        )}
      </div>

      <PagePlaceholderAfterContent content={content} />
      <RelatedItems content={content} />
    </>
  );
};

export default CartellaModulisticaView;
