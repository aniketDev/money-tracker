import {
  USER_LOGIN,
  USER_SIGN_UP,
  USER_LOGOUT
} from '../actionTypes/UserActionTypes';

export const logout = () => ({
  type: USER_LOGOUT
});

export const login = (user) => ({
  type: USER_LOGIN,
  payload: user
});

export const signUp = (user) => ({
  type: USER_SIGN_UP,
  payload: user
});
