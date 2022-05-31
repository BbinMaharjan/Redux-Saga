import {
  COMMON_TYPES,
  PRODUCT_TYPES,
} from "../../utilities/constants/actionTypes";

export const getProductsRequest = () => ({
  type: PRODUCT_TYPES.PRODUCT_LIST + COMMON_TYPES.REQUEST,
});

export const getProductsSuccess = (payload) => ({
  type: PRODUCT_TYPES.PRODUCT_LIST + COMMON_TYPES.SUCCESS,
  payload,
});

export const getProductsFailure = (payload) => ({
  type: PRODUCT_TYPES.PRODUCT_LIST + COMMON_TYPES.FAILURE,
  payload,
});
