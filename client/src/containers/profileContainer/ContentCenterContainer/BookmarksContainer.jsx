import React from 'react';

import Bookmarks from '../../../view/profile/ProfileContentCenter/Bookmarks';
import { bookmarksData } from '../testData';

function BookmarksContainer(props) {
  return (
    <Bookmarks bookmarks={bookmarksData} />
  );
}

export default BookmarksContainer;
