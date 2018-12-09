import React from 'react';

import Accordion from '../../common/accordion';
import Navigation, { NavItem } from '../../common/navigation';
import Card from '../../common/card';

function ProfileContentLeft() {
  return (
    <Card className="profile-page__content-left" shadow>
      <Navigation horizontal>
        <NavItem
          exact
          id="achivments"
          href="/im"
        >
          Achivments
        </NavItem>
        <NavItem id="bookmarks" href="/im/bookmarks">
          Bookmarks
        </NavItem>
        <NavItem
          id="recentActivities"
          href="/im/recent-activity"
        >
          Recent activity
        </NavItem>
        <NavItem
          id="settings"
          href="/im/settings"
        >
          Settings
        </NavItem>
      </Navigation>
    </Card>
  );
}

export default ProfileContentLeft;
