import { put, takeLatest, call } from "redux-saga/effects";
import { requestGetProducts } from "../../utilities/apis/users";
import {
  COMMON_TYPES,
  PRODUCT_TYPES,
} from "../../utilities/constants/actionTypes";
import { getProductsSuccess } from "../action/products";

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

export default function* productsSaga() {
  yield takeLatest(
    PRODUCT_TYPES.PRODUCT_LIST + COMMON_TYPES.REQUEST,
    getProductsList
  );
}
