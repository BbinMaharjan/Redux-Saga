import { takeLatest } from "redux-saga/effects";
import { GET_USER } from "../../utilities/constants/actionTypes";
import { handleGetUser } from "./user";

export function* watcherSaga() {
  yield takeLatest(GET_USER, handleGetUser);
}
