import React, { PureComponent, Fragment } from 'react';

import Modal from '../../../../../../modal';
import Table from '../components/Table';

class Bookmarks extends PureComponent {
  renderTables() {
    const { bookmarks } = this.props;

    const bookmarksKeys = Object.keys(bookmarks);

    return bookmarksKeys.map(key => (
      <Table
        title={bookmarks[key].title}
        data={bookmarks[key].items}
        key={key}
      />
    ));
  }

  render() {
    return (
      <Fragment>
        { this.renderTables() }
        <Modal />
      </Fragment>
    );
  }
}

export default Bookmarks;
