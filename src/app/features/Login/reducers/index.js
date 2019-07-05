import * as actionTypes from "features/Login/assets/actionTypes";

const initialState = {
    userName: "",
    password: "",
    authDetails: {}
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_INPUT:
            const { id, value } = action.payload;
            state = { ...initialState, ...state, [id]: value }
            break;

        case actionTypes.SUBMIT_LOGIN:
            state = { ...initialState, ...state, loading: true }
            break;

        case `${actionTypes.SUBMIT_LOGIN}_FULFILLED`:
            state = { ...initialState, ...state, authDetails: action.payload, loading: false }
            break;

        case `${actionTypes.SUBMIT_LOGIN}_REJECTED`:
            state = { ...initialState, ...state, authDetails: action.payload, loading: false }
            break;

        case actionTypes.HIDE_ERROR:
            state = { ...initialState, ...state, authDetails: {} };
            break;
    };
    return state;
}
