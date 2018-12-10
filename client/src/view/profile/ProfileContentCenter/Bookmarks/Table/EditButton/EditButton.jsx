import React from 'react';
import PropTypes from 'prop-types';

import Img from '../../../../../common/image';
import modalTypes from '../../../../../../constants/modalTypes';
import withModalOpen from '../../../../../../containers/modalContainer/HOC/withModalOpen';

function EditButton(props) {
  const handleClick = () => {
    props.openModal({
      modalProps: { ...props.modalProps },
      modalType: modalTypes.BOOKMARK
    });
  };

  return (
    <div>
      <div onClick={handleClick} className="bookmark-table__button" role="button" tabIndex="0" />
      <Img className="bookmark-table__preview" src={props.src} />
    </div>
  );
}

EditButton.propTypes = {
  src: PropTypes.string,
  openModal: PropTypes.func,
  modalProps: PropTypes.shape({
    title: PropTypes.string,
    hero: PropTypes.string,
    preview: PropTypes.string,
    onClose: PropTypes.func
  })
};

EditButton.defaultProps = {
  src: '',
  openModal: () => null,
  modalProps: {}
};

export default withModalOpen(EditButton);
