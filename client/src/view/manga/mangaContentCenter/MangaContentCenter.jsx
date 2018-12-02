import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Chapters from './chapters';
import Reviews from './reviews';
import Comments from '../../../containers/commentsContainer';

import Button from '../../common/button';
import Card from '../../common/card';
import Navigation, { NavItem } from '../../common/navigation';

import navItems from '../../../constants/mangaPageNavigation';

function MangaContentCenter() {
  return (
    <div className="manga__content-center">
      <Card>
        <Navigation>
          <NavItem
            exact
            id="chapters"
            href="/manga"
          >
            <Button>Chapters</Button>
          </NavItem>
          <NavItem
            exact
            id="reviews"
            href="/manga/reviews"
          >
            <Button>Reviews</Button>
          </NavItem>
          <NavItem
            exact
            id="comments"
            href="/manga/comments"
          >
            <Button>Comments</Button>
          </NavItem>
        </Navigation>
      </Card>
      <Card>
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
