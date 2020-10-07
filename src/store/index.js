import Vue from 'vue';
import Vuex from 'vuex';

import { todo, auth } from './modules';
import users from './users';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    users,
    todoState: todo,
    authState: auth,
  },
  strict: debug,
});
