import React, { useEffect, useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { Modal, ModalBody, Button, ModalHeader } from 'design-react-kit';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';
import Image from '@plone/volto/components/theme/Image/Image';

const messages = defineMessages({
  view_prev: {
    id: 'gallery_view_prev',
    defaultMessage: 'Immagine precedente',
  },
  view_next: {
    id: 'gallery_view_next',
    defaultMessage: 'Immagine successiva',
  },
  close_preview: {
    id: 'gallery_close_preview',
    defaultMessage: "Chiudi l'anteprima",
  },
});

/**
 * GalleryPreview view component class.
 * @function GalleryPreview
 * @params {object} content Content object.
 * @params {string} folder name where to find images.
 * @returns {string} Markup of the component.
 */
const GalleryPreview = ({ id, viewIndex, setViewIndex, items }) => {
  const intl = useIntl();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const image = items[viewIndex];

  const closeModal = () => {
    setViewIndex(null);
  };

  useEffect(() => {
    if (viewIndex != null) {
      setModalIsOpen(true);
    } else {
      setModalIsOpen(false);
    }
  }, [viewIndex]);

  return items?.length > 0 ? (
    <Modal
      isOpen={modalIsOpen}
      wrapClassName="public-ui"
      id={`gallery-preview-${id}`}
      size="xl"
      className="gallery-preview"
      onExit={() => {
        setViewIndex(null);
        setModalIsOpen(false);
      }}
      backdrop="static"
      centered={true}
      toggle={closeModal}
      scrollable={false}
    >
      {viewIndex != null && (
        <>
          <ModalHeader
            closeAriaLabel={intl.formatMessage(messages.close_preview)}
            toggle={closeModal}
          >
            {image.title}
          </ModalHeader>
          <ModalBody>
            {image.description && <p className="pb-3">{image.description}</p>}
            <div className="item-preview">
              {items.length > 1 && (
                <Button
                  color="white"
                  size="xs"
                  title={intl.formatMessage(messages.view_prev)}
                  onClick={() => {
                    setViewIndex(
                      viewIndex - 1 >= 0 ? viewIndex - 1 : items.length - 1,
                    );
                  }}
                  className="prev"
                >
                  <Icon color="" icon="it-arrow-left" padding={false} />
                </Button>
              )}

              {image && (
                <Image key={image['@id']} item={image} alt={image.title} />
              )}

              {items.length > 1 && (
                <Button
                  color="white"
                  size="xs"
                  title={intl.formatMessage(messages.view_next)}
                  onClick={() => {
                    setViewIndex(
                      viewIndex + 1 < items.length ? viewIndex + 1 : 0,
                    );
                  }}
                  className="next"
                >
                  <Icon color="" icon="it-arrow-right" padding={false} />
                </Button>
              )}
            </div>
          </ModalBody>
        </>
      )}
    </Modal>
  ) : null;
};

export default GalleryPreview;

GalleryPreview.propTypes = {
  id: PropTypes.string,
  viewIndex: PropTypes.number,
  setViewIndex: PropTypes.func,
  items: PropTypes.array,
};
