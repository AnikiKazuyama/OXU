import React from 'react';
import EditButton from '../EditButton';

export default ([
  {
    Header: '',
    accessor: 'preview',
    Cell: cellProps => <EditButton src={cellProps.value} modalProps={cellProps.original} />,
    maxWidth: 60,
    className: 'bookmark-table__preview-cell'
  },
  {
    Header: 'Title',
    accessor: 'title',
    headerClassName: 'bookmark-table__title-col',
    className: 'bookmark-table__title-col'
  },
  {
    Header: 'Chapter',
    accessor: 'current'
  },
  {
    Header: 'Type',
    accessor: 'type'
  }
]);
