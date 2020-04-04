import types from "./types";

const getAllPosts = (
  payload,
  options,
  queryParams,
  successCallback,
  errorCallback
) => ({
  type: types.GET_ALL_POSTS,
  payload,
  options,
  queryParams,
  successCallback,
  errorCallback,
});

export default {
  getAllPosts,
};
