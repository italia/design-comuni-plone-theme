import React from 'react';
import { getFileViewFormat } from 'design-comuni-plone-theme/helpers';
import cx from 'classnames';

const EnhanceLink = ({
  enhanced_link_infos,
  hideFileFormat = false,
  className,
  aria_label,
}) => {
  let children = <></>;
  let aria_label_extended = null;
  let size = enhanced_link_infos.getObjSize ?? enhanced_link_infos.size;

  if (enhanced_link_infos) {
    const viewFormat = getFileViewFormat(enhanced_link_infos);
    children = (
      <span className={cx('enhance-link', { [className]: className })}>
        {' ('}
        {!hideFileFormat && (
          <>
            <span className="file-format">{viewFormat.label}</span> -{' '}
          </>
        )}
        <span className="file-size">{size}</span>
        {')'}
      </span>
    );

    aria_label_extended =
      (aria_label ? aria_label + ' - ' : '') +
      '(' +
      viewFormat.label +
      ') ' +
      size;
  }

  return { children, aria_label: aria_label_extended };
};

export default EnhanceLink;
