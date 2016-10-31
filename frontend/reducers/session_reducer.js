import {RECEIVE_CURRENT_USER, RECEIVE_ERRORS, LOGOUT} from '../actions/session_actions.js';
import merge from 'lodash/merge';

const defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return merge({},state,{currentUser: action.currentUser});

    case RECEIVE_ERRORS:
      return merge({},state,{errors: action.errors});

    case LOGOUT:
      return merge({},state,{currentUser: null});

    default:
      return state;
  }
};

export default SessionReducer;
