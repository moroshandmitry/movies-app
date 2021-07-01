import * as types from '../types';

const initialState = {
    firstName: 'John',
    lastName: 'Doe',
    age: 23
};

/**
 * state of global store
 * actual state
 */
export const authReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.UPDATE_FIRST_NAME_AND_LAST_NAME: {
            const { newFirstName, newLastName } = payload;

            return {
                ...state,
                firstName: newFirstName,
                lastName: newLastName
            };
        }

        default:
            return state;
    }
};
