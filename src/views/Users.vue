<template>
  <MainLayout>
    <section class="users">
      <h2 v-if="users.error">{{ users.error }}</h2>
      <UsersList v-else :users="users.data.users" />

      <Loader v-if="users.loading" />
    </section>
  </MainLayout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import Loader from '../shared/UI/Loader/Loader';
import UsersList from '@/components/Users/UsersList';
import MainLayout from '@/layouts/MainLayout';

export default {
  components: {
    Loader,
    UsersList,
    MainLayout,
  },
  computed: {
    ...mapGetters(['users']),
  },
  methods: {
    ...mapActions(['getAllUsers']),
  },
  created() {
    this.getAllUsers();
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
