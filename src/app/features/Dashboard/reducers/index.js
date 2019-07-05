import * as actionTypes from 'features/Dashboard/assets/actionTypes';

const initialState = {
  userData: [],
  error: {}
};

export const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_DATA:
      state = { ...initialState, ...state, loading: true };
      break;

    case `${actionTypes.GET_USER_DATA}_FULFILLED`:
      state = {
        ...initialState,
        ...state,
        userData: action.payload,
        loading: false
      };
      break;

    case `${actionTypes.GET_USER_DATA}_REJECTED`:
      state = {
        ...initialState,
        ...state,
        error: action.payload,
        loading: false
      };
      break;
  }
  return state;
};
