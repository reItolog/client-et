<template>
  <div class="todo">
    <h3>Todos count: {{ todos.data.length }}</h3>
    <TotoCard :todos="todos.data" />
  </div>
</template>

<script>
import { storageService } from '../shared/services/localstorage.service';
import TotoCard from '../components/Todo/TotoCard/TotoCard';

export default {
  name: 'Home',
  components: {
    TotoCard,
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
  beforeRouteEnter(to, from, next) {
    const user = storageService.getUser();

    if (user && user.token) {
      next(true);
    } else {
      next(vm => {
        vm.$router.push('/auth/signin');
      });
    }
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
