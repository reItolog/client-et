<template>
  <div id="nav">
    <router-link to="/">Todo</router-link>
    <router-link to="/users">Users</router-link>
    <!-- <router-link to="/auth/signin">auth</router-link> -->
    <button class="logout-btn" @click="logOut">log out</button>
  </div>
</template>

<script>
export default {
  methods: {
    logOut() {
      this.$store.dispatch('logout');
      this.$router.push('/auth/signin');
    },
  },
};
</script>

<style></style>
