import { call, put, takeLatest } from "redux-saga/effects";
import { requestGetUser } from "../../utilities/apis/users";
import { GET_USER } from "../../utilities/constants/actionTypes";
import { setUser } from "../action/user";

function* handleGetUser(action) {
  try {
    const response = yield call(requestGetUser);
    const { data } = response;
    yield put(setUser(data));
  } catch (error) {
    console.log(error);
  }
}

export function* userSaga() {
  yield takeLatest(GET_USER, handleGetUser);
}
