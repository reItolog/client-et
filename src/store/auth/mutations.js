import { VERIFY_EMAIL, SET_LOGGED, SIGN_UP } from './types';

export const initialState = {
  logged: false,
  signup: {
    data: null,
    signUpError: null,
    loading: false,
  },
  verifyEmail: {
    loading: false,
    data: null,
    verifyEmailError: null,
  },
};

export default {
  [SIGN_UP]: (state, payload) => {
    state.signup = payload;
  },
  [SET_LOGGED]: (state, payload) => {
    state.logged = payload;
  },
  [VERIFY_EMAIL]: (state, payload) => {
    state.verifyEmail = payload;
  },
};
