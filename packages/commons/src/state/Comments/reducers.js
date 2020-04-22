import types from "./types";

const initialState = {
  comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
