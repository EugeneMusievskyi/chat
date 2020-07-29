import {ADD_MESSAGE, DELETE_MESSAGE, EDIT_MESSAGE, LOAD_MESSAGES, SET_EDITED_MESSAGE} from "./actionTypes";

export const loadMessages = () => {
    /*const response = await fetch("https://edikdolynskyi.github.io/react_sources/messages.json");
    let messages;
    if (response.ok) {
        messages = await response.json();
    } else {
        messages = require("../../messages.json");
    }

    dispatch({ type: LOAD_MESSAGES, messages });*/

    return {
        type: LOAD_MESSAGES
    }
};

export const addMessage = (message) => {
    return {
        type: ADD_MESSAGE,
        message
    }
};

export const editMessage = (message) => {
    return {
        type: EDIT_MESSAGE,
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


