import { ApiEndpoints } from "../../const/ApiEndpoints.const";
import API from "../../utils/Api";
import { all, call, put, takeLatest } from "redux-saga/effects";
import types from "./types";

function* getAllComments(action) {
  try {
    const response = yield call(
      API.get,
      ApiEndpoints.GET_ALL_COMMENTS(),
      action.payload,
      action.queryParams,
      action.successCallback,
      action.errorCallback
    );
    yield put({
      type: types.GET_ALL_COMMENTS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {}
}

export function* watchUser() {
  yield all([takeLatest(types.GET_ALL_COMMENTS, getAllComments)]);
}
