import { LOGIN } from './actionTypes';

const initialState = {
    isLoggedIn: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLoggedIn: true,
            };
        default:
            return state;
    }
};

export default reducer;