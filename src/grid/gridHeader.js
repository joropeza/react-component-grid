import React, { PropTypes } from 'react';
import map from 'lodash/map';

const renderColumnHeaders = columns => (
    map(columns, (column, i) => {
        const flexSize = column.flexGrow || '1';
        const flexShrink = column.flexShrink || '0';
        const flexBasis = column.flexBasis || '0px';
        const style = { flex: `${flexSize} ${flexShrink} ${flexBasis}` };
        return (
          <div key={i} style={{ ...column.style, ...style }}>
            {column.header}
          </div>
        );
    })
);

const GridHeaderComponent = props => {
    const { columns, headerClass } = props;
    const headerColumns = renderColumnHeaders(columns);
    return (
      <div className={headerClass} style={{ display: 'flex' }}>
        {headerColumns}
      </div>
    );
};

GridHeaderComponent.propTypes = {
    columns: PropTypes.array.isRequired,
    headerClass: PropTypes.string.isRequired
};

export default GridHeaderComponent;
