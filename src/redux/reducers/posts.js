import {
  COMMON_TYPES,
  POST_TYPES,
} from "../../utilities/constants/actionTypes";

const INIT_STATE = {
  loading: false,
  posts: [],
  error: null,
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
        posts: action.payload.posts,
        error: null,
      };
    }
    case POST_TYPES.POSTS_LIST + COMMON_TYPES.FAILURE: {
      return {
        ...state,
        loading: false,
        posts: [],
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
};
