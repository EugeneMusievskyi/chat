import {
    loadMessagesRoutine,
    editMessageRoutine,
    deleteMessageRoutine,
    setEditedMessageRoutine
} from "../../sagas/chat/routines";

const chatReducer = (state = {}, action) => {
    switch (action.type) {
        case loadMessagesRoutine.SUCCESS: {
            return {
                ...state,
                messages: action.payload
            }
        }
        case editMessageRoutine.TRIGGER: {
            return {
                ...state,
                messages: state.messages.map(m => m.id === action.message.id ? action.message : m)
            }
        }
        case deleteMessageRoutine.TRIGGER: {
            return {
                ...state,
                messages: state.messages.filter(m => m.id !== action.message.id)
            }
        }
        case setEditedMessageRoutine.TRIGGER: {
            return {
                ...state,
                editedMessage: action.payload
            }
        }
        default:
            return state;
    }
};

export default chatReducer;
