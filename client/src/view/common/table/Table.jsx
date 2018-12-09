import React from 'react';

import RTabel from 'react-table';
// import 'react-table/react-table.css';

import './style/index.scss';

function Table(props) {
  const { data, columns } = props;
  const columnConfig = {
    // Renderers
    Cell: undefined,
    Header: undefined,
    Footer: undefined,
    Aggregated: undefined,
    Pivot: undefined,
    PivotValue: undefined,
    Expander: undefined,
    Filter: undefined,
    // Standard options
    sortable: undefined, // use table default
    resizable: undefined, // use table default
    filterable: undefined, // use table default
    show: true,
    minWidth: 1,
    // Cells only
    className: '',
    style: { flex: '1 0 auto' },
    getProps: () => ({}),
    // Headers only
    headerClassName: '',
    headerStyle: {},
    getHeaderProps: () => ({}),
    // Footers only
    footerClassName: '',
    footerStyle: {},
    getFooterProps: () => ({}),
    filterAll: false,
    filterMethod: undefined,
    sortMethod: undefined,
    defaultSortDesc: undefined
  };

  return (
    <RTabel
      data={data}
      columns={columns}
      showPagination={false}
      resizable={false}
      sortable={false}
      defaultPageSize={10}
      pageSize={data.length}
      column={columnConfig}
      {...props}
    />
  );
}

export default Table;
