<tamplate>
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

    <v-btn class="mr-4" @click="handleSubmit">
      signIn
    </v-btn>

    <p class="succes" v-if="user.data">{{ user.data.message }}</p>
  </v-form>
</section>
</tamplate>

<script>
export default {
  data() {
    return {
      valid: true,
      email: '',
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
      await this.$store.dispatch('loginWithEmail', {
        email: this.email,
      });
      // if (!this.user.error) {
      //   this.$router.push('/');
      // }
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
