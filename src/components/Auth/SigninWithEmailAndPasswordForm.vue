<template>
  <section class="form-container">
    <h2>Sign In</h2>
    <p class="error" v-if="user.error">{{ user.error }}</p>

    <v-form autocomplete="on" ref="form" @submit.prevent="handleSubmit">
      <v-text-field
        v-model="email"
        label="Email"
        type="email"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        label="Password"
        type="password"
        required
      ></v-text-field>

      <v-btn :disabled="user.loading" class="mr-4" @click="handleSubmit">
        sign In <span v-if="user.loading">...</span>
        <v-progress-circular
          v-if="user.loading"
          class="loader"
          indeterminate
          color="primary"
        ></v-progress-circular>
      </v-btn>
    </v-form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      email: '',
      password: '',
    };
  },
  computed: {
    user() {
      return this.$store.state.userState.user;
    },
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    async handleSubmit() {
      await this.$store.dispatch('loginWithEmailAndPassword', {
        email: this.email,
        password: this.password,
      });
      if (!this.user.error) {
        this.$router.push('/');
      }
    },
  },
};
</script>

<style>
@import './auth-form.scss';

.error {
  position: absolute;
  top: 0;
  background: rgb(173, 58, 58);
  padding: 10px;
  color: white;
  font-weight: bold;
}
</style>
