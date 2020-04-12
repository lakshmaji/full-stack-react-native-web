import types from "./types";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_POSTS_SUCCESS:
      return action.payload;
    case types.CREATE_POST_SUCCESS:
      return [...state, action.payload]
    case types.DELETE_POST_SUCCESS:
      return state.filter(ePost => ePost._id !== action.payload.id)
    case types.GET_POST_SUCCESS:
      return [...state, action.payload]
    case types.POST_COMMENT_SUCCESS:
      return state.map(ePost => ({
        ...ePost,
        comments: action.payload.postId === ePost._id ? [...ePost.comments, action.payload.comment] : ePost.comments
      }))
    default:
      return state;
  }
};

export default reducer;
