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

const createPost = (
  payload,
  options,
  queryParams,
  successCallback,
  errorCallback
) => ({
  type: types.CREATE_POST,
  payload,
  options,
  queryParams,
  successCallback,
  errorCallback,
});

const deletePost = (
  payload,
  options,
  queryParams,
  successCallback,
  errorCallback
) => ({
  type: types.DELETE_POST,
  payload,
  options,
  queryParams,
  successCallback,
  errorCallback,
});


const getPost = (
  payload,
  options,
  queryParams,
  successCallback,
  errorCallback
) => ({
  type: types.GET_POST,
  payload,
  options,
  queryParams,
  successCallback,
  errorCallback,
});



const postComment = (
  payload,
  options,
  queryParams,
  successCallback,
  errorCallback
) => ({
  type: types.POST_COMMENT,
  payload,
  options,
  queryParams,
  successCallback,
  errorCallback,
});


export default {
  getAllPosts,
  createPost,
  deletePost,
  getPost,
  postComment
};
