<template>
  <MainLayout>
    <div class="todo">
      <h3>Todos count: {{ todos.data.length }}</h3>
      <TodoCard :todos="todos.data" />
    </div>
  </MainLayout>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import TodoCard from '../components/Todo/TodoCard/TodoCard';
import MainLayout from '@/layouts/MainLayout';

export default {
  name: 'Home',
  components: {
    TodoCard,
    MainLayout,
  },
  computed: {
    ...mapState(['todoState']),
    todos() {
      return this.todoState.todo;
    },
  },
  methods: {
    ...mapActions(['fetchTodoAsync']),
  },
  created() {
    this.fetchTodoAsync();
  },
};
</script>

<style lang="scss" scoped>
.todo {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
