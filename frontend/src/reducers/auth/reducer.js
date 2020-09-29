import {registerRoutine, loadCurrentUserRoutine} from "../../sagas/auth/routines";


const authReducer = (state = {}, action) => {
    switch (action.type) {
        case loadCurrentUserRoutine.SUCCESS:
        case registerRoutine.SUCCESS: {
            return {
                ...state,
                user: action.payload
            }
        }
        default: {
            return state;
        }
    }
};

export default authReducer;
