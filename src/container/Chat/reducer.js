import {ADD_MESSAGE, DELETE_MESSAGE, UPDATE_MESSAGE} from "./actionTypes";

const initialState = { messages: require("../../messages") };

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_MESSAGE: {
            // const messages = state.messages;
            // messages.push(action.message);
            return {
                ...state,
                messages: [ ...state.messages, action.message ]
            }
        }
        case UPDATE_MESSAGE: {
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
        default:
            return state;
    }
}
