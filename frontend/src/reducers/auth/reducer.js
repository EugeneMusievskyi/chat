import {registerRoutine, loadCurrentUserRoutine, loginRoutine} from "../../sagas/auth/routines";


const authReducer = (state = {}, action) => {
    switch (action.type) {
        case loadCurrentUserRoutine.SUCCESS: {
            return {
                ...state,
                user: action.payload,
            }
        }
        case loginRoutine.SUCCESS: {
            return {
                ...state,
                user: action.payload,
                isLoginSuccess: true
            }
        }
        case loginRoutine.FAILURE: {
            return {
                ...state,
                error: {
                    login: action.payload
                }
            }
        }
        case registerRoutine.SUCCESS: {
            return {
                ...state,
                user: action.payload,
                isRegisteredSuccess: true
            }
        }
        case registerRoutine.FAILURE: {
            return {
                ...state,
                error: {
                    registration: action.payload
                }
            }
        }
        default: {
            return state;
        }
    }
};

export default authReducer;
