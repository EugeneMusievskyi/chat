import {ADD_MESSAGE, DELETE_MESSAGE, SET_EDITED_MESSAGE, EDIT_MESSAGE, LOAD_MESSAGES} from "./actionTypes";

export default function (state = {}, action) {
    switch (action.type) {
        case LOAD_MESSAGES: {
            return {
                ...state,
                messages: action.messages
            }
        }
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [ ...state.messages, action.message ]
            }
        }
        case EDIT_MESSAGE: {
            return {
                ...state,
                messages: state.messages.map(m => m.id === action.message.id ? action.message : m)
            }
        }
        case DELETE_MESSAGE: {
            return {
                ...state,
                messages: state.messages.filter(m => m.id !== action.message.id)
            }
        }
        case SET_EDITED_MESSAGE: {
            return {
                ...state,
                editedMessage: action.message
            }
        }
        default:
            return state;
    }
}
