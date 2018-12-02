import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Achivments from './Achivments';
import RecentActivity from './RecentActivity';
import Bookmarks from './Bookmarks';
import Settings from './Settings';

import Card from '../../common/card';

function ProfileContentCenter() {
  return (
    <Card className="profile-page__content-center">
      <Switch>
        <Route exact path="/im" component={Achivments} />
        <Route path="/im/bookmarks" component={Bookmarks} />
        <Route path="/im/settings" component={Settings} />
        <Route path="/im/recent-activity" component={RecentActivity} />
        <Route component={Achivments} />
      </Switch>
    </Card>
  );
}

export default ProfileContentCenter;
