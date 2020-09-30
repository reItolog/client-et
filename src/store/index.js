import Vue from 'vue';
import Vuex from 'vuex';

import { users, todo, auth } from './modules';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    userState: users,
    todoState: todo,
    authState: auth,
  },
  strict: debug,
});
