import {ApiEndpoints} from "../../const/ApiEndpoints.const";
import API from "../../utils/Api";
import {all, call, put, takeLatest} from 'redux-saga/effects';
import types from "./types";

function* login(action) {
  yield put({ type: types.LOGIN_IN_PROGRESS });
  try {
    const response = yield call(API.get, ApiEndpoints.LOGIN(), action.payload, action.queryParams, action.successCallback, action.errorCallback);
    yield put({
      type: types.LOGIN_SUCCESS,
      payload: response.data
    });

  } catch (error) {
    yield put({
      type: types.LOGIN_FAILURE,
      payload: error
    });
  }
}


function* fetchAccountDetails(action) {
  yield put({ type: types.FETCH_ACCOUNT_DETAILS_IN_PROGRESS });
  try {
    const response = yield call(API.post, ApiEndpoints.ACCOUNT(), action.payload, action.queryParams, action.successCallback, action.errorCallback);
    if(response.data) {
      yield put({
        type: types.FETCH_ACCOUNT_DETAILS_SUCCESS,
        payload: response.data
      });
    }
  } catch (error) {
    yield put({
      type: types.FETCH_ACCOUNT_DETAILS_FAILURE,
      payload: error
    });
  }
}


function* register(action) {
  yield put({ type: types.REGISTER_IN_PROGRESS });
  try {
    const response = yield call(API.put, ApiEndpoints.REGISTER_SEND_OTP, action.payload, action.queryParams, action.successCallback, action.errorCallback);
    if(response.data) {
      yield put({
        type: types.REGISTER_SUCCESS,
        payload: response.data
      });
    }
  } catch (error) {
    yield put({
      type: types.REGISTER_FAILURE,
      payload: error
    });
  }
}



export function* watchUser() {
  yield all([
    takeLatest(types.LOGIN_REQUEST, login),
    takeLatest(types.FETCH_ACCOUNT_DETAILS_REQUEST, fetchAccountDetails),
    takeLatest(types.REGISTER_REQUEST, register),
  ])
}

