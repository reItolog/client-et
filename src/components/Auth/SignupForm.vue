<template>
  <section class="form-container">
    <h2>Sign Up</h2>
    <p class="error" v-if="signup.error">{{ signup.error }}</p>
    <p v-if="signup.data" class="succes">regsucces</p>
    <form>
      <v-text-field
        v-model="firstName"
        label="firstName"
        required
      ></v-text-field>

      <v-text-field v-model="lastName" label="lastName" required></v-text-field>

      <v-text-field v-model="email" label="E-mail" required></v-text-field>
      <v-text-field v-model="password" label="password" required></v-text-field>
      <v-btn class="mr-4" @click="handleSubmit">
        submit
      </v-btn>
    </form>
  </section>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, maxLength, email } from 'vuelidate/lib/validators';
export default {
  mixins: [validationMixin],
  validations: {
    firstName: { required, maxLength: maxLength(10) },
    email: { required, email },
  },
  data() {
    return {
      firstName: 'Dora',
      lastName: 'Mora',
      email: 'test@gmail.com',
      password: '123',
    };
  },
  computed: {
    signup() {
      console.log(this.$store.state.authState.signup);
      return this.$store.state.authState.signup;
    },
  },
  methods: {
    async handleSubmit() {
      const payload = {
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
        password: this.password,
      };

      this.$store.dispatch('signup', payload);
      // if (!this.signup.error) {
      //   this.$router.push('/auth/signin');
      // }
    },
  },
};
</script>

<style>
@import './auth-form.scss';
</style>
