import { combineReducers } from "redux";

import { Products } from "./products";

const RootReducer = combineReducers({
  products: Products,
});

export default RootReducer;
