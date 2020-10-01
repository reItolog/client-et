<template>
  <MainLayout>
    <SigninWithEmailForm />
    <router-link to="/auth/signup"
      ><v-btn>
        signup
      </v-btn></router-link
    >
  </MainLayout>
</template>

<script>
import SigninWithEmailForm from '@/components/Auth/SigninWithEmailForm';
import MainLayout from '@/layouts/MainLayout';

export default {
  components: {
    SigninWithEmailForm,
    MainLayout,
  },
};
</script>

<style></style>
