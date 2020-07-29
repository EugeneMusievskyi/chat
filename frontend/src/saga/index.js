import {all} from "@redux-saga/core/effects";
import messageSagas from "../container/Chat/sagas"

export default function* rootSaga() {
    yield all ([
        messageSagas()
    ]);
}
