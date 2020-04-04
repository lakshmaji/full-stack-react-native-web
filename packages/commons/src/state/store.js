import rootSaga from "./rootSagas";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware, compose, createStore } from "redux";
import Storage from "@callstack/async-storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "recykalMarketPlace",
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

/** Create middlewares for redux */
let middlewares = applyMiddleware(sagaMiddleware);

/** Create redux store */
const store = createStore(persistedReducer, composeEnhancers(middlewares));
/** run saga watchers */
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;
