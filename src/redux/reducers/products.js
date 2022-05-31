import {
  COMMON_TYPES,
  PRODUCT_TYPES,
} from "../../utilities/constants/actionTypes";

const INIT_STATE = {
  loading: false,
  products: [],
  error: null,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case PRODUCT_TYPES.PRODUCT_LIST + COMMON_TYPES.REQUEST: {
      return { ...state, loading: true };
    }
    case PRODUCT_TYPES.PRODUCT_LIST + COMMON_TYPES.SUCCESS: {
      return {
        ...state,
        loading: false,
        products: action.payload.products,
        error: null,
      };
    }
    case PRODUCT_TYPES.PRODUCT_LIST + COMMON_TYPES.FAILURE: {
      return {
        ...state,
        loading: false,
        products: [],
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
};
