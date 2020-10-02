import { apiFetch } from '../../api/apiFetch';

export const todo = {
  state: () => ({
    loading: false,
    todo: {
      data: [],
      error: null,
    },
  }),
  mutations: {
    fetchTodo(state, payload) {
      state.todo = payload;
    },
    addTodo(state, payload) {
      state.todo.data.push(payload.data);
      state.todo.error = payload.error;
    },
    updateTodo(state, payload) {
      const updated = state.todo.data.find(item => item.id === payload.id);
      console.log('upt', updated);
      updated.title = payload.title;
      updated.description = payload.description;
      updated.update_at = payload.update_at;
      console.log('UPPED', updated);
    },
  },
  actions: {
    async fetchTodoAsync({ commit }) {
      const { data, error } = await apiFetch(`/todo`);
      commit('fetchTodo', { data, error });
    },
    async addTodoAsync(context, payload) {
      const { data, error } = await apiFetch(`/todo`, payload, 'post');
      console.log(data);
      context.commit('addTodo', { data: payload, error });
    },

    async updateTodoAsync(context, payload) {
      // console.log(payload);

      context.commit('updateTodo', payload);
    },
  },
};
