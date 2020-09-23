import { SERVER_URL } from '../constants/index';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export function fetchStart() {
  return {
    type: FETCH_START,
  };
}

export function fetchSuccess(payload) {
  return {
    type: FETCH_SUCCESS,
    payload
  };
}

export function fetchFailure(error) {
  return {
    type: FETCH_FAILURE,
    payload: error
  };
}

export const getData = (searchString = '') => {
  return (dispatch) => {
    dispatch(fetchStart());
    let queryparams = `?category=${searchString}`;
    const url = `${SERVER_URL}/publicApi/entries/getData${searchString.length > 0 ? queryparams : ''}`
    return fetch(url)
      .then(response => response.json())
      .then((apiList) => dispatch(fetchSuccess(apiList.data.entries)))
      .catch((error) => dispatch(fetchFailure(error)));
  }
}
