<template>
  <section class="form-container ">
    <h2>Sign In</h2>
    <form class="auth-form" @submit.prevent="handleSubmit">
      <div class="form--field">
        <label for="email">email</label>
        <input v-model="email" name="email" type="email" placeholder="email" />
      </div>
      <div class="form--field">
        <label for="password">password</label>
        <input
          v-model="password"
          name="password"
          type="password"
          placeholder="password"
        />
      </div>
      <button type="submit">
        send
      </button>
    </form>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },

  methods: {
    async handleSubmit() {
      try {
        const userPaylod = await axios.post('localhost:5000/signin', {
          email: this.email,
          password: this.password,
        });
        console.log(userPaylod);
      } catch (e) {
        console.log(e.message);
      }
    },
  },
};
</script>

<style>
@import './auth-form.scss';
</style>
