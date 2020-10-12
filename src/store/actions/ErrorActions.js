import {
  GLOBAL_ERROR_SET,
  SIGNIN_ERROR_SET,
  SIGNUP_ERRORS_SET
} from '../actionTypes/ErrorActionTypes';

export const setGlobalError = (payload) => ({
  type: GLOBAL_ERROR_SET,
  payload
});

export const setSignInError = (payload) => ({
  type: SIGNIN_ERROR_SET,
  payload
});

export const setSignUpErrors = (payload) => ({
  type: SIGNUP_ERRORS_SET,
  payload
});
