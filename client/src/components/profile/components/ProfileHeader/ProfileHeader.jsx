import React, { memo } from 'react';

import ProgressBar from '../../../common/progressBar';
import Image from '../../../common/image';

import defaultAvatar from '../../../../assets/img/defaultAvatar.jpg';

function ProfileHeader(props) {
  const { experience, nickname, avatar } = props;

  return (
    <div className="profile-page__header">
      <div className="wrapper">
        <div className="profile-page__header-container">
          <div className="profile-page__image">
            <Image src={avatar || defaultAvatar} alt="Название" />
          </div>
          <div className="profile-page__header-content">
            <span className="profile-page__name">{ nickname }</span>
            <div className="profile-page__upon">
              <ProgressBar
                max={experience.max}
                current={experience.current}
                lvl={experience.lvl}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(ProfileHeader);
