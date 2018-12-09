import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import specifyModal from './specificModal';
import ReactModal from 'react-modal';

import './style/index.scss';

class Modal extends PureComponent {
  constructor() {
    super();

    this.state = {
      isOpen: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({
        isOpen: nextProps.modalProps.open
      });
    }
  }

  get appElement() {
    return document.getElementById('root');
  }

  handleClose = () => {
    this.setState({ isOpen: false });
  }

  render() {
    const { isOpen } = this.state;
    const { handleClose } = this;
    const { modalType, modalProps } = this.props;

    const SpecifyModal = specifyModal[modalType] || '';

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

export default connect(mapStateToProps, null)(Modal);
