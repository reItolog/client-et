<template>
  <section class="form-container">
    <h2>Sign Up</h2>
    <p class="error" v-if="signupState.error">{{ signupState.error }}</p>
    <p v-if="signupState.data" class="succes">{{ signupState.data }}</p>
    <form>
      <v-text-field
        v-model="firstName"
        label="firstName"
        required
      ></v-text-field>

      <v-text-field v-model="lastName" label="lastName" required></v-text-field>

      <v-text-field v-model="email" label="E-mail" required></v-text-field>
      <v-text-field v-model="password" label="password" required></v-text-field>
      <v-btn :disabled="signupState.loading" class="mr-4" @click="handleSubmit">
        submit
        <Loader class="loader" v-if="signupState.loading" />
      </v-btn>
    </form>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import { validationMixin } from 'vuelidate';
import { required, maxLength, email } from 'vuelidate/lib/validators';
import Loader from '@/shared/UI/Loader/Loader';

export default {
  mixins: [validationMixin],
  validations: {
    firstName: { required, maxLength: maxLength(10) },
    email: { required, email },
  },
  components: {
    Loader,
  },
  data() {
    return {
      firstName: 'Dora',
      lastName: 'Mora',
      email: 'serhiirmn@gmail.com',
      password: '111111',
    };
  },
  computed: {
    ...mapState(['authState']),
    signupState() {
      return this.authState.signup;
    },
  },
  methods: {
    ...mapActions(['signup']),
    async handleSubmit() {
      const payload = {
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
        password: this.password,
      };

      await this.signup(payload);
    },
  },
};
</script>

<style>
@import './auth-form.scss';
</style>
