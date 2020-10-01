<template>
  <InfoLayout>
    <v-app>
      <v-main>
        <p v-if="verifyEmailState.error">{{ verifyEmailState.error }}</p>
        <v-container v-if="!verifyEmailState.loading">
          <p>{{ verifyEmailState.data }}</p>
          <router-link to="/auth/signin">Sign In</router-link>
        </v-container>
        <Loader v-else />
      </v-main>
    </v-app>
  </InfoLayout>
</template>

<script>
import Loader from '../shared/UI/Loader/Loader';
import InfoLayout from '../layouts/InfoLayout';

export default {
  components: {
    InfoLayout,
    Loader,
  },
  computed: {
    verifyEmailState() {
      return this.$store.state.authState.verifyEmail;
    },
  },
  methods: {
    verifyEmail() {
      const { oobCode } = this.$route.query;
      this.$store.dispatch('emailVerify', { actionCode: oobCode });
    },
  },
  created() {
    this.verifyEmail();
  },
};
</script>

<style></style>
