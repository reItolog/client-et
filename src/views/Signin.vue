<template>
  <main class="main">
    <SigninWithEmailForm />
    <router-link to="/auth/signup"
      ><v-btn>
        signup
      </v-btn></router-link
    >
  </main>
</template>

<script>
import SigninWithEmailForm from '@/components/Auth/SigninWithEmailForm';
export default {
  components: {
    SigninWithEmailForm,
  },
};
</script>

<style></style>
