<template>
  <section class="form-container">
    <h2>Sign Up</h2>
    <p class="error" v-if="signup.error">{{ signup.error }}</p>
    <p v-if="signup.data" class="succes">regsucces</p>
    <form class="auth-form" @submit.prevent="handleSubmit">
      <div class="form--field">
        <label for="firstName">firstName</label>
        <input v-model="firstName" name="firstName" type="text" />
      </div>

      <div class="form--field">
        <label for="lastName">lastName</label>
        <input v-model="lastName" name="lastName" type="text" />
      </div>

      <div class="form--field">
        <label for="email">email</label>
        <input v-model="email" name="email" type="email" />
      </div>

      <div class="form--field">
        <label for="password">password</label>
        <input v-model="password" name="password" type="password" />
      </div>

      <button type="submit">send</button>
    </form>
  </section>
</template>

<script>
export default {
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
    },
  },
};
</script>

<style>
@import './auth-form.scss';
</style>
