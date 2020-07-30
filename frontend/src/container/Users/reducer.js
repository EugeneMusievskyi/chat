import {LOAD_ALL_USERS_SUCCESS, LOAD_USER_SUCCESS} from "./actionTypes";


export default function(state = {}, action) {
    switch (action.type) {
        case LOAD_ALL_USERS_SUCCESS: {
            return {
                ...state,
                users: action.users
            }
        }
        case LOAD_USER_SUCCESS: {
            return {
                ...state,
                loadedUser: action.user
            }
        }
        default: {
            return state;
        }
    }

}
