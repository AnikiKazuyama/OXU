import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { actions } from '../../../redux/modal';

function withModalOpen(Component) {
  return (props) => {
    const handleClick = ({ modalProps, modalType }) => {
      props.openModal(
        modalProps,
        modalType
      );
    };

    return <Component {...props} openModal={handleClick} />;
  };
}

const mapDispatchToProps = dispatch => ({
  openModal: (modalProps, modalType) => {
    dispatch(actions.openModal({ modalProps, modalType }));
  }
});

const composedWithOpenModal = compose(
  connect(null, mapDispatchToProps),
  withModalOpen
);

export default composedWithOpenModal;
