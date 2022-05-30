import {
  COMMON_TYPES,
  POST_TYPES,
} from "../../utilities/constants/actionTypes";

export const getPostsRequest = () => ({
  type: POST_TYPES.POSTS_LIST + COMMON_TYPES.REQUEST,
});

export const getPostSuccess = (payload) => ({
  type: POST_TYPES.POSTS_LIST + COMMON_TYPES.SUCCESS,
  payload,
});

export const getPostFailure = (payload) => ({
  type: POST_TYPES.POSTS_LIST + COMMON_TYPES.FAILURE,
  payload,
});
