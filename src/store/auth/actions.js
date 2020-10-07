import { apiFetch } from '@/api/apiFetch';
import { storageService } from '@/shared/services/localstorage.service';

import { SET_LOGGED, SIGN_UP, VERIFY_EMAIL } from './types';
import { SET_USER, REMOVE_USER } from '../users/types';

export default {
  async signUp(context, payload) {
    context.commit(SIGN_UP, {
      data: null,
      error: null,
      loading: true,
    });
    const { data, error } = await apiFetch(`/signup`, payload, 'post');
    context.commit(SIGN_UP, { data, error, loading: false });
  },

  async emailVerify(context, payload) {
    context.commit(VERIFY_EMAIL, {
      data: null,
      error: null,
      loading: true,
    });
    const { data, error } = await apiFetch(`/verify-email`, payload, 'post');

    context.commit(VERIFY_EMAIL, { data, error, loading: false });
  },

  async setLogged({ commit }, payload) {
    storageService.setLogged(payload);

    commit(SET_LOGGED, payload);
  },

  async loginWithEmailAndPassword(context, payload) {
    context.commit(SET_USER, { data: null, error: null, loading: true });

    const { data, error } = await apiFetch(
      `/signinWithEmailAndPassword`,
      {
        email: payload.email,
        password: payload.password,
      },
      'post',
    );

    context.commit(SET_USER, { data, error, loading: false });
    context.dispatch('setLogged', true);
    if (!error) {
      storageService.setUser(data);
    }
  },

  logout({ commit, dispatch }) {
    storageService.removeUser();
    commit(REMOVE_USER, {
      data: null,
      error: null,
    });
    commit(SET_LOGGED, false);

    dispatch('setLogged', false);
  },
};
