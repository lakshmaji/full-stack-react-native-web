import rootSaga from "./rootSagas";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware, compose, createStore } from "redux";
import Storage from "@callstack/async-storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "fullstackApp",
  storage: Storage,
  whitelist: ["user"],
};

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const persistedReducer = persistReducer(persistConfig, rootReducer);

/** Saga Middleware */
const sagaMiddleware = createSagaMiddleware();

/**
 * Logs all actions and states after they are dispatched.
 */
const logger = store => next => action => {
  console.group(action.type)
  console.info('action', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}

/** Create middlewares for redux */
let middlewares = [sagaMiddleware, logger];

/** Create redux store */
const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(...middlewares)));
/** run saga watchers */
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;

