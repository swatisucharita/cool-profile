import userApi from '../api/mockUserApi';
import * as types from './actionTypes';

function loadUsersSuccess(users){
  return {type: types.LOAD_USERS_SUCCESS, users};
}

export function loadUsers(){
  return function(dispatch){
    userApi.loadAllUsers().then(users => {
      dispatch(loadUsersSuccess(users));
    }).catch(error => {
      throw(error);
    });
  };
}
