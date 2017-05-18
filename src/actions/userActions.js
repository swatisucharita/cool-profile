import userApi from '../api/userApi';
import * as types from './actionTypes';

function loadUsersSuccess(users){
  return {type: types.LOAD_USERS_SUCCESS, users};
}

function ajaxCallStarted(){
  return {type: types.AJAX_CALL_START};
}

function ajaxCallSuccess(){
  return {type: types.AJAX_CALL_SUCCESS};
}

function ajaxCallError(){
  return {type: types.AJAX_CALL_ERROR};
}

export function loadUsers(){
  return function(dispatch){
    dispatch(ajaxCallStarted());
    return userApi.loadAllUsers().then(users => {
      dispatch(ajaxCallSuccess());
      dispatch(loadUsersSuccess(users));
    }, error => {
      dispatch(ajaxCallError());
      throw(error);
    });
  };
}

function userRegisterSuccess(user){
  return {type: types.REGISTER_USER_SUCCESS, user};
}

export function registerUser(user){
  return function(dispatch){
    dispatch(ajaxCallStarted());
    return userApi.registerUser(user).then(savedUser => {
      dispatch(ajaxCallSuccess());
      dispatch(userRegisterSuccess(savedUser));
    }, error => {
      dispatch(ajaxCallError());
      throw(error);
    });
  };
}
