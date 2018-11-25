import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Chapters from './chapters';
import Reviews from './reviews';
import Comments from '../../../containers/commentsContainer';

import Card from '../../common/card';
import Navigation from '../../common/navigation';

import navItems from '../../../constants/mangaPageNavigation';
import ContentStrategy from './Strategy';

class MangaContentCenter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeContent: navItems[0].id
    };
  }

  handleClick = (id) => {
    this.setState({
      activeContent: id
    });
  }

  renderSubComponent = () => {
    const { activeContent } = this.state;
    return ContentStrategy.get(activeContent);
  }

  render() {
    return (
      <div className="manga__content-center">
        <Card>
          <Navigation
            items={navItems}
            onNavigation={this.handleClick}
          />
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
}

export default MangaContentCenter;
