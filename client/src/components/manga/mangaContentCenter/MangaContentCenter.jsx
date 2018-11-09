import React, { Component } from 'react';

import Card from '../../common/card';

import navItems from '../../../constants/mangaPageNavigation';
import ContentStrategy from './Strategy';
import Navigation from '../../common/navigation';

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
    const SubComponent = this.renderSubComponent();

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
            <SubComponent />
          </div>
        </Card>
      </div>
    );
  }
}

export default MangaContentCenter;
