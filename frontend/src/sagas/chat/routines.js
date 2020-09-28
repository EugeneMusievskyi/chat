import {createRoutine} from "redux-saga-routines";

export const loadMessagesRoutine = createRoutine("MESSAGES:LOAD_ALL");
export const addMessageRoutine = createRoutine("MESSAGES:ADD");
export const addMessageToStateRoutine = createRoutine("MESSAGES:ADD_TO_STATE");
export const editMessageRoutine = createRoutine("MESSAGES:EDIT");
export const editMessageStateRoutine = createRoutine("MESSAGES:EDIT_STATE");
export const deleteMessageRoutine = createRoutine("MESSAGES:DELETE");
export const deleteMessageFromStateRoutine = createRoutine("MESSAGES:DELETE_FROM_STATE");
export const setEditedMessageRoutine = createRoutine("MESSAGES:SET_EDITED");
