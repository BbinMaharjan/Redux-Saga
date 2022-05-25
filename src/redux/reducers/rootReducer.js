import { combineReducers } from "redux";

import UseReducer from "./user";

const RootReducer = combineReducers({
  user: UseReducer,
});

export default RootReducer;
