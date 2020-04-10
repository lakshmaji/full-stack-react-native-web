import axios from "axios";
import errorExtractor from './ErrorExtractor';
import store from '../state/store';


const API_BASE_URL = 'https://jsonplaceholder.typicode.com/';


const Api = {
  get: (url, option, query, successCallback, errorCallback) =>
    request({
      url,
      init: {
        method: 'GET'
      },
      query,
      option,
      successCallback,
      errorCallback
    }),
  post: (url, option, query, successCallback, errorCallback) =>
    request({
      url,
      init: {
        method: 'POST'
      },
      query,
      option,
      successCallback,
      errorCallback
    }),
  put: (url, option, query, successCallback, errorCallback) =>
    request({
      url,
      init: {
        method: 'PUT'
      },
      query,
      option,
      successCallback,
      errorCallback
    }),
  patch: (url, option, query, successCallback, errorCallback) =>
    request({
      url,
      init: {
        method: 'PATCH'
      },
      query,
      option,
      successCallback,
      errorCallback
    }),
  delete: (url, option, query, successCallback, errorCallback) =>
    request({
      url,
      init: {
        method: 'DELETE'
      },
      query,
      option,
      successCallback,
      errorCallback
    }),
};

/**
 * Header interceptor for each api
 * @param headers
 * @return {{Authorization: string, Accept: string, "Content-Type": string}}
 */
function buildHeaders(headers) {
  const token =  localStorage.getItem('authenticate_token');
  const appCode = 'EPR005';
  const newHeader =  {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'appCode': appCode,
    ...headers,
  };

  if (token) {
    newHeader.Authorization = 'Bearer ' + token;
  }

  return newHeader;
}

function request(props) {
  const { url, init, query, option, successCallback, errorCallback } = props;
  const fetchUrl = `${API_BASE_URL}${url}`;

  const state= store.getState();

  console.log('redux state ', state)

  return axios({
    url: fetchUrl,
    method: init.method,
    data: option,
    params: query,
    headers: buildHeaders(init.headers),
    timeout: option && option.timeout ? option.timeout : 10000,
  }).then(response => {
    successCallback && successCallback(response);
    return response;
  })
    .catch(error => {
      errorCallback && errorCallback(error);
      onError(error)
    });
}

/**
 * called on api failed
 * @param error
 */
let onError = (error) => {
  if (error.response) {
      if(error.response.status === 0) {
          //toast.warn('Please check if you are connected to Internet');
      }
      if(error.response.status < 500) {
          const err = errorExtractor(error.response);
          //toast.warn(err.message);
      } else {
          const err = errorExtractor(error.response);
          //toast.error(err.message);
      }
  }
  throw error;
};

export default Api;
