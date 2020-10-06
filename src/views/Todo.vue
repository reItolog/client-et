<template>
  <MainLayout>
    <div class="todo">
      <TodoForm />
      <h3 v-if="todos.data" class="todo-title">
        Todos count: {{ todos.data.length }}
      </h3>
      <TodoCard v-if="todos.data" :todos="todos.data" />
    </div>
  </MainLayout>
</template>

<script>
import { mapState, mapActions } from 'vuex';
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
    ...mapState(['todoState', 'authState']),
    todos() {
      return this.todoState.todo;
    },
    isLogged() {
      return this.authState.logged;
    },
  },
  methods: {
    ...mapActions(['fetchTodoAsync']),
    chekIsLogged() {
      if (!this.isLogged) {
        this.$router.push('/auth/signin');
      }
    },
  },
  created() {
    this.chekIsLogged();
    this.fetchTodoAsync();
  },
  // beforeRouteEnter(to, from, next) {
  //   console.log('asdsad');
  //   if (to.query.redirectFrom) {
  //     next(vm => {
  //       vm.errorMsg =
  //         "Sorry, you don't have the right access to reach the route requested";
  //     });
  //   } else {
  //     next();
  //   }
  // },
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
