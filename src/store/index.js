import Vue from 'vue';
import Vuex from 'vuex';

import auth from './auth';
import users from './users';
import todo from './todo';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    users,
    todo,
    auth,
  },
  strict: debug,
});
