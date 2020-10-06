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
    updateTodo(state, { data, error }) {
      const updated = state.todo.data.find(item => item.id === data.id);

      updated.title = data.title;
      updated.description = data.description;
      updated.update_at = data.update_at;

      state.error = error;
    },
    deleteTodo(state, { payload, error }) {
      state.todo.data = state.todo.data.filter(item => item.id !== payload);
      state.error = error;
    },
  },
  actions: {
    async fetchTodoAsync({ commit }) {
      const { data, error } = await apiFetch(`/todo`);
      commit('fetchTodo', { data, error });
    },
    async addTodoAsync(context, payload) {
      const { error } = await apiFetch(`/todo`, payload, 'post');

      context.commit('addTodo', { data: payload, error });
    },

    async updateTodoAsync(context, payload) {
      const { error } = await apiFetch(`/todo`, payload, 'patch');

      context.commit('updateTodo', { data: payload, error });
    },

    async deleteTodoAsync(context, payload) {
      const { data, error } = await apiFetch(
        `/todo/${payload}`,
        payload,
        'delete',
      );

      console.log(data);

      context.commit('deleteTodo', { payload, error });
    },
  },
};
