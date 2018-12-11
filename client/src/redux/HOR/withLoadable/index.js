export const INITIAL_LOADABLE_STATE = {
  error: null,
  isLoading: false,
  success: false
};

export const noopReducer = state => state;

const errorReducer = (state, action) => ({
  ...state,
  error: action.payload,
  isLoading: false,
  success: false
});

const successReducer = state => ({
  ...state,
  error: null,
  isLoading: false,
  success: true
});

const isLoadingReducer = state => ({
  ...state,
  error: null,
  isLoading: true,
  success: false
});

const withLoadable = (actionTypes) => {
  const actionReducerMap = {
    [actionTypes.isLoadingAction]: isLoadingReducer,
    [actionTypes.successAction]: successReducer,
    [actionTypes.errorAction]: errorReducer
  };

  return baseReducer => (state, action) => {
    const reducerFunction = actionReducerMap[action.type] || noopReducer;
    const newState = reducerFunction(state, action);
    return baseReducer(newState, action);
  };
};

export default withLoadable;
