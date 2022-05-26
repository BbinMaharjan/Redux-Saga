import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import RootReducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";

import { userSaga } from "../sagas/user";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
);

sagaMiddleware.run(userSaga);

export default store;
