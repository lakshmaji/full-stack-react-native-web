import {all} from 'redux-saga/effects';
import {postSagas} from "./Posts";
import {commentSagas} from "./Comments";

export function* watchSaga() {
    console.log('Sagas middle layer started!................');
}

export default function* rootSaga() {
    yield all([
        watchSaga(),
        postSagas.watchUser(),
        commentSagas.watchUser()
    ]);
}
