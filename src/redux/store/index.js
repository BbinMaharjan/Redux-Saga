import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import RootReducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";

import { userSaga } from "../sagas/user";
import postsSaga from "../sagas/postsSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
);

sagaMiddleware.run(userSaga);
sagaMiddleware.run(postsSaga);

export default store;
