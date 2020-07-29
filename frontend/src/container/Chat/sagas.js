import {call, put, takeEvery} from "@redux-saga/core/effects";
import {ADD_MESSAGE, DELETE_MESSAGE, EDIT_MESSAGE, LOAD_MESSAGES, LOAD_MESSAGES_SUCCESS} from "./actionTypes";
import {getAllMessages, saveMessage, updateMessage} from "../../services/messageService";


export function* loadMessages() {
    try {
        const messages = yield call(getAllMessages);
        yield put({ type: LOAD_MESSAGES_SUCCESS, messages })
    } catch (e) {
        console.log(e);
    }
}

/*function* watchLoadMessages() {
    yield takeEvery(LOAD_MESSAGES, loadMessages);
}*/

export function* addMessage(action) {
    try {
        const newMessage = yield call(saveMessage, action.message);
        yield put({ type: LOAD_MESSAGES });
    } catch (e) {
        console.log(e);
    }
}

/*function* watchAddMessage() {
    yield takeEvery(ADD_MESSAGE, addMessage);
}*/

export function* editMessage(action) {
    try {
        yield call(updateMessage, action.message);
        yield put({ type: LOAD_MESSAGES });
    } catch (e) {
        console.log(e);
    }
}

/*function* watchEditMessage() {
    yield takeEvery(EDIT_MESSAGE, editMessage);
}*/

export function* deleteMessage(action) {
    try {
        yield call(deleteMessage, action.message.id);
        yield put({ type: LOAD_MESSAGES });
    } catch (e) {
        console.log(e);
    }
}

/*
function* watchDeleteMessage() {
    yield takeEvery(DELETE_MESSAGE, deleteMessage);
}
*/

export default function* messageSaga() {
    yield takeEvery(LOAD_MESSAGES, loadMessages);
    yield takeEvery(ADD_MESSAGE, addMessage);
    yield takeEvery(EDIT_MESSAGE, editMessage);
    yield takeEvery(DELETE_MESSAGE, deleteMessage);
}
