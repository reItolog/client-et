import { apiFetch } from '../../api/apiFetch';

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
  },
};
