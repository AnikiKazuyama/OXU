import React, { PureComponent, Fragment } from 'react';

import Modal from '../../../../containers/modalContainer';
import Table from './Table';

class Bookmarks extends PureComponent {
  renderTables() {
    const { bookmarks } = this.props;
    const bookmarksKeys = Object.keys(bookmarks);

    return bookmarksKeys.map(key => (
      <Table
        title={bookmarks[key].title}
        data={bookmarks[key].items}
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
