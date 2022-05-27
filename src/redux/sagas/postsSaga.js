import { requestGetUser } from "../../utilities/apis/users";
import { put, takeLatest, call } from "redux-saga/effects";
import {
  COMMON_TYPES,
  MAKE_API_REQUEST,
  POST_TYPES,
} from "../../utilities/constants/actionTypes";

function* getPostsList(action) {
  try {
    const response = yield call(requestGetUser);
    const { data } = response;
    yield put({
      type: POST_TYPES.POSTS_LIST + COMMON_TYPES.SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: POST_TYPES.POSTS_LIST + COMMON_TYPES.FAILURE,
      payload: error,
    });
  }
}

export default function* postsSaga() {
  yield takeLatest(POST_TYPES.POSTS_LIST + COMMON_TYPES.REQUEST, getPostsList);
}
