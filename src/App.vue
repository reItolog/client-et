<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { storageService } from './shared/services/localstorage.service';

export default {
  methods: {
    ...mapActions(['setUser', 'setLogged']),

    setUserToStore() {
      const user = storageService.getUser();
      const logged = storageService.getLogged();

      if (user) {
        this.setUser({ data: user, error: null });
        this.setLogged(logged);
      }
    },
  },
  created() {
    this.setUserToStore();
  },
};
</script>

<style lang="scss">
body,
html {
  height: 100%;
}

a {
  text-decoration: none;
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
  display: flex;
  justify-content: space-around;

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

.logout-btn {
  background: #7b094f;
  border: none;
  padding: 5px 15px;
  font-weight: bold;
  color: wheat;
  font-size: 1em;
  cursor: pointer;
  border-radius: 10px;
}
</style>
