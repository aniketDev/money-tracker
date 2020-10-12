import { USER_LOGIN } from '../actionTypes/UserActionTypes';

const initialState = {};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return state;
    default:
      return state;
  }
};

export default UserReducer;
