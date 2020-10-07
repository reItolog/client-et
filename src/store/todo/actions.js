import { apiFetch } from '@/api/apiFetch';
import { GET_TODOS, ADD_TODO, UPDATE_TODO, DELETE_TODO } from './types';

export default {
  async getTodos({ commit }) {
    const { data, error } = await apiFetch(`/todo`);
    commit(GET_TODOS, { data, error });
  },
  async addTodo({ commit }, payload) {
    const { error } = await apiFetch(`/todo`, payload, 'post');

    commit(ADD_TODO, { data: payload, error });
  },

  async updateTodo({ commit }, payload) {
    const { error } = await apiFetch(`/todo`, payload, 'patch');

    commit(UPDATE_TODO, { data: payload, error });
  },

  async deleteTodo({ commit }, payload) {
    const { error } = await apiFetch(`/todo/${payload}`, payload, 'delete');

    commit(DELETE_TODO, { payload, error });
  },
};
