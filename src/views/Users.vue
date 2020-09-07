<template>
  <section class="users">
    <h2>{{users.error}}</h2>
    <ul class="user-list" v-if="users.loading">
      <li v-for="user in 5" :key="user" class="user-item">
        <span>......</span>
        <span>......</span>
      </li>
    </ul>
    <ul class="user-list" v-else>
      <li v-for="user in users.data" :key="user.id" class="user-item">
        <span>{{user.id}}: {{user.first_name}} {{user.last_name}}</span>
        <span>{{user.email}}</span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  components: {},
  computed: {
    users() {
      return this.$store.state.users;
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