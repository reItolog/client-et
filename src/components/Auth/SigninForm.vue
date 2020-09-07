<template>
  <section class="form-container">
    <h2>Sign In</h2>
    <p class="error" v-if="error">{{ error }}</p>
    <form class="auth-form" @submit.prevent="handleSubmit">
      <div class="form--field">
        <label for="email">email</label>
        <input v-model="email" name="email" type="email" placeholder="email" />
      </div>
      <div class="form--field">
        <label for="password">password</label>
        <input v-model="password" name="password" type="password" placeholder="password" />
      </div>
      <button type="submit">send</button>
    </form>
  </section>
</template>

<script>
import apiConfig from '../../../config/api.json';
import { storageService } from '../../shared/services/localstorage.service';
import { useFetch } from '../../shared/utils/useFetch.js';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: '',
    };
  },

  methods: {
    async handleSubmit() {
      const { data, error } = await useFetch(
        `${apiConfig.baseApiUrl}/signin`,
        {
          email: this.email,
          password: this.password,
        },
        'post',
      );

      if (error) {
        this.error = error;
        return;
      }

      this.$store.commit('setToken', data.token);
      storageService.setAuthToken(data.token);
      this.$router.push('/');
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
