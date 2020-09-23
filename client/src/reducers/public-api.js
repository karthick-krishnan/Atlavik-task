export default function (state = { apiList: [], error: {}, isLoading: false }, action) {
  switch (action.type) {
    case "FETCH_START":
      return { apiList: [], error: {}, isLoading: true };
    case "FETCH_SUCCESS":
      return { apiList: action.payload, error: {}, isLoading: false };
    case "FETCH_FAILURE":
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};
