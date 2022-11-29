/**
 * FaqFolderTree view component.
 * @module components/theme/View/FaqFolderTree
 */

import React, { useState } from 'react';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { TextOrBlocks } from 'design-comuni-plone-theme/components/ItaliaTheme/View';
import { UniversalLink } from '@plone/volto/components';
import { Accordion, AccordionHeader, AccordionBody } from 'design-react-kit';

/**
 * FaqFolderTree view component class.
 * @function FaqFolderTree
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */

const FaqFolderTree = ({ tree }) => {
  const FaqFolder = ({ item, level = 0 }) => {
    const [itemOpened, setItemOpened] = useState(null);
    let title = (
      <UniversalLink item={item}>
        {item.icon && <Icon icon={item.icon} />}
        {item.title}
      </UniversalLink>
    );

    const children_folders =
      item.items?.filter((i) => i['@type'] === 'FaqFolder') || [];
    const children_faq = item.items?.filter((i) => i['@type'] === 'Faq') || [];

    return (
      <div className={`faq-folder level-${level}`}>
        {level > 0 && (
          <>
            {level === 1 && <h2 className="folder-title">{title}</h2>}
            {level === 2 && <h3 className="folder-title">{title}</h3>}
            {level === 3 && <h4 className="folder-title">{title}</h4>}
            {level === 4 && <h5 className="folder-title">{title}</h5>}
            {level === 5 && <h6 className="folder-title">{title}</h6>}

            {item.description && (
              <div className="folder-description">{item.description}</div>
            )}
          </>
        )}

        {item.items?.length > 0 && (
          <>
            {children_faq?.length > 0 && (
              <Accordion>
                {children_faq.map((r) => {
                  const isOpen = itemOpened === r['@id'];
                  return (
                    <div className="faq" key={r['@id']}>
                      <AccordionHeader
                        active={isOpen}
                        onToggle={(a, b) => {
                          isOpen
                            ? setItemOpened(null)
                            : setItemOpened(r['@id']);
                        }}
                        tag="button"
                        aria-controls={`faq-${r.UID}`}
                        id={`header-${r.UID}`}
                      >
                        {r.title}
                      </AccordionHeader>
                      <AccordionBody
                        active={isOpen}
                        id={`faq-${r.UID}`}
                        aria-labelledby={`header-${r.UID}`}
                        aria-hidden={!isOpen}
                        role="region"
                      >
                        {r.description?.length > 0 && (
                          <div className="faq-description">{r.description}</div>
                        )}
                        <div className="faq-text">
                          <TextOrBlocks content={r} />
                        </div>
                      </AccordionBody>
                    </div>
                  );
                })}
              </Accordion>
            )}
          </>
        )}

        {children_folders.map((r) => (
          <FaqFolder key={r['@id']} item={r} level={level + 1} />
        ))}
      </div>
    );
  };

  return (
    <div className="faq-tree">
      <FaqFolder item={tree} />
    </div>
  );
};

export default FaqFolderTree;
