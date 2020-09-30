<template>
  <main class="main">
    <Signup />
    <router-link to="/auth/signin"
      ><v-btn>
        signIn
      </v-btn></router-link
    >
  </main>
</template>

<script>
import Signup from '@/components/Auth/SignupForm';

export default {
  components: {
    Signup,
  },
};
</script>

<style></style>
