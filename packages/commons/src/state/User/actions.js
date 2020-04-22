import types from "./types";


const register = (
  payload,
  options,
  queryParams,
  successCallback,
  errorCallback
) => ({
  type: types.REGISTER,
  payload,
  options,
  queryParams,
  successCallback,
  errorCallback,
});

const login = (
  payload,
  options,
  queryParams,
  successCallback,
  errorCallback
) => ({
  type: types.LOGIN,
  payload,
  options,
  queryParams,
  successCallback,
  errorCallback,
});

const logout = (
  payload,
  options,
  queryParams,
  successCallback,
  errorCallback
) => ({
  type: types.LOGOUT,
  payload,
  options,
  queryParams,
  successCallback,
  errorCallback,
});


const updateToken = (token) => ({
  type: types.UPDATE_AUTH_TOKEN,
  payload: token,
})



export default {
  register,
  updateToken,
  login,
  logout
};
