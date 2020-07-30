import {LOAD_CURRENT_USER, SET_USER} from "./actionTypes";


export const loadUser = () => {
    return {
        type: LOAD_CURRENT_USER
    }
};

export const login = (request) => {
    return {
        type: SET_USER,
        request
    }
};
