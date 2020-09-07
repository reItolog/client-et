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
    const user = storageService.getUser();

    if (user && user.token) {
      next(true);
    } else {
      next(vm => {
        vm.$router.push('/auth/signin');
      });
    }
  },
};
</script>
