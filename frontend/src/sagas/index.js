import {all} from "@redux-saga/core/effects";
import messageSagas from "./messages/sagas"
import authSagas from "./auth/sagas";
import chatInfoSagas from "./chatInfo/sagas";

export default function* rootSaga() {
    yield all ([
        messageSagas(),
        authSagas(),
        chatInfoSagas()
    ]);
}
