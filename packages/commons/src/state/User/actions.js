import types from "./types";

const login = (payload, options, queryParams, successCallback, errorCallback) => ({
  type: types.LOGIN_REQUEST,
  payload,
  options,
  queryParams,
  successCallback,
  errorCallback
});

const fetchAccountDetails = (payload, options, queryParams, successCallback, errorCallback) => ({
  type: types.FETCH_ACCOUNT_DETAILS_REQUEST,
  payload,
  options,
  queryParams,
  successCallback,
  errorCallback
});

const register = (payload, options, queryParams, successCallback, errorCallback) => ({
  type: types.REGISTER_REQUEST,
  payload,
  options,
  queryParams,
  successCallback,
  errorCallback
});



export default {
  login,
  fetchAccountDetails,
  register
};
