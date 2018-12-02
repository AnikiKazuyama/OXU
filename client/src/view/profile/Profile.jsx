import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProfileHeader from './ProfileHeader';
import ProfileContentLeft from './ProfileContentLeft';
import ProfileContentCenter from './ProfileContentCenter';

import ProfileContent from '../common/panel';
import Hero from '../common/hero';

import withWrapper from '../../HOC/withWrapper';

import cloudsImage from '../../../public/imgs/clouds.jpg';
import './style/index.scss';

const ProfileContentWithWrapper = withWrapper(ProfileContent);

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
        <ProfileContentWithWrapper
          containerClassName="profile-page__content"
          left={<ProfileContentLeft />}
          center={<ProfileContentCenter />}
        />
      </div>
    );
  }
}

export default Profile;
