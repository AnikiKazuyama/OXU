import React from 'react';

import Img from '../../../../common/image';
import Button from '../../../../common/button';

import './style/index.scss';

function Modal(props) {
  const { title, hero, preview } = props;

  const style = {
    backgroundImage: `url(${hero})`
  };

  return (
    <div className="bookmarks-modal">
      <div className="bookmarks-modal__header" style={style}>
        <div className="bookmarks-modal__header-content">
          <Img src={preview} />
          <span className="bookmarks-modal__title">{title}</span>
          <Button color="blue">Save</Button>
          <Button color="red">Add to favorite</Button>
        </div>
      </div>

      <div className="bookmarks-modal__body">
        <div>BODY</div>
      </div>
    </div>
  );
}

export default Modal;
