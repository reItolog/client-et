<template>
  <InfoLayout>
    <v-app>
      <v-main>
        <p v-if="verifyEmail.error">{{ verifyEmail.error }}</p>
        <v-container v-if="!verifyEmail.loading">
          <p>{{ verifyEmail.data }}</p>
          <router-link to="/auth/signin">Sign In</router-link>
        </v-container>
        <Loader v-else />
      </v-main>
    </v-app>
  </InfoLayout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Loader from '../shared/UI/Loader/Loader';
import InfoLayout from '../layouts/InfoLayout';

export default {
  components: {
    InfoLayout,
    Loader,
  },
  computed: {
    ...mapGetters(['verifyEmail']),
  },
  methods: {
    ...mapActions(['emailVerify']),
    verifyEmailActions() {
      const { oobCode } = this.$route.query;
      this.emailVerify({ actionCode: oobCode });
    },
  },
  created() {
    this.verifyEmailActions();
  },
};
</script>

<style></style>
