<template>
  <MainLayout>
    <Signup />
    <router-link to="/auth/signin"
      ><v-btn>
        signIn
      </v-btn></router-link
    >
  </MainLayout>
</template>

<script>
import Signup from '@/components/Auth/SignupForm';
import MainLayout from '@/layouts/MainLayout';

export default {
  components: {
    Signup,
    MainLayout,
  },
};
</script>

<style></style>
