import {all} from "@redux-saga/core/effects";
import messageSagas from "./chat/sagas"
import authSagas from "./auth/sagas";

export default function* rootSaga() {
    yield all ([
        messageSagas(),
        authSagas()
    ]);
}
