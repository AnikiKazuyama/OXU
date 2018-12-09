export const types = {
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL'
};

// ACTIONS //
const openModal = ({ modalType, modalProps }) => ({
  type: types.OPEN_MODAL,
  modalType,
  modalProps
});

const closeModal = () => ({
  type: types.CLOSE_MODAL
});

export const actions = {
  openModal,
  closeModal
};
// // // // // // //

// Reducer //
const initialState = {
  modalType: '',
  modalProps: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.OPEN_MODAL:
      return {
        modalProps: action.modalProps,
        modalType: action.modalType
      };
    case types.CLOSE_MODAL:
      return initialState;
    default:
      return state;
  }
};

// // // // // // //
