import {call, put, takeEvery, takeLatest} from "@redux-saga/core/effects";
import * as messageService from "../../services/messageService";
import {
    addMessageRoutine,
    deleteMessageRoutine,
    editMessageRoutine,
    loadMessagesRoutine
} from "./routines";


export function* loadMessages() {
    try {
        const messages = yield call(messageService.getAllMessages);
        yield put(loadMessagesRoutine.success(messages));
    } catch (e) {
        console.log(e);
    }
}

export function* addMessage(action) {
    try {
        const newMessage = yield call(messageService.saveMessage, action.payload);
        yield put(loadMessagesRoutine.success(newMessage));
    } catch (e) {
        console.log(e);
    }
}


export function* editMessage(action) {
    try {
        yield call(messageService.updateMessage, action.message);
    } catch (e) {
        console.log(e);
    }
}

export function* deleteMessage(action) {
    try {
        yield call(messageService.deleteMessage, action.message.id);
    } catch (e) {
        console.log(e);
    }
}

export default function* messageSagas() {
    yield takeLatest(loadMessagesRoutine.TRIGGER, loadMessages);
    yield takeEvery(addMessageRoutine.TRIGGER, addMessage);
    yield takeEvery(editMessageRoutine.TRIGGER, editMessage);
    yield takeEvery(deleteMessageRoutine.TRIGGER, deleteMessage);
}
