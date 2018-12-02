import React from 'react';

import Accordion from '../../common/accordion';
import Navigation, { NavItem } from '../../common/navigation';
import Card from '../../common/card';

function ProfileContentLeft() {
  return (
    <Card className="profile-page__content-left">
      <Navigation horizontal>
        <NavItem
          exact
          id="achivments"
          href="/im/achivments"
        >
          Achivments
        </NavItem>
        <NavItem id="bookmarks">
          <Accordion simple headerClassName="profile-menu" title="Bookmarks">
            <Navigation horizontal>
              <NavItem href="/im/bookmarks/favorite">Favorite</NavItem>
              <NavItem href="/im/bookmarks/process">In process</NavItem>
              <NavItem href="/im/bookmarks/done">Done</NavItem>
            </Navigation>
          </Accordion>
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
