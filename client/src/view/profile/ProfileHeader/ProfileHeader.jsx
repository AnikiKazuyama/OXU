import React from 'react';

import ProgressBar from '../../common/progressBar';
import Image from '../../common/image';

import defaultAvatar from '../../../assets/img/defaultAvatar.jpg';

function ProfileHeader() {
  return (
    <div className="profile-page__header">
      <div className="wrapper">
        <div className="profile-page__header-container">
          <div className="profile-page__image">
            <Image src={defaultAvatar} alt="Название" />
          </div>
          <div className="profile-page__header-content">
            <span className="profile-page__name">Aniki</span>
            <div className="profile-page__upon">
              <ProgressBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
