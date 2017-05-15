import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state=initialState.users, action){
  switch(action.type) {
    case types.LOAD_USERS_SUCCESS :
      return action.users;

    case types.REGISTER_USER_SUCCESS :
      return [...state,
      Object.assign({}, action.user)];

    default:
      return state;
  }
}
