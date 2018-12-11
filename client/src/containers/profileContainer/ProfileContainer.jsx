import React, { PureComponent } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProfile, actions as profileActions } from '../../redux/modules/profile';

import withLoading from '../../HOC/withLoading';

import Profile from '../../view/profile';

class ProfileContainer extends PureComponent {
  render() {
    const { profile } = this.props;
    return (
      <Profile profile={profile} />
    );
  }
}

const mapStateToProps = state => ({
  profile: getProfile(state)
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    load: profileActions.loadProfile
  },
  dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(withLoading(ProfileContainer, 'profile'));
