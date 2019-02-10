import { createAction, handleActions } from 'redux-actions';

export const types = {
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL'
};

// ACTIONS //
const openModal = createAction(
  types.OPEN_MODAL,
  ({ modalType, modalProps }) => ({ modalType, modalProps })
);

const closeModal = createAction(types.CLOSE_MODAL);

export const actions = {
  openModal,
  closeModal
};


// Reducer //
const initialState = {
  isOpen: false,
  modalType: '',
  modalProps: {}
};

function handleModalOpen(state, { payload }) {
  return ({
    ...state,
    isOpen: true,
    modalProps: payload.modalProps,
    modalType: payload.modalType
  });
}

function handleModalClose() {
  return ({ ...initialState });
}

const modalReducer = handleActions(
  new Map([
    [actions.openModal, handleModalOpen],
    [actions.closeModal, handleModalClose]
  ]),
  initialState
);

export default modalReducer;
