import USER_ACTION_TYPES from './UserActionTypes';
import {createAction} from '../../utils/Reducer';

export const setCurrentUser = (user) => {
    // Remove non-serializable properties from user object
    const serializableUser = user ? {
        id: user.id,
        username: user.username,
        email: user.email,
        displayName: user.displayName
        // Add other serializable properties as needed
    } : null;


    return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, serializableUser);
};

export const signOutUser = () => {
    // Perform any necessary cleanup, e.g., sign out from Firebase
    // Then dispatch the sign-out action
    return {
        type: USER_ACTION_TYPES.SIGN_OUT_USER,
    };
};