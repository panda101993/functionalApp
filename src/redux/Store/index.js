import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from '../Saga';
import rootReducer from '../Reducer/index';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)

export default store;