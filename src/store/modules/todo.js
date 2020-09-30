import { apiFetch } from '../../api/apiFetch';

export const todo = {
  state: () => ({
    todo: {
      data: [],
      error: null,
      loading: true,
    },
  }),
  mutations: {
    fetchTodo(state, payload) {
      state.todo = {
        data: payload.data,
        error: payload.error,
        loading: false,
      };
    },
  },
  actions: {
    async fetchTodoAsync({ commit }) {
      const { data, error } = await apiFetch(`/todo`);
      commit('fetchTodo', { data, error });
    },
  },
};
