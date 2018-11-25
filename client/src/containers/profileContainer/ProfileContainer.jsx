import React, { PureComponent } from 'react';
import Profile from '../../view/profile';

import testUser from './testData';

class ProfileContainer extends PureComponent {
  render() {
    return (
      <Profile profile={testUser} />
    );
  }
}

export default ProfileContainer;
