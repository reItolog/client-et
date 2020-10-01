<template>
  <InfoLayout>
    <Signup />
    <router-link to="/auth/signin"
      ><v-btn>
        signIn
      </v-btn></router-link
    >
  </InfoLayout>
</template>

<script>
import Signup from '@/components/Auth/SignupForm';
import InfoLayout from '@/layouts/InfoLayout';

export default {
  components: {
    Signup,
    InfoLayout,
  },
};
</script>

<style></style>
