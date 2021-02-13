import { all, fork } from 'redux-saga/effects';

import {
    Login, SignUp,
} from './saga';

export function* rootSaga() {
    yield all([
        fork(Login),
        // fork(SignUp),
    ])
}
