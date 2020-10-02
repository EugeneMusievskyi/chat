import {
    loadMessagesRoutine,
    editMessageRoutine,
    deleteMessageRoutine,
    setEditedMessageRoutine, addMessageRoutine, addMessageToStateRoutine
} from "../../sagas/messages/routines";
import {loadChatInfoRoutine, setChatInfoRoutine} from "../../sagas/chatInfo/routines";

const chatReducer = (state = {}, action) => {
    switch (action.type) {
        case loadMessagesRoutine.TRIGGER: {
            return {
                ...state,
                isLoading: true
            }
        }
        case loadMessagesRoutine.SUCCESS: {
            return {
                ...state,
                messages: action.payload,
                isLoading: false
            }
        }
        case loadMessagesRoutine.FAILURE: {
            return {
                ...state,
                isLoading: false
            }
        }
        case addMessageRoutine.SUCCESS:
        case addMessageToStateRoutine.SUCCESS: {
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        }
        case editMessageRoutine.SUCCESS: {
            return {
                ...state,
                messages: state.messages.map(m => m.id === action.payload.id ? action.payload : m)
            }
        }
        case deleteMessageRoutine.SUCCESS: {
            return {
                ...state,
                messages: state.messages.filter(m => m.id !== action.payload.id)
            }
        }
        case setEditedMessageRoutine.TRIGGER: {
            return {
                ...state,
                editedMessage: action.payload
            }
        }
        case loadChatInfoRoutine.SUCCESS:
        case setChatInfoRoutine.SUCCESS: {
            return {
                ...state,
                info: action.payload
            }
        }
        default:
            return state;
    }
};

export default chatReducer;
