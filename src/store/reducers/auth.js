import * as types from '../types';

const initialState = {
    firstName: 'John',
    lastName: 'Doe',
    age: 23
};

// Helper func's like this (trick => уловка)
const updateFirstNameAndLastName = (state, payload) => {
    const { newFirstName, newLastName } = payload;

    return {
        ...state,
        firstName: newFirstName,
        lastName: newLastName
    };
};

/**
 * state of global store
 * actual state
 */
export const authReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.UPDATE_FIRST_NAME_AND_LAST_NAME:
            return updateFirstNameAndLastName(state, payload);
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
