import { SET_USER, REMOVE_USER, GET_USERS } from '@/store/users/types';

export const initialState = {
  user: {
    data: null,
    error: null,
    loading: false,
  },
  users: {
    data: [],
    error: null,
    loading: true,
  },
};

export default {
  [SET_USER]: (state, payload) => {
    state.user = payload;
  },
  [REMOVE_USER]: (state, payload) => {
    state.user = payload;
  },
  [GET_USERS]: (state, payload) => {
    state.users = {
      data: payload.data,
      error: payload.error,
      loading: false,
    };
  },
};
