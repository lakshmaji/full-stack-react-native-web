import rootSaga from './rootSagas';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, compose, createStore} from 'redux';

/** Saga Middleware */
const sagaMiddleware = createSagaMiddleware();

/** Create middlewares for redux */
let middlewares = applyMiddleware(sagaMiddleware);

/** Create redux store */
const store = createStore(
  rootReducer,
  compose(middlewares)
);
/** run saga watchers */
sagaMiddleware.run(rootSaga);


export default store;
