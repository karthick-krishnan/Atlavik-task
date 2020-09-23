import reducer from './public-api';
import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE,
} from '../actions/public-api';

const initialState = {
  apiList: [],
  error: {},
  isLoading: false
};

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should return the initial state', () => {
    expect(reducer(initialState, { type: FETCH_START })).toEqual({ ...initialState, isLoading: true })
  })

  it('should return the initial state', () => {
    expect(reducer(initialState, { type: FETCH_SUCCESS, payload: [{ api: 'animal' }] })).toEqual({ ...initialState, isLoading: false, apiList: [{ api: 'animal' }] })
  })

  it('should return the initial state', () => {
    expect(reducer(initialState, { type: FETCH_FAILURE, payload: { error: 'unknown error' } })).toEqual({ ...initialState, isLoading: false, error: { error: 'unknown error' } })
  })
});
