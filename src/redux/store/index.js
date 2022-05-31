import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import RootReducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";

import productsSaga from "../sagas/productsSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
);

sagaMiddleware.run(productsSaga);

export default store;
