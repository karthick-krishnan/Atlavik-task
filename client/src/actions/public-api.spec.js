
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { SERVER_URL } from '../constants/index';
import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  fetchStart,
  fetchSuccess,
  fetchFailure,
  searchData
} from './public-api';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Public api list actions', () => {
  it('should create a fetch start action', () => {
    const expectedAction = {
      type: FETCH_START
    }
    expect(fetchStart()).toEqual(expectedAction)
  })

  it('should create a fetch start action', () => {
    let payload = [{ name: 'api' }];
    const expectedAction = {
      type: FETCH_SUCCESS,
      payload
    }
    expect(fetchSuccess(payload)).toEqual(expectedAction)
  })

  it('should create a fetch start action', () => {
    let payload = { error: 'failed' };
    const expectedAction = {
      type: FETCH_FAILURE,
      payload
    }
    expect(fetchFailure(payload)).toEqual(expectedAction)
  });
});


describe('searchData', () => {
  let store;

  beforeEach(() => {
    store = mockStore({ publicAPI: [] })
  })

  afterEach(() => {
    fetchMock.restore()
  })

  it('Request without query params', () => {
    const apiList = [{ name: 'api' }];
    fetchMock.getOnce(`${SERVER_URL}/publicApi/entries/getData`, {
      body: { data: { entries: apiList } },
      headers: { 'content-type': 'application/json' }
    })

    return store.dispatch(searchData()).then(() => {
      let searchURL = fetchMock.lastUrl()
      let queryParams = searchURL.split('?')[1]
    expect(new URLSearchParams(queryParams).get('category')).toEqual(null);
    })
  });

  it('Request with query params', () => {
    const apiList = [{ name: 'api' }];
    fetchMock.getOnce(`${SERVER_URL}/publicApi/entries/getData?category=abc`, {
      body: { data: { entries: apiList } },
      headers: { 'content-type': 'application/json' }
    })

    return store.dispatch(searchData('abc')).then(() => {
      let searchURL = fetchMock.lastUrl()
      let queryParams = searchURL.split('?')[1]
      expect(new URLSearchParams(queryParams).get('category')).toEqual('abc');
    })
  });

  it('Success flow', () => {
    const apiList = [{ name: 'api' }];
    fetchMock.getOnce(`${SERVER_URL}/publicApi/entries/getData`, {
      body: { data: { entries: apiList } },
      headers: { 'content-type': 'application/json' }
    })

    const expectedActions = [
      { type: FETCH_START },
      { type: FETCH_SUCCESS, payload: apiList }
    ]

    return store.dispatch(searchData()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('Failure flow', () => {
    const error = new Error('Fetch failed')
    fetchMock.mock(`${SERVER_URL}/publicApi/entries/getData`, () => {
      throw error
    })

    const expectedActions = [
      { type: FETCH_START },
      { type: FETCH_FAILURE, payload: error }
    ]

    return store.dispatch(searchData()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
