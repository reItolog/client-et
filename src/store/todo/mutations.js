import { GET_TODOS, ADD_TODO, DELETE_TODO, UPDATE_TODO } from './types';

export const initialState = {
  loading: false,
  todos: [],
  error: null,
};

export default {
  [GET_TODOS]: (state, payload) => {
    state.todos = payload.data;
    state.error = payload.error;
  },
  [ADD_TODO]: (state, payload) => {
    state.todos.push(payload.data);
    state.error = payload.error;
  },
  [UPDATE_TODO]: (state, { data, error }) => {
    const updated = state.todos.find(item => item.id === data.id);

    updated.title = data.title;
    updated.description = data.description;
    updated.update_at = data.update_at;

    state.error = error;
  },
  [DELETE_TODO]: (state, { payload, error }) => {
    state.todos = state.todos.filter(item => item.id !== payload);
    state.error = error;
  },
};
