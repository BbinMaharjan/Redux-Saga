import {
  COMMON_TYPES,
  POST_TYPES,
} from "../../utilities/constants/actionTypes";

export const getPostList = (payload) => ({
  type: POST_TYPES.POSTS_LIST + COMMON_TYPES.REQUEST,
  payload,
});
