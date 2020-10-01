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
import { mapActions, mapState } from 'vuex';
import Loader from '../shared/UI/Loader/Loader';
import InfoLayout from '../layouts/InfoLayout';

export default {
  components: {
    InfoLayout,
    Loader,
  },
  computed: {
    ...mapState(['authState']),
    verifyEmailState() {
      return this.authState.verifyEmail;
    },
  },
  methods: {
    ...mapActions(['emailVerify']),
    verifyEmail() {
      const { oobCode } = this.$route.query;
      this.emailVerify({ actionCode: oobCode });
    },
  },
  created() {
    this.verifyEmail();
  },
};
</script>

<style></style>
