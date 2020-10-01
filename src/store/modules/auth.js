import { apiFetch } from '../../api/apiFetch';

export const auth = {
  state: () => ({
    signup: {
      data: null,
      error: null,
      loading: false,
    },
    verifyEmail: {
      loading: false,
      data: null,
      error: null,
    },
  }),
  mutations: {
    setSignUpState(state, payload) {
      state.signup = payload;
    },
    setVerifyEmailState(state, payload) {
      state.verifyEmail = payload;
    },
  },
  actions: {
    async signup(context, payload) {
      context.commit('setSignUpState', {
        data: null,
        error: null,
        loading: true,
      });
      const { data, error } = await apiFetch(`/signup`, payload, 'post');
      context.commit('setSignUpState', { data, error, loading: false });
    },

    async emailVerify(context, payload) {
      context.commit('setVerifyEmailState', {
        data: null,
        error: null,
        loading: true,
      });
      const { data, error } = await apiFetch(`/verify-email`, payload, 'post');
      context.commit('setVerifyEmailState', { data, error, loading: false });
    },
  },
};
