import {combineReducers} from 'redux';
import users from './userReducer';
import ajaxCallsCount from './ajaxCallReducer';

const rootReducer = combineReducers({
  users,
  ajaxCallsCount
});

export default rootReducer;
