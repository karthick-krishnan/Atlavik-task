import { combineReducers } from 'redux';
import publicApiReducer from './public-api';

export default combineReducers({
  publicAPI: publicApiReducer
});
