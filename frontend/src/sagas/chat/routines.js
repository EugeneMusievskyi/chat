import {createRoutine} from "redux-saga-routines";

export const loadMessagesRoutine = createRoutine("MESSAGES:LOAD_ALL");
export const addMessageRoutine = createRoutine("MESSAGES:ADD");
export const editMessageRoutine = createRoutine("MESSAGES:EDIT");
export const deleteMessageRoutine = createRoutine("MESSAGES:DELETE");
export const setEditedMessageRoutine = createRoutine("MESSAGES:SET_EDITED");
