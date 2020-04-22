import types from "./types";

const getAllComments = (
  payload,
  options,
  queryParams,
  successCallback,
  errorCallback
) => ({
  type: types.GET_ALL_COMMENTS,
  payload,
  options,
  queryParams,
  successCallback,
  errorCallback,
});

export default {
  getAllComments,
};
