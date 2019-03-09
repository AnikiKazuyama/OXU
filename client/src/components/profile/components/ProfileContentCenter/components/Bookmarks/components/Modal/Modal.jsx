import React from 'react';
import PropTypes from 'prop-types';

import Img from '../../../../../../../common/image';
import Button from '../../../../../../../common/button';

import './resources/style/index.scss';

function Modal(props) {
  const {
    title,
    hero,
    preview,
    onClose
  } = props;

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
        <Button onClick={onClose}>Close</Button>
      </div>
    </div>
  );
}

Modal.propTypes = {
  title: PropTypes.string,
  hero: PropTypes.string,
  preview: PropTypes.string,
  onClose: PropTypes.func
};

Modal.defaultProps = {
  title: '',
  hero: '',
  preview: '',
  onClose: () => null
};

export default Modal;
