import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Chapters from './chapters';
import Reviews from './reviews';
import Comments from '../../../containers/commentsContainer';

import Card from '../../common/card';
import Navigation, { NavItem } from '../../common/navigation';

function MangaContentCenter() {
  return (
    <div className="manga__content-center">
      <Card shadow>
        <Navigation>
          <NavItem
            exact
            id="chapters"
            href="/manga"
          >
            Chapters
          </NavItem>
          <NavItem
            exact
            id="reviews"
            href="/manga/reviews"
          >
            Reviews
          </NavItem>
          <NavItem
            exact
            id="comments"
            href="/manga/comments"
          >
            Comments
          </NavItem>
        </Navigation>
      </Card>
      <Card shadow>
        <div className="manga__main">
          <Switch>
            <Route exact path="/manga" component={Chapters} />
            <Route path="/manga/comments" component={Comments} />
            <Route path="/manga/reviews" component={Reviews} />
            <Route component={Chapters} />
          </Switch>
        </div>
      </Card>
    </div>
  );
}

export default MangaContentCenter;
