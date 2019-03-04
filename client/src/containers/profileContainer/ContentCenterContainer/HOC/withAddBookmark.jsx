import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { actions } from '../../../../redux/modules/bookmarks';

function withAddBookmark(Component, to) {
  return (props) => {
    const { id, addBookmark, onClick = () => null } = props;
    const handleClick = () => {
      onClick();
      addBookmark(to, id);
    };

    return <Component {...props} onClick={handleClick} />;
  };
}

const mapDispatchToProps = dispatch => ({
  addBookmark: (to, id) => {
    dispatch(actions.addBookmark(to, id));
  }
});

const composedWithAddBookmark = compose(
  connect(null, mapDispatchToProps),
  withAddBookmark
);

export default composedWithAddBookmark;
