<template>
  <main class="main">
    <SigninForm />
    <router-link to="/auth/signup">signup</router-link>
  </main>
</template>

<script>
import SigninForm from '@/components/Auth/SigninForm';
export default {
  components: {
    SigninForm,
  },
};
</script>

<style></style>
