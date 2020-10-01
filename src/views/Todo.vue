<template>
  <MainLayout>
    <div class="todo">
      <h3>Todos count: {{ todos.data.length }}</h3>
      <TotoCard :todos="todos.data" />
    </div>
  </MainLayout>
</template>

<script>
import TotoCard from '../components/Todo/TotoCard/TotoCard';
import MainLayout from '@/layouts/MainLayout';

export default {
  name: 'Home',
  components: {
    TotoCard,
    MainLayout,
  },
  computed: {
    todos() {
      return this.$store.state.todoState.todo;
    },
  },
  methods: {
    fetchTodo() {
      this.$store.dispatch('fetchTodoAsync');
    },
  },
  created() {
    this.fetchTodo();
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
