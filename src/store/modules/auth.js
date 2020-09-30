import { apiFetch } from '../../api/apiFetch';

export const auth = {
  state: () => ({
    signup: {
      data: null,
      error: null,
    },
  }),
  mutations: {
    setSignUpState(state, payload) {
      state.signup = payload;
    },
  },
  actions: {
    async signup(context, payload) {
      const { data, error } = await apiFetch(`/signup`, payload, 'post');
      context.commit('setSignUpState', { data, error });
    },
  },
};
