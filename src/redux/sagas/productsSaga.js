import { put, takeLatest, call } from "redux-saga/effects";
import {
  requestGetProductDetails,
  requestGetProducts,
} from "../../utilities/apis/products";
import {
  COMMON_TYPES,
  PRODUCT_TYPES,
} from "../../utilities/constants/actionTypes";
import {
  getProductsSuccess,
  getProductDetailsSuccess,
} from "../action/products";

function* getProductsList(action) {
  try {
    const response = yield call(requestGetProducts);
    yield put(getProductsSuccess({ products: response.data }));
  } catch (error) {
    yield put({
      type: PRODUCT_TYPES.PRODUCT_LIST + COMMON_TYPES.FAILURE,
      payload: error.message,
    });
  }
}
function* getProductDetails(action) {
  try {
    const response = yield call(requestGetProductDetails, action.payload);
    yield put(getProductDetailsSuccess(response));
  } catch (error) {
    yield put({
      type: PRODUCT_TYPES.PRODUCT_DETAILS + COMMON_TYPES.FAILURE,
      payload: error.message,
    });
  }
}
export default function* productsSaga() {
  yield takeLatest(
    PRODUCT_TYPES.PRODUCT_LIST + COMMON_TYPES.REQUEST,
    getProductsList
  );
  yield takeLatest(
    PRODUCT_TYPES.PRODUCT_DETAILS + COMMON_TYPES.REQUEST,
    getProductDetails
  );
}
