import React, { Fragment } from 'react';

import Table from '../../../../common/table';
import Columns from './Columns';

import './style/index.scss';

function BookmarksTable(props) {
  const { title, data } = props;

  return (
    <div className="bookmark-table">
      <h3 className="bookmark-table__title">{ title }</h3>
      <Table data={data} columns={Columns} />
    </div>
  );
}

export default BookmarksTable;
