import React from 'react';

import Achivment from '../../../common/achivment';

import zoro from '../../../../../public/imgs/zoro-achiv.png';
import nami from '../../../../../public/imgs/nami_achiv.png';
import ussop from '../../../../../public/imgs/usopp_achiv.png';
import sanji from '../../../../../public/imgs/sanji_achiv.png';
import chopper from '../../../../../public/imgs/chopper_achiv.png';

import './style/index.scss';

function Achivments() {
  return (
    <div className="achivments">
      <div className="achivments__inner">
        <div className="achivments__item">
          <Achivment
            name="Welcome to the team Zoro"
            icon={zoro}
            exp={3}
            description="Read up to the moment of joining Zoro team"
            status={{ current: 50, total: 3 }}
          />
        </div>
        <div className="achivments__item">
          <Achivment
            name="Welcome to the team Nami"
            icon={nami}
            exp={5}
            description="Read up to the moment of joining Nami team"
            status={{ current: 50, total: 8 }}
          />
        </div>
        <div className="achivments__item">
          <Achivment
            name="Welcome to the team Ussop"
            icon={ussop}
            exp={8}
            description="Read up to the moment of joining Ussop team"
            status={{ current: 50, total: 23 }}
          />
        </div>
        <div className="achivments__item">
          <Achivment
            name="Welcome to the team Sanji"
            icon={sanji}
            exp={15}
            description="Read up to the moment of joining Sanji team Read up to the moment of joining Sanji team Read up to the moment of joining Sanji team"
            status={{ current: 50, total: 43 }}
          />
        </div>
        <div className="achivments__item">
          <Achivment
            name="Welcome to the team Chopper"
            icon={chopper}
            exp={27}
            description="Read up to the moment of joining Chopper team"
            status={{ current: 50, total: 142 }}
          />
        </div>
      </div>
    </div>
  );
}

export default Achivments;
