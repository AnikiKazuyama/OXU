import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProfileHeader from '../components/ProfileHeader';
// import ProfileContentLeft from './ProfileContentLeft';
import ProfileContentCenter from '../components/ProfileContentCenter';

import Card from '../../common/card';
import Hero from '../../common/hero';
import Navigation, { NavItem } from '../../common/navigation';

import withWrapper from '../../../HOC/withWrapper';

import '../resources/style/index.scss';

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
    const {
      experience,
      hero,
      nickname,
      avatar
    } = this.props.profile;

    return (
      <div className="profile-page">
        <Hero url={hero} />
        <ProfileHeader
          experience={experience}
          nickname={nickname}
          avatar={avatar}
        />
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
