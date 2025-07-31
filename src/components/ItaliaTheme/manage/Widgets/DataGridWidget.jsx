import React from 'react';
import cx from 'classnames';

const DataGridWidget = ({ value, children, className }) => {
  return value ? (
    <span className={cx(className, 'array', 'widget')}>
      {value.map((item, key) =>
        Object.keys(item).length > 0 ? (
          <div>
            {Object.keys(item).map((el) => (
              <div>
                <span className="fw-bold">{el}</span>: <span>{item[el]}</span>
              </div>
            ))}
          </div>
        ) : (
          <></>
        ),
      )}
    </span>
  ) : (
    ''
  );
};

export default DataGridWidget;
