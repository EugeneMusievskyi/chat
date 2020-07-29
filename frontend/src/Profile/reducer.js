import {LOAD_USER_SUCCESS} from "./actionTypes";

export default function(state = {}, action) {
    switch (action.type) {
        case LOAD_USER_SUCCESS: {
            return {
                ...state,
                user: action.payload.user,
                isAuthorized: Boolean(action.payload.user?.id)
            }
        }
        default: {
            return state;

        }
    }
}
