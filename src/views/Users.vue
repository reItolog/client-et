<template>
  <section class="users">
    <h2>{{ users.error }}</h2>
    <Loader v-if="users.loading" />
    <ul class="user-list" v-else>
      <li v-for="user in users.data" :key="user.id" class="user-item">
        <span>{{ user.id }}: {{ user.first_name }} {{ user.last_name }}</span>
        <span>{{ user.email }}</span>
      </li>
    </ul>
  </section>
</template>

<script>
import Loader from '../shared/UI/Loader/Loader';
export default {
  components: {
    Loader,
  },
  computed: {
    users() {
      return this.$store.state.userState.users;
    },
  },
  methods: {
    async getAllUsers() {
      if (!this.users.data.length) {
        this.$store.dispatch('fetchAllUserAsync');
      }
    },
  },
  created() {
    this.getAllUsers();
  },
};
</script>

<style >
.user-item {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid grey;
  margin: 10px;
}
</style>