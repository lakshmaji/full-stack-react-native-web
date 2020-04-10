import types from "./types";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_POSTS_SUCCESS:
      return action.payload;
    case types.CREATE_POST_SUCCESS:
      return [...state, action.payload]
    default:
      return state;
  }
};

export default reducer;
