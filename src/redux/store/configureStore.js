import { combineReducers, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import userReducer from "../action/user";
import { watcherSaga } from "../sagas/rootSaga";

const reducer = combineReducers({
  user: userReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, {}, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(watcherSaga);

export default store;
