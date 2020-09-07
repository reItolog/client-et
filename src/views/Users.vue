<template>
  <section class="users">
    <h2>{{error}}</h2>

    <ul class="user-list">
      <li v-for="user in users" :key="user.id" class="user-item">
        <span>{{user.id}}: {{user.first_name}} {{user.last_name}}</span>
        <span>{{user.email}}</span>
      </li>
    </ul>
  </section>
</template>

<script>
import apiConfig from '../../config/api.json';
import { useFetch } from '../shared/utils/useFetch';
export default {
  data() {
    return {
      users: [],
      error: '',
    };
  },
  methods: {
    async getAllUsers() {
      const { data, error } = await useFetch(`${apiConfig.baseApiUrl}/users`);

      if (error) {
        this.error = error.message;
        return;
      }

      this.users = data;
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