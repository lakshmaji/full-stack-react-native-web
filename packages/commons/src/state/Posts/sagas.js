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
      ApiEndpoints.CREATE_POST(),
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


function* deletePost(action) {
  try {
    const response = yield call(
      API.delete,
      ApiEndpoints.DELETE_POST(action.payload.id),
      action.payload,
      action.queryParams,
      action.successCallback,
      action.errorCallback
    );
    if (response.data && response.data.id) {
      yield put({
        type: types.DELETE_POST_SUCCESS,
        payload: response.data
      });
    }
  } catch (error) { }
}


function* getPost(action) {
  try {
    const response = yield call(
      API.get,
      ApiEndpoints.GET_POST(action.payload.id),
      action.payload,
      action.queryParams,
      action.successCallback,
      action.errorCallback
    );
    if (response.data && response.data._id) {
      yield put({
        type: types.GET_POST_SUCCESS,
        payload: response.data
      });
    }
  } catch (error) { }
}


function* postComment(action) {
  try {
    const response = yield call(
      API.post,
      ApiEndpoints.POST_COMMENT(action.payload.id),
      action.payload,
      action.queryParams,
      action.successCallback,
      action.errorCallback
    );
    if (response.data) {
      yield put({
        type: types.POST_COMMENT_SUCCESS,
        payload: {
          postId: action.payload.id,
          comment: response.data.data
        }
      })
    }
  } catch (error) { }
}

function* getComment(action) {
  try {
    const response = yield call(
      API.get,
      ApiEndpoints.GET_COMMENT(action.payload.id),
      action.payload,
      action.queryParams,
      action.successCallback,
      action.errorCallback
    );
    if (response.data) {
      yield put({
        type: types.GET_COMMENT_SUCCESS,
        payload: {
          comment: response.data,
          id: action.payload.id
        }
      })
    }
  } catch (error) { }
}

export function* watchUser() {
  yield all([takeLatest(types.GET_ALL_POSTS, getAllPosts)]);
  yield all([takeLatest(types.CREATE_POST, createPost)]);
  yield all([takeLatest(types.DELETE_POST, deletePost)]);
  yield all([takeLatest(types.GET_POST, getPost)]);
  yield all([takeLatest(types.POST_COMMENT, postComment)]);
  yield all([takeLatest(types.GET_COMMENT, getComment)]);
}
