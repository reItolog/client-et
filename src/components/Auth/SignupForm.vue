<template>
  <section class="form-container">
    <h2>Sign Up</h2>
    <form class="auth-form">
      <div class="form--field">
        <label for="firstName">firstName</label>
        <input name="firstName" type="text" />
      </div>

      <div class="form--field">
        <label for="lastName">lastName</label>
        <input name="lastName" type="text" />
      </div>

      <div class="form--field">
        <label for="email">email</label>
        <input name="email" type="email" />
      </div>

      <div class="form--field">
        <label for="password">password</label>
        <input name="password" type="password" />
      </div>

      <button type="submit">send</button>
    </form>
  </section>
</template>

<script>
export default {};
</script>

<style>
@import './auth-form.scss';
</style>
