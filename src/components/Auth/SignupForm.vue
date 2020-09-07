<template>
  <section class="form-container">
    <h2>Sign Up</h2>
    <p class="error" v-if="error">{{ error }}</p>
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
import apiConfig from '../../../config/api.json';
import { useFetch } from '../../shared/utils/useFetch.js';

export default {
  data() {
    return {
      firstName: 'Dora',
      lastName: 'Mora',
      email: 'test@gmail.com',
      password: '123',
      error: '',
    };
  },
  methods: {
    async handleSubmit() {
      const payload = {
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
        password: this.password,
      };

      const { error } = await useFetch(
        `${apiConfig.baseApiUrl}/signup`,
        payload,
        'post',
      );

      if (error) {
        this.error = error;
        return;
      } else {
        this.error = '';
      }
    },
  },
};
</script>

<style>
@import './auth-form.scss';
</style>
