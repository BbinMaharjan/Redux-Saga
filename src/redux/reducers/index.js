import { combineReducers } from "redux";

import { Products, ProductDetails } from "./products";

const RootReducer = combineReducers({
  products: Products,
  productDetails: ProductDetails,
});

export default RootReducer;
