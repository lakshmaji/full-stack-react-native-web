import { ApiEndpoints } from "../../const/ApiEndpoints.const";
import API from "../../utils/Api";
import { all, call, put, takeLatest } from "redux-saga/effects";
import types from "./types";

function* getAllPosts(action) {
  try {
    const response = yield call(
      API.get,
      ApiEndpoints.GET_ALL_POSTS(),
      action.payload,
      action.queryParams,
      action.successCallback,
      action.errorCallback
    );
    if (response.data && response.data.length) {
      yield put({
        type: types.GET_ALL_POSTS_SUCCESS,
        payload: response.data,
      });
    }
  } catch (error) { }
}

function* createPost(action) {
  try {
    const response = yield call(
      API.post,
      ApiEndpoints.CREATE_POSTS(),
      action.payload,
      action.queryParams,
      action.successCallback,
      action.errorCallback
    );
    if (response.data) {
      yield put({
        type: types.CREATE_POST_SUCCESS,
        payload: response.data
      });
    }
  } catch (error) { }
}

export function* watchUser() {
  yield all([takeLatest(types.GET_ALL_POSTS, getAllPosts)]);
  yield all([takeLatest(types.CREATE_POST, createPost)]);
}
