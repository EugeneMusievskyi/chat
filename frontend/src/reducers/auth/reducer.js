import {loadUserRoutine, registerRoutine, loadCurrentUserRoutine} from "../../sagas/auth/routines";


const authReducer = (state = {}, action) => {
    switch (action.type) {
        case loadUserRoutine.SUCCESS:
        case registerRoutine.SUCCESS: {
            return {
                ...state,
                user: action.user
            }
        }
        case loadCurrentUserRoutine.SUCCESS: {
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
};

export default authReducer;
