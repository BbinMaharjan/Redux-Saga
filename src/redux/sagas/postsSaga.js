import { requestGetPosts } from "../../utilities/apis/users";
import { put, takeLatest, call } from "redux-saga/effects";
import {
  COMMON_TYPES,
  MAKE_API_REQUEST,
  POST_TYPES,
} from "../../utilities/constants/actionTypes";

import { getPostSuccess } from "../action/posts";

function* getPostsList(action) {
  try {
    const response = yield call(requestGetPosts);
    yield put(getPostSuccess({ posts: response.data }));
  } catch (error) {
    yield put({
      type: POST_TYPES.POSTS_LIST + COMMON_TYPES.FAILURE,
      payload: error.message,
    });
  }
}

export default function* postsSaga() {
  yield takeLatest(POST_TYPES.POSTS_LIST + COMMON_TYPES.REQUEST, getPostsList);
}
