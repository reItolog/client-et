<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
import { storageService } from '../shared/services/localstorage.service';

export default {
  name: 'Home',
  components: {},
  beforeRouteEnter(to, from, next) {
    const token = storageService.getAuthToken();
    if (token) {
      next(true);
    } else {
      next(false);
    }
  },
};
</script>
