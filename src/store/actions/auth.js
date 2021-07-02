// action creater
import * as types from '../types';

export const updateFirstNameAndLastName = (newFirstName, newLastName) => {
    // redux thunk
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: types.UPDATE_FIRST_NAME_AND_LAST_NAME,
                payload: {
                    newFirstName,
                    newLastName
                }
            });
        }, 2000);
    };
};
