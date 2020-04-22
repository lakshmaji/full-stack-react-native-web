import { ApiEndpoints } from "../../const/ApiEndpoints.const";
import API from "../../utils/Api";
import { all, call, put, takeLatest } from "redux-saga/effects";
import types from "./types";
import userActions from './actions';

function* register(action) {
  try {
    const response = yield call(
      API.post,
      ApiEndpoints.REGISTER(),
      action.payload,
      action.queryParams,
      action.successCallback,
      action.errorCallback
    );
    if (response.data && response.data.auth) {
      yield put(userActions.updateToken(response.data.token))
    }
  } catch (error) {

  }
}

function* login(action) {
  try {
    const response = yield call(
      API.post,
      ApiEndpoints.LOGIN(),
      action.payload,
      action.queryParams,
      action.successCallback,
      action.errorCallback
    );
    if (response.data && response.data.auth) {
      yield put(userActions.updateToken(response.data.token))
    }
  } catch (error) {

  }
}


function* logout(action) {
  try {
    const response = yield call(
      API.post,
      ApiEndpoints.LOGOUT(),
      action.payload,
      action.queryParams,
      action.successCallback,
      action.errorCallback
    );
    if (response.data && response.data.auth === false) {
      yield put(userActions.updateToken(response.data.token))
    }
  } catch (error) {

  }
}



export function* watchUser() {
  yield all([
    takeLatest(types.REGISTER, register),
    takeLatest(types.LOGIN, login),
    takeLatest(types.LOGOUT, logout),
  ]);
}
