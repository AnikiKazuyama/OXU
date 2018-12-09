import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProfileHeader from './ProfileHeader';
// import ProfileContentLeft from './ProfileContentLeft';
import ProfileContentCenter from './ProfileContentCenter';

import Card from '../common/card';
import ProfileContent from '../common/panel';
import Hero from '../common/hero';
import Navigation, { NavItem } from '../common/navigation';

import withWrapper from '../../HOC/withWrapper';

import cloudsImage from '../../../public/imgs/clouds.jpg';
import './style/index.scss';

const ProfileContentWithWrapper = withWrapper(ProfileContentCenter);
const NavigationWithWrapper = withWrapper(Navigation);

class Profile extends Component {
  static propTypes = {
    profile: PropTypes.shape()
  }

  static defaultProps = {
    profile: {}
  }

  componentDidMount() {}

  render() {
    return (
      <div className="profile-page">
        <Hero url={cloudsImage} />
        <ProfileHeader />
        <Card className="profile-page__navigation">
          <NavigationWithWrapper>
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
          </NavigationWithWrapper>
        </Card>

        <ProfileContentWithWrapper
          containerClassName="profile-page__content"
          left={null}
          center={<ProfileContentWithWrapper />}
        />
      </div>
    );
  }
}

export default Profile;
