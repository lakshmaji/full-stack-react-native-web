import types from "./types";

const initialState = {
  data: null,
  token: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_AUTH_TOKEN:
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

export default reducer;
