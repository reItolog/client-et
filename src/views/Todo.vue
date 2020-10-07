<template>
  <MainLayout>
    <div class="todo">
      <TodoForm />
      <h3 v-if="todos" class="todo-title">Todos count: {{ todos.length }}</h3>
      <TodoCard v-if="todos" :todos="todos" />
    </div>
  </MainLayout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TodoCard from '../components/Todo/TodoCard/TodoCard';
import TodoForm from '@/components/Todo/TodoForm/TodoForm';
import MainLayout from '@/layouts/MainLayout';

export default {
  name: 'Home',
  components: {
    TodoCard,
    MainLayout,
    TodoForm,
  },
  computed: {
    ...mapGetters(['todos', 'logged']),
  },
  methods: {
    ...mapActions(['getTodos']),
    chekIsLogged() {
      if (!this.logged) {
        this.$router.push('/auth/signin');
      }
    },
  },
  created() {
    this.chekIsLogged();
    this.getTodos();
  },
};
</script>

<style lang="scss" scoped>
.todo {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.todo-title {
  margin-bottom: 5%;
}
</style>
