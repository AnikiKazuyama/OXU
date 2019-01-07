import React, { memo } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBookmarks, actions as bookmarksActions } from '../../../redux/modules/bookmarks';

import Bookmarks from '../../../view/profile/ProfileContentCenter/Bookmarks';

import withLoading from '../../../HOC/withLoading';

function BookmarksContainer(props) {
  const { bookmarks } = props;
  return (
    <Bookmarks bookmarks={bookmarks} />
  );
}

const mapStateToProps = state => ({
  bookmarks: getBookmarks(state),
  status: state.bookmarks.status
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    load: bookmarksActions.loadBookmarks
  }, dispatch)
});

const BookmarksWithLoading = withLoading(BookmarksContainer, { cached: false, name: 'Bookmarks' });

export default connect(mapStateToProps, mapDispatchToProps)(memo(BookmarksWithLoading));
