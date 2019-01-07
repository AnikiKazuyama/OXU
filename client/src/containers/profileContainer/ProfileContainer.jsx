import React, { PureComponent } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProfile, actions as profileActions } from '../../redux/modules/profile';

import Profile from '../../view/profile';

import withLoading from '../../HOC/withLoading';

class ProfileContainer extends PureComponent {
  render() {
    const { profile } = this.props;
    return (
      <Profile profile={profile} />
    );
  }
}

const mapStateToProps = state => ({
  profile: getProfile(state),
  status: state.profile.status
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    load: profileActions.loadProfile
  },
  dispatch)
});

const ProfileWithLoading = withLoading(ProfileContainer, { cached: true, name: 'Profile' });

export default connect(mapStateToProps, mapDispatchToProps)(ProfileWithLoading);
