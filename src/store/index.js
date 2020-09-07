import Vue from 'vue';
import Vuex from 'vuex';

import { storageService } from '../shared/services/localstorage.service';
import apiConfig from '../../config/api.json';
import { useFetch } from '../shared/utils/useFetch';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      data: null,
      error: null,
    },
    users: {
      data: [],
      error: null,
      loading: true,
    },
    signup: {
      data: null,
      error: null,
    },
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setSignUpState(state, payload) {
      state.signup = payload;
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
      const { data, error } = await useFetch(`${apiConfig.baseApiUrl}/users`);
      commit('fetchAllUser', { data, error });
    },

    async signup(context, payload) {
      const { data, error } = await useFetch(
        `${apiConfig.baseApiUrl}/signup`,
        payload,
        'post',
      );
      context.commit('setSignUpState', { data, error });
    },

    async login(context, payload) {
      const { data, error } = await useFetch(
        `${apiConfig.baseApiUrl}/signin`,
        {
          email: payload.email,
          password: payload.password,
        },
        'post',
      );

      context.commit('setUser', { data, error });
      storageService.setUser(data);
    },

    logout({ commit }) {
      storageService.removeUser();
      commit('removeUser', {
        data: null,
        error: null,
      });
    },
  },
  modules: {},
});
