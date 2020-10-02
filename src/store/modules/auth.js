import { apiFetch } from '../../api/apiFetch';
import { storageService } from '../../shared/services/localstorage.service';

export const auth = {
  state: () => ({
    logged: false,
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
    setLogged(state, payload) {
      state.logged = payload;
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

    async loginWithEmailAndPassword(context, payload) {
      context.commit('setUser', { data: null, error: null, loading: true });

      const { data, error } = await apiFetch(
        `/signinWithEmailAndPassword`,
        {
          email: payload.email,
          password: payload.password,
        },
        'post',
      );

      context.commit('setUser', { data, error, loading: false });
      context.commit('setLogged', true);
      if (!error) {
        storageService.setUser(data);
      }
    },

    logout({ commit }) {
      storageService.removeUser();
      commit('removeUser', {
        data: null,
        error: null,
      });
      commit('setLogged', false);
    },
  },
};
