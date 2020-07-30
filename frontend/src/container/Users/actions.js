import {ADD_USER, DELETE_USER, EDIT_USER, LOAD_ALL_USERS, LOAD_USER} from "./actionTypes";

export const getAllUsers = () => {
    return {
        type: LOAD_ALL_USERS
    }
};

export const getUserById = (id) => {
    return {
        type: LOAD_USER,
        id
    }
};

export const addUser = (user) => {
    return {
        type: ADD_USER,
        user
    }
};

export const editUser = (user) => {
    return {
        type: EDIT_USER,
        user
    }
};

export const deleteUser = (user) => {
    return {
        type: DELETE_USER,
        user
    }
};
