import { apiFetch } from '@/api/apiFetch';
import { GET_TODOS, ADD_TODO, UPDATE_TODO, DELETE_TODO } from './types';

export default {
  async getTodos({ commit }) {
    const { data, error } = await apiFetch(`/todo`);
    commit(GET_TODOS, { data, error });
  },
  async addTodo(context, payload) {
    const { error } = await apiFetch(`/todo`, payload, 'post');

    context.commit(ADD_TODO, { data: payload, error });
  },

  async updateTodo(context, payload) {
    const { error } = await apiFetch(`/todo`, payload, 'patch');

    context.commit(UPDATE_TODO, { data: payload, error });
  },

  async deleteTodo(context, payload) {
    const { error } = await apiFetch(`/todo/${payload}`, payload, 'delete');

    context.commit(DELETE_TODO, { payload, error });
  },
};
