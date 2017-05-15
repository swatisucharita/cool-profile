import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function ajaxCallReducer(state=initialState.ajaxCallsCount, action){
  switch(action.type) {
    case types.AJAX_CALL_START :
      return state + 1;

    case types.AJAX_CALL_SUCCESS :
      return state - 1;

    case types.AJAX_CALL_ERROR :
      return state - 1;

    default:
      return state;
  }
}
