<template>
  <main class="main">
    <Signup />
    <router-link to="/auth/signin">signin</router-link>
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
