import * as types from '../types';

const initialState = {
    idToken: null,
    localId: null
};

// Helper func's like this (trick => уловка)
const authenticateUser = (state, payload) => {
    const { idToken, localId } = payload;

    return {
        ...state,
        idToken,
        localId
    };
};

const logoutUser = state => ({
    ...state,
    idToken: null,
    localId: null
});

/**
 * state of global store
 * actual state
 */
export const authReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.AUTHENTICATE_USER:
            return authenticateUser(state, payload);

        case types.LOGOUT_USER:
            return logoutUser(state);
        /**
         * for convenience use helper func's
         *         
        case types.UPDATE_FIRST_NAME_AND_LAST_NAME_AND_AGE:
            return updateFirstNameAndLastNameAndAge;
        case types.'............':
            return '////////////';
        case types.'............':
            return '////////////';
        case types.'............':
            return '////////////';
         */

        default:
            return state;
    }
};
