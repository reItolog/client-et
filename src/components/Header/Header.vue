<template>
  <v-toolbar color="pink" dark class="toolbar">
    <div class="nav">
      <router-link to="/">Todo</router-link>
      <router-link to="/users">Users</router-link>
    </div>
    <v-spacer></v-spacer>
    <button class="logout-btn" @click="signOut">log out</button>
  </v-toolbar>
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

<style lang="scss" scoped>
.toolbar {
  margin-bottom: 5%;
}
.nav {
  width: 100px;
  display: flex;
  justify-content: space-between;
  a {
    color: white;
    &:hover {
      color: wheat;
    }
  }
}
</style>
