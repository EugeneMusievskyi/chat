import {registerRoutine, loadCurrentUserRoutine} from "../../sagas/auth/routines";


const authReducer = (state = {}, action) => {
    switch (action.type) {
        case loadCurrentUserRoutine.TRIGGER: {
            return {
                ...state,
                isLoading: true
            };
        }
        case loadCurrentUserRoutine.SUCCESS:
        case registerRoutine.SUCCESS: {
            return {
                ...state,
                user: action.payload,
                isLoading: false
            }
        }
        case loadCurrentUserRoutine.FAILURE: {
            return {
                ...state,
                isLoading: false
            }
        }
        default: {
            return state;
        }
    }
};

export default authReducer;
