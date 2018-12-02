import React from 'react';
import Button from '../../view/common/button';

import types from '../manga/mangaContentCenter';

const items = [
  {
    id: types.chapters,
    exact: true,
    href: '/manga',
    content: <Button>Chapters</Button>
  },
  {
    id: types.comments,
    href: '/manga/comments',
    content: <Button>Comments</Button>
  },
  {
    id: types.reviews,
    href: '/manga/reviews',
    content: <Button>Reviews</Button>
  }
];

export default items;
