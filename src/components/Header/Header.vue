<template>
  <div id="nav">
    <router-link to="/">Todo</router-link>
    <router-link to="/users">Users</router-link>
    <router-link to="/auth/signin" v-if="!token">auth</router-link>
    <button class="logout-btn" v-if="token" @click="logOut">log out</button>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
