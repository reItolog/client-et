import { apiFetch } from '../../api/apiFetch';

import { storageService } from '../../shared/services/localstorage.service';

export const users = {
  state: () => ({
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
  }),
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },

    removeUser(state, payload) {
      state.user = payload;
    },
    fetchAllUser(state, payload) {
      state.users = {
        data: payload.data,
        error: payload.error,
        loading: false,
      };
    },
  },
  actions: {
    async fetchAllUserAsync({ commit }) {
      const { data, error } = await apiFetch(`/users`);
      commit('fetchAllUser', { data, error });
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
    },
  },
};
