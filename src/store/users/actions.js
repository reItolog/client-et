import { apiFetch } from '../../api/apiFetch';
import { GET_USERS, SET_USER } from './types';

export default {
  async getAllUsers({ commit }) {
    const { data, error } = await apiFetch(`/users`);
    commit(GET_USERS, { data, error });
  },

  async setUser({ commit }, payload) {
    commit(SET_USER, payload);
  },
};
