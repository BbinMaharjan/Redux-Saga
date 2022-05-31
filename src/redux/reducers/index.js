import { combineReducers } from "redux";

import ProductsReducer from "./products";

const RootReducer = combineReducers({
  products: ProductsReducer,
});

export default RootReducer;
