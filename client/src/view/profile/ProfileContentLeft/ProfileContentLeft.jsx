import React, { PureComponent } from 'react';

import Navigation from '../../common/navigation';
import Card from '../../common/card';

import navigationItems from '../../../constants/profileNavigation';

class ProfileContentLeft extends PureComponent {
  componentDidMount(){}

  render() {
    return (
      <Card className="profile-page__content-left">
        <Navigation items={navigationItems} isHorizontal />
      </Card>
    );
  }
}

export default ProfileContentLeft;
