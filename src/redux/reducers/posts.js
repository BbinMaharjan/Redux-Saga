import {
  COMMON_TYPES,
  POST_TYPES,
} from "../../utilities/constants/actionTypes";

const INIT_STATE = {
  loading: false,
  postsList: [],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case POST_TYPES.POSTS_LIST + COMMON_TYPES.REQUEST: {
      return { ...state, loading: true };
    }
    case POST_TYPES.POSTS_LIST + COMMON_TYPES.SUCCESS: {
      return {
        ...state,
        loading: false,
        postsList: action.payload.postsList,
      };
    }
    case POST_TYPES.POSTS_LIST + COMMON_TYPES.FAILURE: {
      return { ...state, loading: false };
    }
    default:
      return state;
  }
};
