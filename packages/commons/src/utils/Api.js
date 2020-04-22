import axios from "axios";
import errorExtractor from "./ErrorExtractor";
import store from "../state/store";
import userActions from "../state/User/actions";

const API_BASE_URL = "http://127.0.0.1:3000/api/";

const Api = {
  get: (url, option, query, successCallback, errorCallback) =>
    request({
      url,
      init: {
        method: "GET",
      },
      query,
      option,
      successCallback,
      errorCallback,
    }),
  post: (url, option, query, successCallback, errorCallback) =>
    request({
      url,
      init: {
        method: "POST",
      },
      query,
      option,
      successCallback,
      errorCallback,
    }),
  put: (url, option, query, successCallback, errorCallback) =>
    request({
      url,
      init: {
        method: "PUT",
      },
      query,
      option,
      successCallback,
      errorCallback,
    }),
  patch: (url, option, query, successCallback, errorCallback) =>
    request({
      url,
      init: {
        method: "PATCH",
      },
      query,
      option,
      successCallback,
      errorCallback,
    }),
  delete: (url, option, query, successCallback, errorCallback) =>
    request({
      url,
      init: {
        method: "DELETE",
      },
      query,
      option,
      successCallback,
      errorCallback,
    }),
};

function getToken() {
  const { user } = store.getState();
  if (user && user.token) {
    return user.token;
  }
  return;
}

/**
 * Header interceptor for each api
 * @param headers
 * @return {{Authorization: string, Accept: string, "Content-Type": string}}
 */
function buildHeaders(headers) {
  // const token =  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNDgwMTUiLCJhdXRoIjoiUk9MRV9DVVNUT01FUixST0xFX1BPUlRBTCIsInVzZXIiOnsidXNlcklkIjoxNDgwMTUsImZyYW5jaGlzZUlkIjo2LCJsb2dpbiI6IjE0ODAxNSIsImVtYWlsIjoicmVjeWthbHJlYWN0QHBva2VtYWlsLm5ldCJ9LCJleHAiOjE1ODgzNDU4MTN9.aO5nOAon9b3cLKjsf8QLOOtEcIRaoCuHNJtwrUi6S5-FL7qT76zRwOYg18a67vCQ9kLMLvE-LlOLOfctVYn0yQ'//localStorage.getItem('authenticate_token');
  const token = getToken();
  const appCode = "EPR005";
  const newHeader = {
    Accept: "application/json",
    "Content-Type": "application/json",
    appCode: appCode,
    ...headers,
  };

  if (token) {
    newHeader.Authorization = "Bearer " + token;
  }

  return newHeader;
}

function request(props) {
  const { url, init, query, option, successCallback, errorCallback } = props;
  const fetchUrl = `${API_BASE_URL}${url}`;
  const headers = buildHeaders(init.headers);
  return axios({
    url: fetchUrl,
    method: init.method,
    data: option,
    params: query,
    headers,
    timeout: option && option.timeout ? option.timeout : 10000,
  })
    .then((response) => {
      successCallback && successCallback(response);
      return response;
    })
    .catch((error) => {
      errorCallback && errorCallback(error);
      onError(error);
    });
}

/**
 * called on api failed
 * @param error
 */
let onError = (error) => {
  if (error.response) {
    console.warn('API Error Response', error.response);
    if (error.response.status === 0) {
      // store.dispatch(errorActions.raiseError('Please check if you are connected to Internet'));
    }
    if (error.response.status < 500) {
      const err = errorExtractor(error.response);
      // store.dispatch(errorActions.raiseWarning(err.message));
      if (error.response.status === 401) {
        store.dispatch(userActions.updateToken(null))
      }
    } else {
      const err = errorExtractor(error.response);
      // store.dispatch(errorActions.raiseError(err.message));
    }
  }
  throw error;
};

export default Api;