import {v4 as uuidv4} from 'uuid';
import moment from "moment";
import {ADD_MESSAGE, DELETE_MESSAGE, UPDATE_MESSAGE} from "./actionTypes";

export const addMessage = (messageText) => {
    const currentUser = {};
    const message = {
        id: uuidv4(),
        userId: currentUser.userId,
        user: currentUser.user,
        text: messageText,
        createdAt: moment().utc().add(3, "hours"),
        updatedAt: ""
    };

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


