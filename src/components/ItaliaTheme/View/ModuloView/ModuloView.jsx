/**
 * ModuloView view component.
 * @module components/theme/View/ModuloView
 */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getContent, resetContent } from '@plone/volto/actions';
import { flattenToAppURL } from '@plone/volto/helpers';
import {
  PageHeader,
  RelatedItems,
  PagePlaceholderAfterContent,
  TextOrBlocks,
  DownloadFileFormat,
  RelatedItemInEvidence,
} from '@italia/components/ItaliaTheme/View';
import { defineMessages, useIntl } from 'react-intl';
import cx from 'classnames';

/**
 * ModuloView view component class.
 * @function ModuloView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */

const messages = defineMessages({
  file_principale: {
    id: 'modulo_file_principale',
    defaultMessage: 'File principale',
  },
  formati_alternativi: {
    id: 'modulo_formati_alternativi',
    defaultMessage: 'Formati alternativi',
  },
});

const ModuloView = ({ content }) => {
  const intl = useIntl();

  return (
    <>
      <div className="container px-4 my-4 modulo-view">
        <PageHeader content={content} />

        <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
          <div className="genericcard card card-teaser shadow p-4 mt-3 rounded">
            <div className="card-body">
              <h5 className="card-title">
                {intl.formatMessage(messages.file_principale)}
              </h5>
              <DownloadFileFormat
                file={content.file_principale}
                iconSize="2x"
              />
            </div>
          </div>
          {(content.formato_alternativo_1 || content.formato_alternativo_2) && (
            <div className="genericcard card card-teaser shadow p-4 mt-3 rounded">
              <div className="card-body">
                <h5 className="card-title">
                  {intl.formatMessage(messages.formati_alternativi)}
                </h5>
                {content.formato_alternativo_1 && (
                  <DownloadFileFormat
                    file={content.formato_alternativo_1}
                    iconSize="2x"
                    className="mr-4"
                  />
                )}
                {content.formato_alternativo_2 && (
                  <DownloadFileFormat
                    file={content.formato_alternativo_2}
                    iconSize="2x"
                  />
                )}
              </div>
            </div>
          )}
        </div>
        <TextOrBlocks content={content} />
      </div>

      <PagePlaceholderAfterContent content={content} />
      <RelatedItems content={content} />
      <RelatedItemInEvidence content={content} />
    </>
  );
};

export default ModuloView;
