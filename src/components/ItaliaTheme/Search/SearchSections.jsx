/**
 * Sections for search
 */
import React, { useState, useEffect } from 'react';
import cx from 'classnames';

import {
  Col,
  FormGroup,
  Label,
  Collapse,
} from 'design-react-kit/dist/design-react-kit';
import { Icon } from '@italia/components/ItaliaTheme';
import { SearchUtils, Checkbox } from '@italia/components';

export default function SearchSections({
  setSections,
  sections,
  cols,
  toggleGroups = false,
}) {
  const [collapse, setCollapse] = useState({});

  useEffect(() => {
    if (Object.keys(collapse).length === 0) {
      let defaultCollapse = {};
      Object.keys(sections).forEach((k) => {
        defaultCollapse[k] = toggleGroups;
      });

      setCollapse(defaultCollapse);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sections]);

  const toggleCollapseGroup = (groupId) => {
    setCollapse((prevCollapse) => ({
      ...prevCollapse,
      [groupId]: !prevCollapse[groupId],
    }));
  };

  return (
    <>
      {Object.keys(sections).map((groupId) => (
        <Col sm={cols ? 12 / cols : 12} key={groupId} className="group-col">
          <FormGroup check tag="div">
            <Checkbox
              id={groupId}
              indeterminate={SearchUtils.isGroupIndeterminate(
                sections[groupId],
                SearchUtils.isGroupChecked(sections[groupId]),
              )}
              checked={SearchUtils.isGroupChecked(sections[groupId])}
              onChange={(e) =>
                SearchUtils.setGroupChecked(
                  groupId,
                  e.currentTarget.checked,
                  setSections,
                )
              }
              aria-controls="search-results-region"
            />

            <Label
              check
              for={groupId}
              tag="label"
              className={cx('group-head', {
                'text-primary': !toggleGroups,
                'font-weight-bold': !toggleGroups,
                indeterminate: SearchUtils.isGroupIndeterminate(
                  sections[groupId],
                  SearchUtils.isGroupChecked(sections[groupId]),
                ),
              })}
              widths={['xs', 'sm', 'md', 'lg', 'xl']}
            >
              {sections[groupId].title}
            </Label>

            {toggleGroups &&
              sections[groupId]?.items &&
              Object.keys(sections[groupId]?.items).length > 0 && (
                <a
                  className="float-right"
                  href={`#section${groupId}Collapse`}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleCollapseGroup(groupId);
                  }}
                  data-toggle="collapse"
                  aria-expanded="false"
                  aria-controls={`section${groupId}Collapse`}
                >
                  <Icon
                    color="primary"
                    icon="it-more-items"
                    padding={false}
                    className="right"
                  />
                </a>
              )}
          </FormGroup>
          {sections[groupId]?.items && (
            <Collapse
              isOpen={collapse[groupId] !== undefined && !collapse[groupId]}
              id={`section${groupId}Collapse`}
            >
              {Object.keys(sections[groupId].items).map((filterId) => (
                <FormGroup
                  check
                  tag="div"
                  key={filterId}
                  className={cx({ 'pl-4': toggleGroups })}
                >
                  <Checkbox
                    id={filterId}
                    checked={sections[groupId].items[filterId].value}
                    onChange={(e) =>
                      SearchUtils.setSectionFilterChecked(
                        groupId,
                        filterId,
                        e.currentTarget.checked,
                        setSections,
                      )
                    }
                    aria-controls="search-results-region"
                  />
                  <Label
                    check
                    for={filterId}
                    tag="label"
                    widths={['xs', 'sm', 'md', 'lg', 'xl']}
                  >
                    {sections[groupId].items[filterId].label}
                  </Label>
                </FormGroup>
              ))}
            </Collapse>
          )}
        </Col>
      ))}
    </>
  );
}
