<template>
  <MainLayout>
    <section class="users">
      <h2>{{ users.error }}</h2>
      <Loader v-if="users.loading" />
      <ul class="user-list" v-else>
        <li
          v-for="user in users.data.users"
          :key="user.id"
          class="user-item"
          :data-uid="user.uid"
        >
          <span> {{ user.displayName }}</span>
          <span>{{ user.email }}</span>
        </li>
      </ul>
    </section>
  </MainLayout>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import Loader from '../shared/UI/Loader/Loader';
import MainLayout from '@/layouts/MainLayout';

export default {
  components: {
    Loader,
    MainLayout,
  },
  computed: {
    ...mapState(['userState']),
    users() {
      return this.userState.users;
    },
  },
  methods: {
    ...mapActions(['fetchAllUserAsync']),
  },
  created() {
    this.fetchAllUserAsync();
  },
};
</script>

<style>
.user-item {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid grey;
  margin: 10px;
}
</style>
