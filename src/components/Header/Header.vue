<template>
  <div id="nav">
    <router-link to="/">Todo</router-link>
    <router-link to="/users">Users</router-link>
    <button class="logout-btn" @click="signOut">log out</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['logout']),
    signOut() {
      this.logout();
      this.$router.push('/auth/signin');
    },
  },
};
</script>

<style></style>
