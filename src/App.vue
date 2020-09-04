<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/auth/signin" v-if="!token">auth</router-link>
      <button v-if="token" @click="logOut">authlogOut</button>
    </div>
    <router-view />
  </div>
</template>

<script>
import { storageService } from './shared/services/localstorage.service';
export default {
  data() {
    return {};
  },
  computed: {
    token() {
      return this.$store.state.token;
    },
  },
  methods: {
    logOut() {
      storageService.removeAuthToken();
      this.$store.commit('setToken', null);
    },
  },
  mounted() {
    const token = storageService.getAuthToken();
    if (!token) {
      this.$router.push('/auth/signin');
    }
  },
};
</script>

<style lang="scss">
body,
html {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: inherit;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.main {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
