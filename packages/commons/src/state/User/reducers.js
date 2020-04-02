import types from "./types";

const initialState = {
  data: [],
  isFetching: false,
  isUpdating: false,
  isCreating: false,
  fetchError: null,
  updateError: null,
  createError: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // login
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        fetchError: null
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        fetchError: null,
        data: action.payload
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        fetchError: action.payload
      };

    // fetch account details
    case types.FETCH_ACCOUNT_DETAILS_REQUEST:
      return {
        ...state,
        isCreating: true,
        createError: null
      };
    case types.FETCH_ACCOUNT_DETAILS_SUCCESS:
      return {
        ...state,
        isCreating: false,
        createError: null,
        data: action.payload
      };
    case types.FETCH_ACCOUNT_DETAILS_FAILURE:
      return {
        ...state,
        isCreating: false,
        createError: action.payload
      };

    // register
    case types.REGISTER_REQUEST:
      return {
        ...state,
        isUpdating: true,
        updateError: null
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        isUpdating: false,
        updateError: null,
        data: action.payload
      };
    case types.REGISTER_FAILURE:
      return {
        ...state,
        isUpdating: false,
        updateError: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
