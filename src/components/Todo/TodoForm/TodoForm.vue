<template>
  <form class="todo-form">
    <v-text-field v-model="title" label="title" required></v-text-field>
    <v-text-field
      v-model="description"
      label="description"
      required
    ></v-text-field>

    <v-btn class="mr-4" @click.prevent="submit">
      add
    </v-btn>
  </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { getNewDate } from '../../../shared/utils/date';

export default {
  data: () => ({
    title: '',
    description: '',
  }),

  computed: {
    ...mapGetters(['user']),
    userId() {
      return this.user.data.uid;
    },
  },

  methods: {
    ...mapActions(['addTodo']),
    async submit() {
      const payload = {
        title: this.title.trim(),
        description: this.description.trim(),
        owner_id: this.userId,
        update_at: getNewDate(),
      };
      await this.addTodo(payload);
    },
  },
};
</script>

<style>
.todo-form {
  margin: 1% 2% 5% 2%;
}
</style>
