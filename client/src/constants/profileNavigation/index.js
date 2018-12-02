import React from 'react';
import Accordion from '../../view/common/accordion';
import Navigation, { NavItem } from '../../view/common/navigation';

const items = [
  {
    id: 'achivments',
    exact: true,
    content: 'Achivments',
    href: '/im/achivments'
  },
  {
    id: 'bookmarks',
    content: <Accordion headerClassName="profile-menu" title="bookmarks" simple>
                <Navigation isHorizontal>
                  <NavItem href="/im/bookmarks/favorite">Favorite</NavItem>
                  <NavItem href="/im/bookmarks/process">In process</NavItem>
                  <NavItem href="/im/bookmarks/done">Done</NavItem>
                </Navigation>
             </Accordion>,
  },
  {
    id: 'recentActivities',
    content: 'Recent activity',
    href: '/im/activity'
  },
  {
    id: 'settings',
    content: 'Settings',
    href: '/im/settings'
  }
];

export default items;
