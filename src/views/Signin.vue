<template>
  <InfoLayout>
    <SigninWithEmailAndPasswordForm />
    <router-link to="/auth/signup"
      ><v-btn>
        signup
      </v-btn></router-link
    >
  </InfoLayout>
</template>

<script>
import SigninWithEmailAndPasswordForm from '@/components/Auth/SigninWithEmailAndPasswordForm';
import InfoLayout from '@/layouts/InfoLayout';

export default {
  components: {
    SigninWithEmailAndPasswordForm,
    InfoLayout,
  },
};
</script>

<style></style>
