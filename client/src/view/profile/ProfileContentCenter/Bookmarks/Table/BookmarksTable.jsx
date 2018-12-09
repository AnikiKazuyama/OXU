import React, { Fragment } from 'react';

import Table from '../../../../common/table';
import Img from '../../../../common/image';

import withModalOpen from '../../../../../HOC/withModalOpen';

import './style/index.scss';

const EditButton = (props) => {
  const handleClick = () => {
    props.onClick({ modalProps: { ...props.original, open: true }, modalType: 'BOOKMARK' });
  };

  return (
    <Fragment>
      <div onClick={handleClick} className="bookmark-table__button" role="button" tabIndex="0" />
      <Img className="bookmark-table__preview" src={props.value} />
    </Fragment>
  );
};

const EditButtonWithModalOpen = withModalOpen(EditButton);
function BookmarksTable(props) {
  const { title, data } = props;

  const columns = ([
    {
      Header: '',
      accessor: 'preview',
      Cell: (props) => <EditButtonWithModalOpen {...props} />,
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

  return (
    <div className="bookmark-table">
      <h3 className="bookmark-table__title">{ title }</h3>
      <Table data={data} columns={columns} />
    </div>
  );
}

export default BookmarksTable;
