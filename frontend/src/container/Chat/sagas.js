import {call, put, takeEvery} from "@redux-saga/core/effects";
import {ADD_MESSAGE, DELETE_MESSAGE, EDIT_MESSAGE, LOAD_MESSAGES, LOAD_MESSAGES_SUCCESS} from "./actionTypes";
import * as messageService from "../../services/messageService";


export function* loadMessages() {
    try {
        const messages = yield call(messageService.getAllMessages);
        yield put({ type: LOAD_MESSAGES_SUCCESS, messages })
    } catch (e) {
        console.log(e);
    }
}

export function* addMessage(action) {
    try {
        const newMessage = yield call(messageService.saveMessage, action.message);
        yield put({ type: LOAD_MESSAGES });
    } catch (e) {
        console.log(e);
    }
}


export function* editMessage(action) {
    try {
        yield call(messageService.updateMessage, action.message);
        yield put({ type: LOAD_MESSAGES });
    } catch (e) {
        console.log(e);
    }
}

export function* deleteMessage(action) {
    try {
        yield call(messageService.deleteMessage, action.message.id);
        yield put({ type: LOAD_MESSAGES });
    } catch (e) {
        console.log(e);
    }
}

export default function* messageSaga() {
    yield takeEvery(LOAD_MESSAGES, loadMessages);
    yield takeEvery(ADD_MESSAGE, addMessage);
    yield takeEvery(EDIT_MESSAGE, editMessage);
    yield takeEvery(DELETE_MESSAGE, deleteMessage);
}
