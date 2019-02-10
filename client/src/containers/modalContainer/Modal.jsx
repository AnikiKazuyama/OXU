import React, { PureComponent } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ReactModal from 'react-modal';
import specifyModal from './specificModal';

import { actions } from '../../redux/modules/modal';

import './style/index.scss';

const blank = () => null;
class Modal extends PureComponent {
  get appElement() {
    return document.getElementById('root');
  }

  handleClose = () => {
    const { closeModal } = this.props;
    closeModal();
  }

  render() {
    const { handleClose } = this;
    const { modalType, modalProps, isOpen } = this.props;
    console.log(modalType)
    const SpecifyModal = specifyModal[modalType] || blank;

    return (
      <ReactModal
        className="modal"
        overlayClassName="modal__overlay modal--center"
        appElement={this.appElement}
        onRequestClose={handleClose}
        isOpen={isOpen}
        {...this.props}
      >
        <SpecifyModal {...modalProps} onClose={this.handleClose} />
      </ReactModal>
    );
  }
}

const mapStateToProps = state => (
  { ...state.modal }
);


const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    closeModal: actions.closeModal,
    openModal: actions.openModal
  },
  dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
