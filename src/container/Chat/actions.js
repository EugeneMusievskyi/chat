import {v4 as uuidv4} from 'uuid';
import moment from "moment";
import {ADD_MESSAGE, DELETE_MESSAGE, SET_EDITED_MESSAGE, UPDATE_MESSAGE} from "./actionTypes";

export const addMessage = (message) => {
    return {
        type: ADD_MESSAGE,
        message
    }
};

export const updateMessage = (message) => {
    return {
        type: UPDATE_MESSAGE,
        message
    }
};

export const deleteMessage = (message) => {
    return {
        type: DELETE_MESSAGE,
        message
    }
};

export const setEditedMessage = (message) => {
    return {
        type: SET_EDITED_MESSAGE,
        message
    }
};


